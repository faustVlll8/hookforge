export default function SocialProof() {
  const logos = ["Notion", "Linear", "Vercel", "Framer", "Webflow", "Figma"];

  const testimonials = [
    {
      text: "I used to spend hours writing hooks. Now I generate a full pack in under a minute and just pick the winners.",
      name: "Alex Rivera",
      role: "Growth Marketer",
    },
    {
      text: "The variation lab is perfect for testing. I run 5–6 versions on LinkedIn and X without thinking about copy.",
      name: "Sarah Chen",
      role: "Content Creator",
    },
    {
      text: "Finally something that actually understands what makes a hook convert. Saved me from writer’s block more than once.",
      name: "Marcus Hale",
      role: "Freelance Marketer",
    },
  ];

  return (
    <section className="border-y border-white/5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Logos */}
        <p className="mb-8 text-center text-sm text-text-secondary">
          Used by marketers at
        </p>
        <div className="mb-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-60">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-medium tracking-tight text-text-secondary"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-surface p-6"
            >
              <p className="text-text-primary">“{item.text}”</p>
              <div className="mt-4">
                <p className="font-medium text-text-primary">{item.name}</p>
                <p className="text-sm text-text-secondary">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}