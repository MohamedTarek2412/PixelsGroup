"use client";

import { motion } from "framer-motion";
import {
  MapPin, Ruler, Pencil, FileText, PenLine, Hammer, CheckSquare, Key,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import { viewportOnce } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  MapPin, Ruler, Pencil, FileText, PenLine, Hammer, CheckSquare, Key,
};

export function Process() {
  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{ background: "#111213" }}
      aria-labelledby="process-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] pointer-events-none opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(ellipse at top, var(--color-gold-dark), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-brand relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <SectionHeader
            overline="كيف نعمل"
            title="آلية"
            titleHighlight="التنفيذ"
            description="8 مراحل مدروسة بعناية تحول حلمك إلى واقع."
            align="center"
          />
        </div>

        {/* ───── Timeline ───── */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute top-0 bottom-0 w-px start-5 sm:start-8 lg:start-1/2"
            style={{
              background: "linear-gradient(to bottom, var(--color-gold), rgba(208,151,52,0.15), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-16">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || MapPin;
              const isEven = i % 2 !== 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* ── Mobile/Tablet Layout ── */}
                  <div className="lg:hidden flex items-start gap-4 sm:gap-6">
                    {/* Dot */}
                    <div
                      className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{
                        background: "var(--color-black)",
                        border: "2px solid var(--color-gold)",
                        boxShadow: "0 0 15px rgba(208,151,52,0.2)",
                      }}
                    >
                      <Icon size={18} style={{ color: "var(--color-gold)" }} />
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 min-w-0 p-4 sm:p-5 rounded-lg relative overflow-hidden"
                      style={{
                        background: "rgba(26,27,28,0.7)",
                        border: "1px solid rgba(235,235,234,0.06)",
                      }}
                    >
                      {/* Background number */}
                      <div
                        className="absolute -bottom-4 -end-2 text-[80px] font-black leading-none pointer-events-none select-none"
                        style={{ color: "rgba(208,151,52,0.03)", fontFamily: "var(--font-accent)" }}
                        aria-hidden="true"
                      >
                        {step.number}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-lg font-black"
                            style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
                          >
                            {step.number}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold leading-relaxed" style={{ color: "var(--color-white)" }}>
                            {step.titleAr}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {step.descriptionAr}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ── Desktop Layout (alternating sides) ── */}
                  <div className={`hidden lg:flex items-center gap-12 ${isEven ? "flex-row-reverse" : ""}`}>
                    {/* One side content */}
                    <div className="w-1/2 flex justify-end">
                      <div
                        className={`max-w-md p-6 xl:p-8 rounded-xl relative overflow-hidden group ${
                          isEven ? "text-right" : "text-right"
                        }`}
                        style={{
                          background: "rgba(26,27,28,0.6)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(235,235,234,0.05)",
                        }}
                      >
                        {/* Hover gold line */}
                        <div
                          className={`absolute top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                            isEven ? "end-0" : "start-0"
                          }`}
                          style={{ background: "var(--color-gold)" }}
                        />

                        {/* Background number */}
                        <div
                          className="absolute -bottom-6 -end-2 text-[100px] font-black leading-none pointer-events-none select-none group-hover:scale-110 transition-transform duration-700"
                          style={{ color: "rgba(208,151,52,0.03)", fontFamily: "var(--font-accent)" }}
                          aria-hidden="true"
                        >
                          {step.number}
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className="text-2xl font-black"
                              style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
                            >
                              {step.number}
                            </span>
                            <h3 className="text-lg font-bold" style={{ color: "var(--color-white)" }}>
                              {step.titleAr}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            {step.descriptionAr}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div
                      className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--color-black)",
                        border: "2px solid var(--color-gold)",
                        boxShadow: "0 0 20px rgba(208,151,52,0.25)",
                      }}
                    >
                      <Icon size={22} style={{ color: "var(--color-gold)" }} />
                    </div>

                    {/* Other side spacer */}
                    <div className="w-1/2" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
