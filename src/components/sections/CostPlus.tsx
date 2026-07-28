"use client";

// ============================================================
// CostPlus Section — Visual explainer for Cost Plus system
// ============================================================

import { motion } from "framer-motion";
import { ShoppingBag, Wrench, Eye, CheckSquare, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

const COST_PLUS_STEPS = [
  {
    icon: ShoppingBag,
    title: "You Purchase Materials",
    titleAr: "أنت تشتري الخامات",
    description:
      "You buy all materials directly in your name from our approved suppliers. Full price visibility, zero markup.",
    color: "var(--color-gold)",
  },
  {
    icon: Eye,
    title: "We Supervise Everything",
    titleAr: "نحن نشرف على كل شيء",
    description:
      "Our engineering team manages all execution, quality control, and daily site supervision.",
    color: "var(--color-gold-light)",
  },
  {
    icon: Wrench,
    title: "Expert Execution",
    titleAr: "تنفيذ احترافي",
    description:
      "Skilled craftsmen execute every detail to exacting standards — on time, every time.",
    color: "var(--color-gold-dark)",
  },
  {
    icon: CheckSquare,
    title: "Phase-by-Phase Handover",
    titleAr: "استلام مرحلة بمرحلة",
    description:
      "Each phase is inspected, approved, and handed over before the next begins. No compromises.",
    color: "var(--color-bronze)",
  },
];

const ADVANTAGES = [
  "Full material ownership in your name",
  "Complete price transparency",
  "No material markups or hidden fees",
  "Freedom to choose premium brands",
  "Full engineering supervision included",
  "Daily progress accountability",
];

export function CostPlus() {
  return (
    <section
      id="cost-plus"
      className="section-padding bg-brand relative overflow-hidden"
      aria-labelledby="cost-plus-heading"
    >
      {/* Large decorative element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to left, rgba(208,151,52,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeader
              overline="Alternative System"
              title="The"
              titleHighlight="Cost Plus"
              description="A transparent, client-first approach where you own your materials directly — and we deliver expert execution and supervision."
              align="left"
            />

            {/* Arabic description */}
            <motion.div
              className="mt-6 mb-10 p-6 rounded-sm"
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
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)", direction: "rtl" }}
                lang="ar"
              >
                شراء الخامات باسم العميل مع إدارة التنفيذ والإشراف الهندسي الكامل. أنت تملك خاماتك، ونحن ننفذ بأعلى معايير الجودة.
              </p>
            </motion.div>

            {/* Advantages */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h3
                className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                Key Advantages
              </h3>
              <ul className="flex flex-col gap-3 list-none">
                {ADVANTAGES.map((adv, i) => (
                  <motion.li
                    key={adv}
                    variants={fadeInUp}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(208,151,52,0.1)",
                        border: "1px solid rgba(208,151,52,0.25)",
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--color-gold)" }}
                      />
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {adv}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href={whatsappLink(
                  CONTACT.whatsapp[0],
                  "Hello, I'd like to learn more about the Cost Plus system."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors hover:text-[var(--color-gold-light)] no-underline"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                Inquire About Cost Plus
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — Process Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            {COST_PLUS_STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === COST_PLUS_STEPS.length - 1;
              return (
                <motion.div key={step.title} variants={fadeInUp} className="relative">
                  <div
                    className="flex gap-5 p-6 rounded-sm"
                    style={{
                      background: "rgba(20,21,22,0.8)",
                      border: "1px solid rgba(235,235,234,0.07)",
                    }}
                  >
                    {/* Step Number + Icon */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(208,151,52,0.08)",
                          border: `1px solid ${step.color}40`,
                        }}
                      >
                        <Icon
                          size={18}
                          style={{ color: step.color }}
                          aria-hidden="true"
                        />
                      </div>
                      {!isLast && (
                        <div
                          className="w-px flex-1 mt-3 min-h-[24px]"
                          style={{ background: "rgba(208,151,52,0.15)" }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-[9px] font-bold tracking-widest"
                          style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
                        >
                          STEP {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3
                        className="text-base font-bold mb-1"
                        style={{ color: "var(--color-white)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-xs mb-2"
                        style={{ color: "var(--color-dark-gray)", direction: "rtl" }}
                        lang="ar"
                      >
                        {step.titleAr}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Summary card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-sm text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(208,151,52,0.08) 0%, rgba(187,131,42,0.04) 100%)",
                border: "1px solid rgba(208,151,52,0.25)",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--color-gold-light)" }}
              >
                Your investment. Our expertise.
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-dark-gray)" }}
              >
                استثمارك + خبرتنا = نتيجة استثنائية
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
