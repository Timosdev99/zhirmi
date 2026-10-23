import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { bundles, pricingNote } from "@/content/pricing";
import { site } from "@/content/site";

export default function PricingSection() {
  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
              <span aria-hidden>✱</span>
              Pricing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand sm:text-4xl lg:text-5xl">
              Clear packages, fixed prices.
            </h2>
            <p className="mt-4 text-muted">
              Start with a bundle or build your own scope. Every project begins
              with a free call and a written quote.
            </p>
          </div>

          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink md:self-auto"
          >
            See all pricing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                bundle.popular
                  ? "border-accent-ink bg-background shadow-sm"
                  : "border-border bg-background"
              }`}
            >
              {bundle.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-brand">
                {bundle.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{bundle.bestFor}</p>

              <p className="mt-5 font-display text-2xl font-bold text-brand">
                {bundle.uk}
              </p>
              <p className="text-sm text-muted">{bundle.us}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {bundle.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={site.bookingUrl}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  bundle.popular
                    ? "bg-brand text-white hover:bg-brand-700"
                    : "border border-border text-brand hover:border-accent-ink hover:text-accent-ink"
                }`}
              >
                Book a free call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted">
          {pricingNote}
        </p>
      </div>
    </section>
  );
}
