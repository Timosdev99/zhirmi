import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTASection from "@/component/cta";
import ServiceProcess from "@/component/serviceProcess";
import { caseStudies } from "@/content/caseStudies";
import { servicePageContent } from "@/content/servicePages";
import {
  serviceCategories,
  serviceChapters,
} from "@/content/services";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageContent[slug];

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const category = serviceCategories.find((item) => item.slug === slug);
  const page = servicePageContent[slug];

  if (!category || !page) {
    notFound();
  }

  const chapter = serviceChapters.find((item) =>
    item.categorySlugs.includes(category.slug),
  );

  if (!chapter) {
    notFound();
  }

  const chapterCategories = serviceCategories.filter((item) =>
    chapter.categorySlugs.includes(item.slug),
  );
  const categoryIndex = chapterCategories.findIndex(
    (item) => item.slug === category.slug,
  );
  const serviceNumber = `${chapter.number}.${String(categoryIndex + 1).padStart(2, "0")}`;
  const otherCategories = serviceCategories.filter(
    (item) => item.slug !== category.slug,
  );

  const relatedStudies = caseStudies.filter((study) =>
    page.caseStudySlugs.includes(study.slug),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: category.title,
        serviceType: category.title,
        description: page.metaDescription,
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        areaServed: ["United Kingdom", "United States", "Australia", "Nigeria"],
        url: `${site.url}/services/${category.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-background">
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-ink"
              >
                <ArrowLeft className="h-4 w-4" />
                All services
              </Link>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {serviceNumber} / {chapter.title}
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                  {category.title}
                </p>
                <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand sm:text-6xl lg:text-7xl">
                  {page.headline}
                </h1>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {page.intro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <Link
                    href={site.bookingUrl}
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Book a free call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={`/pricing#${page.pricingGroupSlug}`}
                    className="border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
                  >
                    See pricing
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="border-t border-brand/25 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                    Starting from
                  </p>
                  <p className="mt-3 font-display text-4xl font-bold tracking-tight text-brand">
                    {page.startingPrice.uk}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {page.startingPrice.us}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    {page.startingPrice.note}
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Good for
                  </p>
                  <ul className="mt-4 space-y-3">
                    {page.goodFor.map((item, index) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-accent-ink">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/pricing#${page.pricingGroupSlug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
                >
                  See full pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                  What&apos;s included
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
                  Everything under one lead.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                  Pick the pieces you need. We scope the work together and keep
                  the handoffs between specialists inside our team.
                </p>
              </div>

              <div className="grid lg:col-span-8">
                {category.services.map((service, index) => (
                  <div
                    key={service.name}
                    className="border-t border-border py-5"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-accent-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-bold text-brand sm:text-2xl">
                        {service.name}
                      </h3>
                    </div>
                    {service.detail && (
                      <p className="mt-1 max-w-2xl pl-8 text-sm leading-relaxed text-muted sm:text-base">
                        {service.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                What you get
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
                The practical outcomes, not just deliverables.
              </h2>
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {page.outcomes.map((outcome, index) => (
                <article
                  key={outcome.title}
                  className="border-t border-border pt-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand">
                    {outcome.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {outcome.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServiceProcess />

        {relatedStudies.length > 0 && (
          <section className="border-b border-border bg-surface py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                    Related work
                  </p>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-brand sm:text-5xl">
                    Projects with a similar scope.
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
                >
                  See all work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="mt-10 divide-y divide-border border-y border-border">
                {relatedStudies.map((study, index) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="group grid gap-4 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink md:col-span-1">
                      {String(index + 1).padStart(2, "0")}
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
        )}

        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                  FAQ
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
                  Questions we get asked.
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
                {page.faqs.map((faq) => (
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

        <section className="border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                  Next
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
                  Explore other services.
                </h2>
              </div>

              <div className="divide-y divide-border border-y border-border lg:col-span-8">
                {otherCategories.map((item, index) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl font-bold text-brand transition-colors group-hover:text-accent-ink">
                        {item.title}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent-ink transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
