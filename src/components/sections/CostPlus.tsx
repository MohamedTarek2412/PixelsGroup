"use client";

// ============================================================
// CostPlus Section — Real data: supervision tiers, includes, gifts
// ============================================================

import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, Eye, CheckSquare, Gift, ArrowRight, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT, COST_PLUS_TIERS, COST_PLUS_INCLUDES, COST_PLUS_GIFTS, COST_PLUS_NO_CONTRACT_FEE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

export function CostPlus() {
  return (
    <section
      id="cost-plus"
      className="section-padding bg-brand relative overflow-hidden"
      aria-labelledby="cost-plus-heading"
    >
      {/* Background */}
      <div
        className="absolute end-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ background: "linear-gradient(to left, rgba(208,151,52,0.03) 0%, transparent 100%)" }}
      />

      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left Column — Info */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} dir="rtl">
            <SectionHeader
              overline="أنظمة التشطيب"
              title="نظام"
              titleHighlight="Cost Plus"
              description="نظام يتيح لك الشفافية التامة؛ تشتري الخامات بنفسك ونتولى نحن الإدارة والإشراف بأعلى معايير الجودة."
              align="right"
            />

            {/* Supervision Tiers */}
            <motion.div
              className="mt-10 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3
                className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                نسب الإشراف
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {COST_PLUS_TIERS.map((tier, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-sm text-center"
                    style={{
                      background: "rgba(20,21,22,0.8)",
                      border: i === 2
                        ? "1px solid rgba(208,151,52,0.4)"
                        : "1px solid rgba(235,235,234,0.07)",
                    }}
                  >
                    <span
                      className="text-3xl font-black block mb-2"
                      style={{
                        background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold-bright))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {tier.percentage}
                    </span>
                    <p
                      className="text-xs leading-snug"
                      style={{ color: "var(--text-secondary)", direction: "rtl" }}
                      lang="ar"
                    >
                      {tier.rangeAr}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What's included */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h3
                className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                يشمل النظام
              </h3>
              <ul className="flex flex-col gap-3 list-none" dir="rtl">
                {COST_PLUS_INCLUDES.map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(208,151,52,0.1)",
                        border: "1px solid rgba(208,151,52,0.25)",
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-gold)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }} lang="ar">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href={whatsappLink(CONTACT.whatsapp[0], "مرحباً، أريد الاستفسار عن نظام Cost Plus")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors hover:text-[var(--color-gold-light)] no-underline"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
              >
                استفسر عن نظام Cost Plus
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — Gifts & No-Contract */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
            dir="rtl"
          >
            {/* Contract Gifts */}
            <div
              className="p-7 rounded-sm"
              style={{
                background: "rgba(20,21,22,0.8)",
                border: "1px solid rgba(208,151,52,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ background: "rgba(208,151,52,0.1)", border: "1px solid rgba(208,151,52,0.25)" }}
                >
                  <Gift size={18} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                </div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--color-gold-light)" }}
                >
                  هدايا التعاقد
                </h3>
              </div>
              <ul className="flex flex-col gap-3 list-none" dir="rtl">
                {COST_PLUS_GIFTS.map((gift, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(208,151,52,0.12)", border: "1px solid rgba(208,151,52,0.3)" }}
                    >
                      <CheckSquare size={8} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }} lang="ar">
                      {gift}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No-Contract Fee */}
            <div
              className="p-6 rounded-sm"
              style={{
                background: "rgba(208,151,52,0.05)",
                border: "1px solid rgba(208,151,52,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle size={16} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <h4 className="text-sm font-bold" style={{ color: "var(--color-white)" }}>
                  في حالة عدم التعاقد
                </h4>
              </div>
              <p className="text-sm" style={{ color: "var(--text-secondary)", direction: "rtl" }} lang="ar">
                تكلفة المعاينة والمقايسة:{" "}
                <strong style={{ color: "var(--color-gold)" }}>{COST_PLUS_NO_CONTRACT_FEE}</strong>
              </p>
            </div>

            {/* Summary card */}
            <div
              className="p-6 rounded-sm text-center"
              style={{
                background: "linear-gradient(135deg, rgba(208,151,52,0.08) 0%, rgba(187,131,42,0.04) 100%)",
                border: "1px solid rgba(208,151,52,0.25)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--color-gold-light)" }}>
                استثمارك + خبرتنا = نتيجة استثنائية
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-dark-gray)" }}>
                Your investment. Our expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
