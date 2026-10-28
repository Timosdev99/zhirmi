import { defineQuery } from "next-sanity";

export const caseStudiesQuery = defineQuery(`
  *[_type == "caseStudy" && defined(slug.current)]
  | order(coalesce(order, 999) asc, _createdAt desc) {
    "slug": slug.current,
    client,
    industry,
    summary,
    problem,
    approach,
    scope,
    tools,
    outcome,
    serviceSlugs,
    "imageUrl": desktopImage.asset->url,
    "imageWidth": desktopImage.asset->metadata.dimensions.width,
    "imageHeight": desktopImage.asset->metadata.dimensions.height,
    "mobileImageUrl": mobileImage.asset->url,
    "mobileImageWidth": mobileImage.asset->metadata.dimensions.width,
    "mobileImageHeight": mobileImage.asset->metadata.dimensions.height
  }
`);
