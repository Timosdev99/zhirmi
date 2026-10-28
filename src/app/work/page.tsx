import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WorkArchive from "@/component/workArchive";
import { caseStudies } from "@/content/caseStudies";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Selected work — Websites, Automation & Care",
  description:
    "Explore ZhirmiTech projects across Wix Studio, WordPress, Shopify, CRM automation and Amazon Seller Central.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
          The portfolio
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand sm:text-6xl">
          Selected work.
        </h1>
        <div className="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            A closer look at the sites, systems and support behind the work.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {String(caseStudies.length).padStart(2, "0")} projects
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <WorkArchive />
      </div>

      <section className="border-t border-border bg-brand py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Want results like these?
            </h2>
            <p className="mt-2 text-white/70">
              Tell us what you are working on and we will suggest the next step.
            </p>
          </div>
          <Link
            href={site.bookingUrl}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-accent-dark"
          >
            Book a free call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
