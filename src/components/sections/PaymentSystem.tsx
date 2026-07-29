"use client";

// ============================================================
// PaymentSystem Section — 3-installment breakdown
// ============================================================

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PAYMENT_INSTALLMENTS, CONTACT } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import { whatsappLink } from "@/lib/utils";
import { ArrowRight, CreditCard, Check } from "lucide-react";

const INSTALLMENT_COLORS = ["var(--color-gold)", "var(--color-gold-light)", "var(--color-gold-dark)"];

export function PaymentSystem() {
  return (
    <section
      id="payment"
      className="section-padding relative overflow-hidden"
      style={{ background: "#141516" }}
      aria-labelledby="payment-heading"
    >
      <div className="container-brand">
        <div className="text-center mb-16" dir="rtl">
          <SectionHeader
            overline="طرق الدفع"
            title="آلية"
            titleHighlight="السداد"
            description="مرونة في السداد... وجودة في التنفيذ. نظام دفع مصمم لراحتك وحفظ حقوقك عبر مراحل التنفيذ المختلفة."
            align="center"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {PAYMENT_INSTALLMENTS.map((inst, i) => (
            <motion.div
              key={inst.number}
              variants={fadeInUp}
              className="relative p-8 rounded-sm overflow-hidden flex flex-col"
              style={{
                background: "rgba(20,21,22,0.85)",
                border: `1px solid rgba(208,151,52,${i === 0 ? "0.4" : "0.12"})`,
              }}
            >
              {/* Top gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${INSTALLMENT_COLORS[i]}, transparent)`,
                }}
              />

              {/* Number */}
              <span
                className="text-6xl font-black leading-none mb-4 block"
                style={{
                  color: "rgba(208,151,52,0.07)",
                  fontFamily: "var(--font-accent)",
                }}
                aria-hidden="true"
              >
                {inst.number}
              </span>

              {/* Percentage */}
              <div className="mb-5">
                <span
                  className="text-5xl font-black"
                  style={{
                    background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold-bright))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  {inst.percentage}
                </span>
                <p className="text-xs mt-1" style={{ color: "var(--color-dark-gray)", direction: "rtl" }} lang="ar">
                  من إجمالي التكلفة
                </p>
              </div>

              {/* Label */}
              <h3 className="text-base font-bold mb-1" style={{ color: "var(--color-white)" }}>
                {inst.labelAr}
              </h3>
              <p className="text-xs mb-5" style={{ color: "var(--color-dark-gray)" }}>
                {inst.label}
              </p>

              {/* Items */}
              <ul className="flex flex-col gap-2.5 list-none mt-auto" dir="rtl">
                {inst.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(208,151,52,0.1)",
                        border: "1px solid rgba(208,151,52,0.3)",
                      }}
                    >
                      <Check size={8} style={{ color: "var(--color-gold)", strokeWidth: 3 }} aria-hidden="true" />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }} lang="ar">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href={whatsappLink(CONTACT.whatsapp[0], "مرحباً، أريد الاستفسار عن آلية السداد")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors hover:text-[var(--color-gold-light)] no-underline"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
          >
            للتواصل والاستفسار
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
