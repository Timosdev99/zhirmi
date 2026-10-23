import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bundles, pricingNote } from "@/content/pricing";

export default function HomePricing() {
  return (
    <section id="pricing-preview" className="scroll-mt-24 border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
              Pricing
            </p>
            <h2 className="mt-6 max-w-sm font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
              Clear starting prices.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Start with a bundle or build your own scope. Every project starts
              with a free call and a written quote.
            </p>
            <Link
              href="/pricing"
              className="group mt-8 inline-flex items-center gap-2 border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
            >
              See all pricing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {bundles.map((bundle) => (
                <Link
                  key={bundle.name}
                  href="/pricing"
                  className="group grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-4"
                >
                  <h3 className="font-display text-2xl font-bold text-brand transition-colors group-hover:text-accent-ink md:col-span-3">
                    {bundle.name}
                  </h3>
                  <p className="text-sm text-muted md:col-span-4">
                    {bundle.bestFor}
                  </p>
                  <div className="md:col-span-4">
                    <p className="font-display text-xl font-bold text-brand">
                      {bundle.uk}
                    </p>
                    <p className="mt-1 text-xs text-muted">{bundle.us}</p>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 justify-self-end text-accent-ink transition-transform group-hover:translate-x-0.5 md:col-span-1 md:block" />
                </Link>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              {pricingNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
