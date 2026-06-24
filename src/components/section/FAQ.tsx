"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What does it cost to work with Shazsync?",
    answer:
      "Every project is scoped individually, but most brand and web projects start from $3,000. We'll give you a clear, itemised breakdown before anything begins — no surprises, no hidden fees.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A brand identity takes 3–4 weeks. A full website is usually 6–10 weeks. SEO and marketing retainers are ongoing. We agree on a timeline upfront and keep you updated at every milestone.",
  },
  {
    question: "Do you work with early-stage or small brands?",
    answer:
      "Yes — some of our best work has been for founders at the very beginning. If you're serious about building something premium, we'll find a structure that fits where you are right now.",
  },
  {
    question: "What's included in a project engagement?",
    answer:
      "Every engagement starts with a strategy session. You'll get regular review rounds throughout, and we finish with a complete handover — source files, documentation, and everything you need to move forward independently.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Completely remote-first. We've worked with brands across Europe, North America, and the Middle East. Time zones are manageable — we structure check-ins around your schedule.",
  },
  {
    question: "How is Shazsync different from a freelancer or large agency?",
    answer:
      "You get a full team — designers, developers, marketers, SEO specialists — without enterprise-agency overhead. Every project has a dedicated lead and direct communication. No account managers, no tickets.",
  },
  {
    question: "Will we own everything when the project is done?",
    answer:
      "Yes, always. Full ownership of all deliverables — design files, source code, content, accounts — transfers to you on completion. Nothing is locked behind a subscription.",
  },
  {
    question: "How do we get started?",
    answer:
      "Fill out our contact form with a short brief. We'll respond within 24 hours to schedule a discovery call — no pitch decks, no obligation. From there we'll put together a clear proposal.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#f5f5f5] py-16 text-neutral-950 md:py-24">
      <div className="mx-auto w-[95%]">

        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-neutral-400">
              FAQ
            </p>
            <h2 className="text-3xl font-medium leading-tight [font-family:var(--font-karigaar)] sm:text-4xl md:text-5xl">
              Common questions
            </h2>
          </div>
          <Link
            href="/contact"
            className="mb-1 hidden shrink-0 items-center gap-1 text-xs text-neutral-400 underline underline-offset-4 transition-colors hover:text-neutral-950 sm:inline-flex"
          >
            Still have questions?
            <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* Accordion */}
        <div className="mx-auto w-[70%] divide-y divide-neutral-300 border-b border-neutral-300">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center gap-4 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="w-6 shrink-0 text-xs tabular-nums text-orange-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-medium leading-snug text-neutral-900 [font-family:var(--font-karigaar)] md:text-base">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="shrink-0 text-neutral-400"
                >
                  <Plus size={16} strokeWidth={1.6} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pb-4 pl-10 pr-6 text-xs leading-6 text-neutral-500 font-(--font-sans) md:text-sm md:leading-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs text-neutral-400 underline underline-offset-4"
          >
            Still have questions? <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
