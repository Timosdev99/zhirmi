const steps = [
  {
    title: "Free call",
    description: "Tell us what is slowing your business down.",
  },
  {
    title: "Clear plan & fixed quote",
    description: "You know the scope, price and timeline before we start.",
  },
  {
    title: "We build & run it",
    description: "One project lead keeps you updated; specialists do the work.",
  },
  {
    title: "Report & improve",
    description:
      "Monthly reports: what we found, what we changed, what happened, and what is next.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
            <span aria-hidden>✱</span>
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand sm:text-4xl lg:text-5xl">
            A simple process, with no guesswork.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="font-display text-sm font-bold text-accent-ink">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-brand">
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
  );
}
