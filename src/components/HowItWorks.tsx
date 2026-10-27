const steps = [
  {
    number: "01",
    title: "Enter your idea",
    description:
      "Paste a product, topic or rough thought. No perfect brief needed.",
  },
  {
    number: "02",
    title: "Generate hooks & packs",
    description:
      "Get 10+ hooks plus ready-to-post versions for X, LinkedIn, Instagram and ads in under 60 seconds.",
  },
  {
    number: "03",
    title: "Test and publish",
    description:
      "Pick the strongest versions, tweak the angle if needed, and post or launch your campaign.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-text-secondary">
            From blank screen to ready content in three steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-4 font-heading text-5xl font-bold text-accent/20">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}