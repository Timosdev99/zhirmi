import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/types";

type PortfolioSectionProps = {
  studies: CaseStudy[];
};

export default function PortfolioSection({ studies }: PortfolioSectionProps) {
  const featured = studies.slice(0, 3);

  return (
    <section className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
              <span aria-hidden>✱</span>
              Work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand sm:text-4xl lg:text-5xl">
              Selected work.
            </h2>
            <p className="mt-4 text-muted">
              Real client projects across websites, memberships, CRM automation
              and ongoing care.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink md:self-auto"
          >
            See all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((study) => (
            <article
              key={study.slug}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <span className="h-1 w-12 rounded-full bg-accent" aria-hidden />
              <h3 className="mt-5 font-display text-xl font-bold text-brand">
                <Link
                  href={`/work/${study.slug}`}
                  className="transition-colors hover:text-accent-ink"
                >
                  {study.client}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {study.summary}
              </p>
              {study.tools && study.tools.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              )}
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
      </div>
    </section>
  );
}
