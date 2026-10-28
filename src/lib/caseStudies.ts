import "server-only";
import { cache } from "react";
import { caseStudies as fallbackCaseStudies } from "@/content/caseStudies";
import type { CaseStudy } from "@/content/types";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { caseStudiesQuery } from "@/lib/sanity/queries";

export const getCaseStudies = cache(async (): Promise<CaseStudy[]> => {
  if (!sanityConfigured) {
    return fallbackCaseStudies;
  }

  try {
    const studies = await sanityClient.fetch<CaseStudy[]>(
      caseStudiesQuery,
      {},
      {
        next: {
          revalidate: 60,
          tags: ["case-study"],
        },
      },
    );

    return studies;
  } catch (error) {
    console.error("Sanity case study fetch failed:", error);
    return fallbackCaseStudies;
  }
});

export const getCaseStudy = cache(
  async (slug: string): Promise<CaseStudy | undefined> => {
    const studies = await getCaseStudies();
    return studies.find((study) => study.slug === slug);
  },
);
