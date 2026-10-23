import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceStartPoints } from "@/content/services";

const steps = [
  {
    title: "Share the problem",
    description:
      "Tell us what needs to change. A clear problem is enough to begin.",
  },
  {
    title: "Working call",
    description:
      "We talk through the business, the constraints and whether we are the right team.",
  },
  {
    title: "Scope & fixed quote",
    description:
      "You get the deliverables, price and timeline in writing before work starts.",
  },
  {
    title: "Build & improve",
    description:
      "The same team builds, connects and supports the work after launch.",
  },
];

export default function HomeStart() {
  return (
    <section id="process" className="scroll-mt-24 border-b border-border bg-brand py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              How an engagement starts
            </p>
            <h2 className="mt-6 max-w-sm font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl">
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
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {point.description}
                </p>
                <Link
                  href={point.href}
                  className="group mt-6 inline-flex items-center gap-2 border-b border-accent/40 pb-1 text-sm font-semibold text-accent transition-colors hover:border-white hover:text-white"
                >
                  {point.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <ol className="mt-20 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
