"use client";

// ============================================================
// ExecutiveEstimation Section — المقايسة التنفيذية
// 4-step process + advantages
// ============================================================

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ESTIMATION_STEPS, ESTIMATION_ADVANTAGES, CONTACT } from "@/lib/constants";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";
import { whatsappLink } from "@/lib/utils";
import { Check, ArrowRight, ClipboardList, AlertCircle } from "lucide-react";

export function ExecutiveEstimation() {
  return (
    <section
      id="estimation"
      className="section-padding bg-section-alt relative overflow-hidden"
      aria-labelledby="estimation-heading"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left — Header + Advantages */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} dir="rtl">
            <SectionHeader
              overline="أنظمة التشطيب"
              title="نظام"
              titleHighlight="المقايسة التنفيذية"
              description="نظام يعتمد على الدقة التامة والتسعير الفعلي، حيث تدفع فقط مقابل الأعمال والكميات المنفذة في الواقع."
              align="right"
            />

            {/* Advantages */}
            <motion.div
              className="mt-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h3
                className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                مميزات النظام
              </h3>
              <ul className="flex flex-col gap-3 list-none" dir="rtl">
                {ESTIMATION_ADVANTAGES.map((adv, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(208,151,52,0.1)",
                        border: "1px solid rgba(208,151,52,0.25)",
                      }}
                    >
                      <Check size={9} style={{ color: "var(--color-gold)", strokeWidth: 3 }} aria-hidden="true" />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }} lang="ar">
                      {adv}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Note */}
            <motion.div
              className="mt-8 p-5 rounded-sm"
              style={{
                background: "rgba(208,151,52,0.05)",
                border: "1px solid rgba(208,151,52,0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle size={15} className="shrink-0 mt-0.5" style={{ color: "var(--color-gold)" }} />
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)", direction: "rtl" }} lang="ar">
                  إذا طرأت أي أعمال إضافية أو تعديلات أثناء التنفيذ، يتم تسعيرها واعتمادها من العميل قبل البدء بها.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href={whatsappLink(CONTACT.whatsapp[0], "مرحباً، أريد الاستفسار عن نظام المقايسة التنفيذية")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors hover:text-[var(--color-gold-light)] no-underline"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                استفسر الآن
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
            dir="rtl"
          >
            <h3
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
            >
              كيف يعمل النظام؟
            </h3>

            {ESTIMATION_STEPS.map((step, i) => {
              const isLast = i === ESTIMATION_STEPS.length - 1;
              return (
                <motion.div key={step.number} variants={fadeInUp} className="relative">
                  <div
                    className="flex gap-5 p-6 rounded-sm"
                    style={{
                      background: "rgba(20,21,22,0.8)",
                      border: "1px solid rgba(235,235,234,0.07)",
                    }}
                  >
                    {/* Step Number + Connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(208,151,52,0.1)",
                          border: "1px solid rgba(208,151,52,0.3)",
                        }}
                      >
                        <span
                          className="text-sm font-black"
                          style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
                        >
                          {step.number}
                        </span>
                      </div>
                      {!isLast && (
                        <div
                          className="w-px flex-1 mt-3 min-h-[20px]"
                          style={{ background: "rgba(208,151,52,0.15)" }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-base font-bold mb-0.5" style={{ color: "var(--color-white)" }}>
                        {step.titleAr}
                      </h4>
                      <p className="text-xs mb-3" style={{ color: "var(--color-dark-gray)" }}>
                        {step.titleEn}
                      </p>
                      <ul className="flex flex-col gap-2 list-none" dir="rtl">
                        {step.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <div
                              className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: "rgba(208,151,52,0.08)", border: "1px solid rgba(208,151,52,0.2)" }}
                            >
                              <div className="w-1 h-1 rounded-full" style={{ background: "var(--color-gold)" }} />
                            </div>
                            <span className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }} lang="ar">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
