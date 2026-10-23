import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Zhirmitech — websites, marketing, AI and operations",
};

export function createMetadata({
  title,
  description,
  path = "/",
}: PageMetadata): Metadata {
  const url = new URL(path, site.url).toString();
  const socialTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
