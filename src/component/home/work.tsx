import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectMedia from "@/component/projectMedia";
import { getCaseStudies } from "@/lib/caseStudies";

export default async function HomeWork() {
  const featured = (await getCaseStudies()).slice(0, 3);

  return (
    <section id="work" className="scroll-mt-24 border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
              Selected work
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
              Projects with a real brief.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
          >
            All projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 space-y-16">
          {featured.map((study, index) => (
            <article
              key={study.slug}
              className="border-t border-border pt-8"
            >
              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="order-1 lg:order-none lg:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {study.industry ?? "Case study"}
                  </p>
                </div>

                <div className="order-2 lg:order-none lg:col-span-5">
                  <div className="flex items-start justify-between gap-4 lg:block">
                    <div>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                        {study.client}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                        {study.summary}
                      </p>
                    </div>
                    <Link
                      href={`/work/${study.slug}`}
                      className="group mt-1 inline-flex shrink-0 items-center gap-2 whitespace-nowrap border-b border-brand/30 pb-1 text-xs font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink lg:hidden"
                    >
                      Case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <Link
                    href={`/work/${study.slug}`}
                    className="group mt-6 hidden items-center gap-2 border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink lg:inline-flex"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className="order-4 grid gap-6 sm:grid-cols-2 lg:order-none lg:col-span-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                      The problem
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      What shipped
                    </p>
                    <ul className="mt-3 space-y-2">
                      {study.scope.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span aria-hidden className="text-accent-ink">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {study.imageUrl && (
                  <div className="order-3 lg:order-none lg:col-span-12">
                    <ProjectMedia study={study} />
                  </div>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
