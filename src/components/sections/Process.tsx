"use client";

// ============================================================
// Process Section — 8-step animated execution timeline
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Ruler,
  Pencil,
  FileText,
  PenLine,
  Hammer,
  CheckSquare,
  Key,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import { viewportOnce } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  MapPin,
  Ruler,
  Pencil,
  FileText,
  PenLine,
  Hammer,
  CheckSquare,
  Key,
};

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{ background: "#141516" }}
      aria-labelledby="process-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(208,151,52,0.05) 0%, transparent 60%)`,
        }}
      />

      <div className="container-brand">
        <div className="text-center mb-16">
          <SectionHeader
            overline="How We Work"
            title="Our Execution"
            titleHighlight="Process"
            description="Eight meticulously designed phases — each one building toward your perfect space. Transparency and precision at every step."
            align="center"
          />
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-[52px] left-[7%] right-[7%] h-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(208,151,52,0.3) 10%, rgba(208,151,52,0.3) 90%, transparent)",
            }}
          />

          <div className="grid grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || MapPin;
              const isActive = activeStep === i;
              const isFirst = i === 0;
              const isLast = i === PROCESS_STEPS.length - 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col items-center text-center cursor-default"
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  // Break into 2 rows of 4
                  style={i >= 4 ? { marginTop: "3rem" } : {}}
                >
                  {/* Step circle */}
                  <motion.div
                    className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center mb-5"
                    style={{
                      background: isActive
                        ? "rgba(208,151,52,0.15)"
                        : "rgba(20,21,22,0.9)",
                      border: isActive
                        ? "2px solid var(--color-gold)"
                        : "2px solid rgba(235,235,234,0.08)",
                      transition: "all 0.3s ease",
                      boxShadow: isActive
                        ? "0 0 30px rgba(208,151,52,0.2)"
                        : "none",
                    }}
                    animate={isActive ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Step ${step.number}: ${step.titleEn}`}
                  >
                    <Icon
                      size={28}
                      style={{
                        color: isActive ? "var(--color-gold-bright)" : "var(--color-gold-dark)",
                        transition: "color 0.3s ease",
                      }}
                      aria-hidden="true"
                    />

                    {/* Step number */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{
                        background: "var(--color-gold)",
                        color: "var(--color-black)",
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3
                      className="text-sm font-bold mb-1 transition-colors duration-200"
                      style={{ color: isActive ? "var(--color-gold-light)" : "var(--color-white)" }}
                    >
                      {step.titleEn}
                    </h3>
                    <p
                      className="text-xs mb-3"
                      style={{ color: "var(--color-dark-gray)", direction: "rtl" }}
                      lang="ar"
                    >
                      {step.titleAr}
                    </p>
                    <motion.p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={
                        isActive
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{ duration: 0.25 }}
                    >
                      {step.descriptionEn}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile — Vertical Timeline */}
        <div className="lg:hidden flex flex-col">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || MapPin;
            const isLast = i === PROCESS_STEPS.length - 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-5"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative"
                    style={{
                      background: "rgba(20,21,22,0.9)",
                      border: "2px solid rgba(208,151,52,0.3)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
                      style={{
                        background: "var(--color-gold)",
                        color: "var(--color-black)",
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {!isLast && (
                    <div
                      className="w-px flex-1 mt-2 min-h-[2rem]"
                      style={{ background: "rgba(208,151,52,0.2)" }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <h3
                    className="text-sm font-bold mb-0.5"
                    style={{ color: "var(--color-white)" }}
                  >
                    {step.titleEn}
                  </h3>
                  <p
                    className="text-xs mb-2"
                    style={{ color: "var(--color-dark-gray)", direction: "rtl" }}
                    lang="ar"
                  >
                    {step.titleAr}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.descriptionEn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
