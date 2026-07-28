"use client";

// ============================================================
// FAQ Section — Accordion with smooth animations
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      style={{ background: "#141516" }}
      aria-labelledby="faq-heading"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <SectionHeader
              overline="Got Questions?"
              title="Frequently"
              titleHighlight="Asked"
              description="Everything you need to know before starting your project. Can't find your answer? Contact us directly."
              align="left"
            />
            <motion.div
              className="mt-10 p-6 rounded-sm"
              style={{
                background: "rgba(208,151,52,0.05)",
                border: "1px solid rgba(208,151,52,0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Still have questions? Our team is available 7 days a week.
              </p>
              <a
                href="#contact"
                className="text-sm font-semibold tracking-wider uppercase transition-colors hover:text-[var(--color-gold-light)]"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                Contact Us →
              </a>
            </motion.div>
          </div>

          {/* Right — Accordion */}
          <motion.div
            className="lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <dl className="flex flex-col">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="accordion-item"
                    style={{
                      borderBottom: "1px solid rgba(235,235,234,0.07)",
                    }}
                  >
                    <dt>
                      <button
                        onClick={() => toggle(i)}
                        className="flex items-center justify-between w-full py-6 text-left bg-transparent border-none cursor-pointer group"
                        aria-expanded={isOpen}
                        id={`faq-question-${i}`}
                        aria-controls={`faq-answer-${i}`}
                      >
                        <span
                          className="text-sm font-semibold pr-4 leading-snug transition-colors duration-200"
                          style={{
                            color: isOpen
                              ? "var(--color-gold-light)"
                              : "var(--color-white)",
                            fontFamily: "var(--font-primary)",
                          }}
                        >
                          {item.question}
                        </span>
                        <motion.div
                          className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center"
                          style={{
                            background: isOpen
                              ? "rgba(208,151,52,0.15)"
                              : "rgba(235,235,234,0.05)",
                            border: isOpen
                              ? "1px solid rgba(208,151,52,0.3)"
                              : "1px solid rgba(235,235,234,0.08)",
                            color: isOpen
                              ? "var(--color-gold)"
                              : "var(--text-secondary)",
                            transition: "all 0.25s ease",
                          }}
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {isOpen ? (
                            <Minus size={13} aria-hidden="true" />
                          ) : (
                            <Plus size={13} aria-hidden="true" />
                          )}
                        </motion.div>
                      </button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.dd
                          id={`faq-answer-${i}`}
                          role="region"
                          aria-labelledby={`faq-question-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                              opacity: { duration: 0.3, delay: 0.1 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                              opacity: { duration: 0.2 },
                            },
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            className="pb-6 leading-relaxed text-sm"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {item.answer}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
