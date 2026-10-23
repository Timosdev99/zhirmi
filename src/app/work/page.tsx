import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work — Websites, Automation & Care",
  description:
    "Selected Zhirmitech projects across Wix Studio, WordPress, Shopify, CRM automation and Amazon Seller Central.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-ink">
            Work
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
            Real projects, real scope.
          </h1>
          <p className="mt-5 text-lg text-muted">
            A selection of client work across websites, memberships, CRM
            automation, e-commerce and ongoing care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-ink">
                {study.industry ?? "Case study"}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-brand">
                <Link
                  href={`/work/${study.slug}`}
                  className="transition-colors hover:text-accent-ink"
                >
                  {study.client}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted">{study.summary}</p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {study.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {study.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Link
                href={`/work/${study.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
              >
                Read case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

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
