import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-1.5 text-sm text-text-secondary">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Built for marketers</span>
          </div>

          {/* H1 */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Generate Hooks
            <br />
            That Actually Convert
          </h1>

          {/* Sub */}
          <p className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
            Stop staring at a blank screen. Turn any idea into high-performing
            hooks and full content packs in under 60 seconds.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-sm text-text-secondary">
              Cancel anytime · 7-day money-back
            </span>
          </div>

          {/* Demo preview placeholder */}
          <div className="mt-16 w-full max-w-4xl">
            <div className="aspect-[16/9] rounded-2xl border border-white/10 bg-surface/50 shadow-2xl shadow-black/50 backdrop-blur-sm">
              <div className="flex h-full items-center justify-center text-text-secondary">
                <span className="text-sm">Demo preview will be here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}