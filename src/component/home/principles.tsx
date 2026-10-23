const principles = [
  {
    title: "One point of contact.",
    description:
      "Samuel leads the project end to end and brings in vetted specialists only where they add value.",
  },
  {
    title: "We build and run it.",
    description:
      "Most suppliers hand over and disappear. We maintain, market and improve what we build.",
  },
  {
    title: "The right platform, not our favourite.",
    description:
      "Wix Studio, WordPress, Webflow, Shopify or custom code, chosen around the business and the people who run it.",
  },
  {
    title: "Plain-English reporting.",
    description:
      "What we found, what we changed and what happened next. No vanity metrics and no jargon.",
  },
];

export default function HomePrinciples() {
  return (
    <section id="why" className="scroll-mt-24 border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
              Why Zhirmitech
            </p>
            <h2 className="mt-6 max-w-lg font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
              One partner. The whole system.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              A website is not a strategy on its own. The work holds together
              when the build, the growth and the operations are accountable to
              the same team.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="border-t border-border pt-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-xl font-bold text-brand">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
