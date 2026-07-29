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
      style={{ background: "#141516" }}
      aria-labelledby="process-heading"
    >
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
            overline="كيف نعمل"
            title="مراحل"
            titleHighlight="التنفيذ"
            description="8 مراحل مدروسة بعناية — الشفافية والدقة في كل خطوة."
            align="center"
          />
        </div>

        {/* Steps Grid — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || MapPin;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-sm"
                style={{
                  background: "rgba(20,21,22,0.7)",
                  border: "1px solid rgba(235,235,234,0.06)",
                }}
              >
                {/* Number + Icon */}
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(208,151,52,0.08)",
                      border: "1px solid rgba(208,151,52,0.2)",
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                  </div>
                  <span
                    className="absolute -top-1 -end-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                    style={{
                      background: "var(--color-gold)",
                      color: "var(--color-black)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-sm font-bold mb-1"
                    style={{ color: "var(--color-white)" }}
                  >
                    {step.titleAr}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-dark-gray)" }}
                  >
                    {step.descriptionAr}
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
