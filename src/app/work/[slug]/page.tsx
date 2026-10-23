import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import CTASection from "@/component/cta";
import { caseStudies } from "@/content/caseStudies";
import { serviceCategories } from "@/content/services";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return createMetadata({
    title: `${study.client} — Case Study`,
    description: study.summary,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedServices = serviceCategories.filter((service) =>
    study.serviceSlugs.includes(service.slug),
  );

  const relatedStudies = caseStudies
    .filter((item) => item.slug !== study.slug)
    .sort((a, b) => {
      const aScore = a.serviceSlugs.filter((service) =>
        study.serviceSlugs.includes(service),
      ).length;
      const bScore = b.serviceSlugs.filter((service) =>
        study.serviceSlugs.includes(service),
      ).length;
      return bScore - aScore;
    })
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${study.client} case study`,
    description: study.summary,
    genre: "Case study",
    about: study.industry ?? study.client,
    keywords: study.tools.join(", "),
    creator: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    url: `${site.url}/work/${study.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-background">
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              All work
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  Case study
                  {study.industry && (
                    <span className="text-muted">/ {study.industry}</span>
                  )}
                </p>
                <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
                  {study.client}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
                  {study.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={site.bookingUrl}
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Discuss a similar project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
                  >
                    See services
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                    At a glance
                  </p>
                  <dl className="mt-5 space-y-5 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Client
                      </dt>
                      <dd className="mt-1 text-foreground">{study.client}</dd>
                    </div>

                    {study.industry && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Industry
                        </dt>
                        <dd className="mt-1 text-foreground">
                          {study.industry}
                        </dd>
                      </div>
                    )}

                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Services
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {relatedServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted transition-colors hover:text-accent-ink"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </dd>
                    </div>

                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Tools
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {study.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
                          >
                            {tool}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-3">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  The brief
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                  What needed to change.
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {study.problem}
                </p>
              </div>

              <div className="lg:col-span-2">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  What we did
                </p>
                <ol className="mt-6 space-y-4">
                  {study.approach.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-4 rounded-2xl border border-border bg-surface p-5"
                    >
                      <span className="font-display text-sm font-bold text-accent-ink">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-muted">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  Scope
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                  What was delivered.
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {study.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  Outcome
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                  Where it landed.
                </h2>
                <ul className="mt-6 space-y-3">
                  {study.outcome.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {relatedStudies.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                    <span aria-hidden>✱</span>
                    Related work
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                    More projects.
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
                >
                  See all work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {relatedStudies.map((item) => (
                  <article
                    key={item.slug}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                      {item.industry ?? "Case study"}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-brand">
                      <Link
                        href={`/work/${item.slug}`}
                        className="transition-colors hover:text-accent-ink"
                      >
                        {item.client}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.summary}</p>
                    <Link
                      href={`/work/${item.slug}`}
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
        )}
      </div>

      <CTASection />
    </>
  );
}
