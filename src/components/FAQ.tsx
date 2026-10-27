"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "You get full access for 7 days. No credit card required to start. Cancel anytime before the trial ends and you won’t be charged.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "X (Twitter), LinkedIn, Instagram, and Facebook/Instagram Ads. More platforms are coming soon.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel in one click from your account. You’ll keep access until the end of the current billing period.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes. 7-day money-back guarantee. If HookForge doesn’t help you create content faster, just email us and we’ll refund you.",
  },
  {
    question: "Is there a limit on generations?",
    answer:
      "On paid plans there are no hard limits on hook generations or content packs. Fair use applies for extremely high volume.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-text-primary">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-text-secondary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/5 px-6 pb-5 pt-1 text-text-secondary">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}