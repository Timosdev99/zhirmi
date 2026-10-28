import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import {
  bundles,
  carePlans,
  paymentTerms,
  priceGroups,
  pricingNote,
  websitePackages,
} from "@/content/pricing";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pricing — Clear, Fixed Packages",
  description:
    "Website packages from £1,200, care plans from £79/month, AI agents, SEO and marketing plans. No hidden fees.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-ink">
            Pricing
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
            Clear packages, fixed prices.
          </h1>
          <p className="mt-5 text-lg text-muted">
            Start with a bundle or build your own scope. Every project begins with
            a free call and a written quote, so there are no surprises.
          </p>
        </div>

        <div id="bundles" className="mt-12 grid scroll-mt-24 gap-6 md:grid-cols-3">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                bundle.popular
                  ? "border-accent-ink bg-surface shadow-sm"
                  : "border-border bg-surface"
              }`}
            >
              {bundle.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-xl font-bold text-brand">
                {bundle.name}
              </h2>
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
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section
        id="websites"
        className="scroll-mt-24 border-t border-border bg-surface py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
            Website packages
          </h2>
          <p className="mt-2 text-muted">One-off projects. Prices exclude domains and hosting.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {websitePackages.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-2xl border border-border bg-background p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-brand">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-ink">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <p className="mt-4 font-display text-xl font-bold text-brand">
                  {plan.uk}
                </p>
                <p className="text-sm text-muted">{plan.us}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="care"
        className="scroll-mt-24 border-t border-border py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
            Website care plans
          </h2>
          <p className="mt-2 text-muted">
            No lock-in. 30 days&apos; notice. Unused hours do not roll over.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {carePlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.popular ? "border-accent-ink bg-surface" : "border-border bg-surface"
                }`}
              >
                <h3 className="font-display text-lg font-bold text-brand">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{plan.description}</p>
                <p className="mt-4 font-display text-2xl font-bold text-brand">
                  {plan.uk}
                  <span className="text-base font-medium text-muted">/mo</span>
                </p>
                <p className="text-sm text-muted">{plan.us}/mo</p>
                <ul className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
            Additional services
          </h2>
          <p className="mt-2 text-muted">
            Prices shown in GBP and USD. Third-party costs are billed separately.
          </p>

          <div className="mt-8 space-y-10">
            {priceGroups.map((group) => (
              <div key={group.slug} id={group.slug} className="scroll-mt-24">
                <h3 className="font-display text-lg font-bold text-brand">
                  {group.title}
                </h3>
                {group.note && (
                  <p className="mt-1 text-sm text-muted">{group.note}</p>
                )}
                <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-background">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-background">
                        <th scope="col" className="px-4 py-3 font-semibold text-brand">
                          Service
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold text-brand">
                          UK
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold text-brand">
                          US
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row) => (
                        <tr key={row.service} className="border-b border-border last:border-0">
                          <td className="px-4 py-3 text-foreground">{row.service}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-muted">{row.uk}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-muted">{row.us}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
                Payment terms
              </h2>
              <ul className="mt-5 space-y-3">
                {paymentTerms.map((term) => (
                  <li key={term} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-display text-xl font-bold text-brand">
                What happens next
              </h2>
              <p className="mt-2 text-sm text-muted">{pricingNote}</p>
              <Link
                href={site.bookingUrl}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Book a free call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
