import { Sparkles, Layers, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Hook Generator",
    description:
      "10+ proven frameworks that stop the scroll. Turn any topic into strong opening lines in seconds.",
  },
  {
    icon: Layers,
    title: "Content Packs",
    description:
      "Ready-to-post versions for X, LinkedIn, Instagram and ads. One idea — full pack for every platform.",
  },
  {
    icon: BarChart3,
    title: "Variation Lab",
    description:
      "Instant A/B versions so you can test what works. Control tone, angle and length with one click.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-text-secondary">
            Three tools. One workflow. No more blank screens.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-surface p-8 transition-colors hover:border-white/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}