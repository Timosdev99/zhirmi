import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/content/site";

const metrics = [
  { value: "06", label: "Service areas" },
  { value: "07", label: "Selected projects" },
  { value: "04", label: "Markets" },
];

export default function HomeHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-5rem)] gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="flex flex-col justify-between lg:col-span-8">
            <div>
              <div className="flex items-center gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                  Independent tech &amp; growth partner
                </p>
                <span aria-hidden className="h-px w-12 bg-border" />
              </div>

              <h1 className="mt-10 max-w-5xl font-display text-6xl font-bold leading-[0.94] tracking-tight text-brand sm:text-7xl lg:text-[5.5rem]">
                The tech and growth team behind the business.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Websites, search, AI and operations. We build the systems that
                bring in customers and keep the work moving.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href={site.bookingUrl}
                  className="group inline-flex items-center gap-3 bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
                >
                  See our work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-5 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
              <p>
                Based in Lagos. Working across the UK, US, Australia and
                Nigeria.
              </p>
              <a
                href="#what-we-handle"
                className="inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-accent-ink"
              >
                Scroll to explore
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-between border-t border-border pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
                One point of contact
              </p>
              <p className="mt-5 max-w-xs text-lg leading-relaxed text-foreground">
                Samuel leads the work end to end, with vetted specialists behind
                every part.
              </p>

              <div className="mt-10 border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Working across
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  United Kingdom · United States · Australia · Nigeria
                </p>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-bold tracking-tight text-brand sm:text-4xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
