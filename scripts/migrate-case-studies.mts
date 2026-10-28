import { createClient } from "@sanity/client";
import { caseStudies } from "../src/content/caseStudies.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;
const force = process.argv.includes("--force");
const maxAttempts = 3;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET or SANITY_API_WRITE_TOKEN.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-10-28",
  useCdn: false,
});

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function retry<T>(label: string, operation: () => Promise<T>): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt === maxAttempts) {
        break;
      }

      const delay = attempt * 2_000;
      console.warn(
        `${label} failed (attempt ${attempt}/${maxAttempts}); retrying in ${delay / 1000}s...`,
      );
      await wait(delay);
    }
  }

  throw lastError;
}

async function uploadImage(url: string, fallbackName: string) {
  const response = await retry(`Download ${url}`, () => fetch(url));

  if (!response.ok) {
    throw new Error(`Could not download image: ${url}`);
  }

  const filename =
    new URL(url).pathname.split("/").pop() || `${fallbackName}.jpg`;
  const contentType = response.headers.get("content-type") || undefined;
  const buffer = Buffer.from(await response.arrayBuffer());
  const asset = await retry(`Upload ${filename}`, () =>
    client.assets.upload("image", buffer, {
      filename,
      contentType,
    }),
  );

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

for (const [index, study] of caseStudies.entries()) {
  const id = `caseStudy.${study.slug}`;
  const existing = await retry(`Check ${id}`, () => client.getDocument(id));

  if (existing && !force) {
    console.log(`skip   ${study.client} (${id})`);
    continue;
  }

  const desktopImage = study.imageUrl
    ? await uploadImage(study.imageUrl, `${study.slug}-desktop`)
    : undefined;
  const mobileImage = study.mobileImageUrl
    ? await uploadImage(study.mobileImageUrl, `${study.slug}-mobile`)
    : undefined;

  const document = {
    _id: id,
    _type: "caseStudy",
    client: study.client,
    slug: {
      _type: "slug",
      current: study.slug,
    },
    industry: study.industry,
    summary: study.summary,
    problem: study.problem,
    approach: study.approach,
    scope: study.scope,
    outcome: study.outcome,
    serviceSlugs: study.serviceSlugs,
    order: index + 1,
    ...(study.tools?.length ? { tools: study.tools } : {}),
    ...(desktopImage ? { desktopImage } : {}),
    ...(mobileImage ? { mobileImage } : {}),
  };

  await retry(`Create ${id}`, () => client.createOrReplace(document));
  console.log(`migrate ${study.client} (${id})`);
}

console.log("Case study migration complete.");
