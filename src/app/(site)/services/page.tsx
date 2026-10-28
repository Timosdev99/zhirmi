import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/component/cta";
import {
  serviceCategories,
  serviceChapters,
  serviceHubFaqs,
  serviceStartPoints,
} from "@/content/services";
import { site } from "@/content/site";
import { getCaseStudies } from "@/lib/caseStudies";
import { createMetadata } from "@/lib/metadata";

export const revalidate = 60;

export const metadata = createMetadata({
  title: "Services — Websites, Growth, AI & Systems",
  description:
    "Websites, custom engineering, SEO, content, AI agents, automation and operational support for businesses that need the whole system to work together.",
  path: "/services",
});

const chapterCategories = serviceChapters.map((chapter) => ({
  ...chapter,
  categories: serviceCategories.filter((category) =>
    chapter.categorySlugs.includes(category.slug),
  ),
}));

const capabilities = [
  "We build the website, the store and the custom software behind them.",
  "We grow search visibility, content and campaigns that bring enquiries.",
  "We connect AI and automation to the systems the business already runs.",
  "We keep the day-to-day operations moving after launch.",
];

export default async function ServicesPage() {
  const studies = await getCaseStudies();

  return (
    <div className="bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
            Services / Build, growth, systems
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-brand sm:text-6xl lg:text-7xl">
            The system behind your business.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="max-w-xl text-lg leading-relaxed text-muted lg:col-span-5">
              From the first website decision to the software, campaigns and
              automations the business runs on. One team, one point of contact,
              and the practical work that connects it all.
            </p>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {capabilities.map((item) => (
                <p
                  key={item}
                  className="border-t border-border pt-4 text-sm leading-relaxed text-foreground"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href={site.bookingUrl}
              className="group inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Book a free call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="border-b-brand/30 rounded-sm border-brand/30 pb-1 px-6 py-4 text-sm font-semibold text-brand border-b-4  transition-colors hover:border-accent-ink hover:text-accent-ink"
            >
              See pricing
            </Link>
          </div>
        </div>

        <nav aria-label="Service chapters" className="border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
            {chapterCategories.map((chapter) => (
              <div key={chapter.slug}>
                <a
                  href={`#${chapter.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-t border-brand/25 pt-4"
                >
                  <span className="font-display text-xl font-bold text-brand transition-colors group-hover:text-accent-ink">
                    {chapter.title}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {chapter.number}
                  </span>
                </a>
                <ul className="mt-4 space-y-2">
                  {chapter.categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/services/${category.slug}`}
                        className="text-sm text-muted transition-colors hover:text-accent-ink"
                      >
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </section>

      {chapterCategories.map((chapter, chapterIndex) => (
        <section
          key={chapter.slug}
          id={chapter.slug}
          className={`scroll-mt-20 border-b border-border ${chapterIndex % 2 === 1 ? "bg-surface" : "bg-background"
            }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                    {chapter.number} / {chapter.title}
                  </p>
                  <h2 className="mt-5 max-w-md font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl lg:text-6xl">
                    {chapter.headline}
                  </h2>
                  <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
                    {chapter.description}
                  </p>
                  <span
                    aria-hidden
                    className="mt-8 hidden h-px w-16 bg-accent lg:block"
                  />
                </div>
              </div>

              <div className="space-y-16 lg:col-span-8">
                {chapter.categories.map((category) => {
                  const preview = category.services.slice(0, 5);
                  const remaining = category.services.length - preview.length;

                  return (
                    <article key={category.slug}>
                      <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="font-display text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                          {category.title}
                        </h3>
                        <Link
                          href={`/services/${category.slug}`}
                          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
                        >
                          Explore service
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                        {category.description}
                      </p>

                      <ul className="mt-8 grid">
                        {preview.map((service) => (
                          <li
                            key={service.name}
                            className="border-t border-border py-4"
                          >
                            <p className="text-base font-semibold text-brand sm:text-lg">
                              {service.name}
                            </p>
                            {service.detail && (
                              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
                                {service.detail}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                        {remaining > 0 && (
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            +{remaining} more capabilities
                          </p>
                        )}
                        <Link
                          href="/pricing"
                          className="text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
                        >
                          See pricing
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-border bg-brand py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Where to start
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl">
                Start from where you are.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:col-span-8">
              {serviceStartPoints.map((point, index) => (
                <article
                  key={point.title}
                  className="border-t border-white/20 pt-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {point.description}
                  </p>
                  <Link
                    href={point.href}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white"
                  >
                    {point.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                Selected work
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-brand sm:text-5xl">
                The work makes the case.
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
            >
              All projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {studies.slice(0, 3).map((study, index) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group grid gap-4 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink md:col-span-1">
                  0{index + 1}
                </span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-bold text-brand transition-colors group-hover:text-accent-ink">
                    {study.client}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {study.industry ?? "Case study"}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">
                  {study.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-ink md:col-span-2 md:justify-end">
                  View project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                Questions
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
                Before you get in touch.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                Still unsure?{" "}
                <Link
                  href={site.bookingUrl}
                  className="font-semibold text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:text-brand"
                >
                  Book a free call
                </Link>{" "}
                and we will give you a straight answer.
              </p>
            </div>

            <div className="divide-y divide-border border-y border-border lg:col-span-8">
              {serviceHubFaqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-brand [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      aria-hidden
                      className="text-xl font-normal text-accent-ink transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
