const steps = [
  {
    title: "Free working call",
    description:
      "We talk through the business, the constraints and whether we are the right team.",
  },
  {
    title: "Scope and fixed quote",
    description:
      "You get the deliverables, price and timeline in writing before work starts.",
  },
  {
    title: "Build and connect",
    description:
      "Design, engineering, content and integrations are delivered by the same team.",
  },
  {
    title: "Launch and improve",
    description:
      "We test the handover, monitor what happens and agree what to improve next.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
              How it works
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
              A simple process, with no guesswork.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Start with a clear problem. Leave with a scope, a price and a team
              that knows what happens next.
            </p>
          </div>

          <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-border pt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-brand">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
