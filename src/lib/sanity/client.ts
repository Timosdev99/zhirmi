import "server-only";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const readToken = process.env.SANITY_API_READ_TOKEN;

export const sanityConfigured = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId: projectId || "missing",
  dataset: dataset || "production",
  apiVersion: "2026-10-28",
  // Authenticated/private-dataset requests must go to Sanity's API, not its CDN.
  useCdn: !readToken,
  token: readToken,
});
