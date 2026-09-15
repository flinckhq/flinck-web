"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Who is Flinck for?",
    answer:
      "Flinck is for farmers, food buyers, input sellers, cooperative leads, and agribusiness operators who need clean discovery and secure transaction layers on mobile.",
  },
  {
    question: "How does flinck verify users?",
    answer:
      "We use progressive verification—identity checks, trade history, and reputation signals—so trust grows with real activity on the platform.",
  },
  {
    question: "Is flinck only a marketplace?",
    answer:
      "No. It is a social marketplace: community and discovery plus listings, negotiation, payments, and sponsorship paths for institutions.",
  },
  {
    question: "How to sponsor?",
    answer:
      "Visit our Sponsors page or email sponsor@flinck.app. We scope data sharing, compliance, and rollout geography before any integration.",
  },
  {
    question: "Is app available on iOS?",
    answer:
      "Flinck is available on Android today via Google Play. iOS availability will be announced on this site when ready.",
  },
  {
    question: "What does it cost to list a produce?",
    answer:
      "Basic listings are free. Premium visibility and analytics are available for operators who want to accelerate reach.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#F2EAE0] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-[2.75rem]"
          >
            Frequency asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-[#405249] font-medium"
          >
            Everything you need to know about Flinck.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl bg-white/85 ring-1 ring-[#1E4A38]/10 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-sm sm:text-base font-bold text-gray-950 pr-4">
                    {item.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F2EAE0] text-[#1E4A38] shadow-sm text-lg font-bold transition-transform duration-200">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-[#405249] border-t border-[#1E4A38]/10 pt-3 font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
