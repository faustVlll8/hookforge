"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 19,
    yearly: 15,
    description: "For solo marketers and creators",
    features: [
      "Unlimited hook generations",
      "Content packs for 4 platforms",
      "Basic Variation Lab",
      "Email support",
    ],
  },
  {
    name: "Pro",
    monthly: 39,
    yearly: 31,
    description: "For freelancers and small teams",
    features: [
      "Everything in Starter",
      "Advanced tone & angle control",
      "Priority generation",
      "Team workspace (up to 3)",
      "Priority support",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-4 text-text-secondary">
            Start free. Upgrade when you’re ready. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-surface p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !yearly
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                yearly
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-success">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-accent bg-surface shadow-lg shadow-accent/10"
                  : "border-white/10 bg-surface"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </div>
              )}

              <h3 className="font-heading text-2xl font-semibold text-text-primary">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold text-text-primary">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-text-secondary">/mo</span>
              </div>
              {yearly && (
                <p className="mt-1 text-sm text-text-secondary">
                  Billed annually
                </p>
              )}

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block rounded-xl py-3.5 text-center font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-white/10 bg-transparent text-text-primary hover:bg-white/5"
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}