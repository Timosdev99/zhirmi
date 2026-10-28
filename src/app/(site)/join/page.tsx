import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PartnerForm from "@/component/forms/PartnerForm";
import {
  networkFaqs,
  networkRoles,
  networkSteps,
  partnerBenefits,
  partnerRequirements,
} from "@/content/network";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Join the Network — Partner with Us",
  description:
    "Freelancers and specialists: join Zhirmitech's vetted network for websites, marketing, AI, content, operations and custom engineering.",
  path: "/join",
});

export default function JoinPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: networkFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-background">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                <span aria-hidden>✱</span>
                Join the network
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
                Do the work you are best at. We will handle the rest.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Zhirmitech is a vetted network of specialists. We bring in the
                clients, scope the work and manage the relationship. You focus on
                delivery, with a clear brief and a cost price agreed up front.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Apply to join
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
                >
                  See how it works
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  At a glance
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    "Remote, project-based work",
                    "Clients in the UK, US, Australia and Nigeria",
                    "You quote your cost price",
                    "Paid within 7 days of the client paying",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                <span aria-hidden>✱</span>
                Who we need
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                Specialists, not generalists.
              </h2>
              <p className="mt-3 text-muted">
                We match partners to the part of the project that fits their
                strengths, not to the whole client relationship.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {networkRoles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <h3 className="font-display text-lg font-bold text-brand">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {role.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                <span aria-hidden>✱</span>
                How it works
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                A simple, honest process.
              </h2>
            </div>

            <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {networkSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <span className="font-display text-sm font-bold text-accent-ink">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-brand">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  What we ask for
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                  Come prepared.
                </h2>
                <ul className="mt-6 space-y-3">
                  {partnerRequirements.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  What you get
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                  A simpler way to take on work.
                </h2>
                <ul className="mt-6 space-y-3">
                  {partnerBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-brand">
                How the commercial side works
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                You quote your cost price for the work. Zhirmitech handles sales,
                scoping, client management, QA and invoicing, and adds its margin
                on top. Partners are paid within 7 days of the client paying.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-3">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  FAQ
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                  Before you apply.
                </h2>
                <p className="mt-3 text-muted">
                  Still unsure?{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:text-brand"
                  >
                    Email us
                  </a>{" "}
                  and we will give you a straight answer.
                </p>
              </div>

              <div className="divide-y divide-border rounded-2xl border border-border bg-surface lg:col-span-2">
                {networkFaqs.map((faq) => (
                  <details key={faq.question} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span
                        aria-hidden
                        className="text-lg text-accent-ink transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="scroll-mt-24 border-t border-border bg-surface py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
                  <span aria-hidden>✱</span>
                  Apply
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                  Tell us what you do.
                </h2>
                <p className="mt-3 text-muted">
                  We review every application. If your services fit a live or
                  upcoming project, we will get in touch to arrange a short call.
                </p>
                <div className="mt-6 rounded-2xl border border-border bg-background p-5 text-sm text-muted">
                  <p className="font-medium text-brand">Prefer email?</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block text-accent-ink underline decoration-accent/40 underline-offset-4"
                  >
                    {site.email}
                  </a>
                </div>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink transition-colors hover:text-brand"
                >
                  More about Zhirmitech
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <PartnerForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
