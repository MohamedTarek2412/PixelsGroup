"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ShieldCheck, Gem, Info } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PACKAGES } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

export function Packages() {
  const [activeTab, setActiveTab] = useState<string>("gold");

  return (
    <section
      id="packages"
      className="section-padding bg-section-alt relative overflow-hidden"
      aria-labelledby="packages-heading"
    >
      <div className="container-brand">
        <div className="text-center mb-16">
          <SectionHeader
            overline="باقات التشطيب"
            title="اختر الباقة"
            titleHighlight="المناسبة لك"
            description="جميع باقاتنا تشمل التصميم، التنفيذ، والإشراف الهندسي الكامل لضمان جودة استثنائية."
            align="center"
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start relative">
          {/* Package Selection Sidebar */}
          <div className="col-span-3 sticky top-32 flex flex-col gap-4 z-10">
            {PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActiveTab(pkg.id)}
                className="w-full text-right p-6 rounded-sm transition-all duration-300 relative group cursor-pointer overflow-hidden border-none"
                style={{
                  background:
                    activeTab === pkg.id
                      ? "rgba(208,151,52,0.1)"
                      : "rgba(26,27,28,0.6)",
                  border:
                    activeTab === pkg.id
                      ? "1px solid rgba(208,151,52,0.4)"
                      : "1px solid rgba(235,235,234,0.06)",
                }}
                aria-selected={activeTab === pkg.id}
                role="tab"
              >
                {/* Active indicator line */}
                <div
                  className="absolute top-0 bottom-0 end-0 w-1 transition-all duration-300"
                  style={{
                    background: "var(--color-gold)",
                    opacity: activeTab === pkg.id ? 1 : 0,
                  }}
                />

                <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-xl font-bold"
                      style={{
                        color:
                          activeTab === pkg.id
                            ? "var(--color-gold-light)"
                            : "var(--color-white)",
                        fontFamily: "var(--font-primary)",
                      }}
                    >
                      {pkg.name}
                    </h3>
                  {pkg.id === "silver" && <ShieldCheck size={20} style={{ color: "var(--color-dark-gray)" }} />}
                  {pkg.id === "gold" && <Star size={20} style={{ color: "var(--color-gold)" }} />}
                  {pkg.id === "platinum" && <Gem size={20} style={{ color: "#e5e4e2" }} />}
                  {pkg.id === "vip" && <Star size={20} style={{ color: "var(--color-gold-bright)" }} />}
                </div>

                <div className="flex items-baseline gap-2" dir="ltr">
                  <span
                    className="text-2xl font-black leading-none"
                    style={{ color: "var(--color-white)", fontFamily: "var(--font-accent)" }}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                    dir="rtl"
                  >
                    {pkg.priceNote}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Package Details Content */}
          <div className="col-span-9 bg-[rgba(20,21,22,0.6)] border border-[rgba(235,235,234,0.08)] rounded-sm p-8 min-h-[600px]">
            <AnimatePresence mode="wait">
              {PACKAGES.map(
                (pkg) =>
                  activeTab === pkg.id && (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      {/* Header */}
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                              <h2
                                className="text-2xl font-black tracking-wide uppercase"
                                style={{ color: "var(--color-gold)", fontFamily: "var(--font-primary)" }}
                              >
                                {pkg.name}
                              </h2>
                            {pkg.badge && (
                              <span
                                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                                style={{
                                  background: "rgba(208,151,52,0.15)",
                                  color: "var(--color-gold-light)",
                                  border: "1px solid rgba(208,151,52,0.3)",
                                }}
                              >
                                {pkg.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            مواصفات وتفاصيل التشطيب
                          </p>
                        </div>
                        
                        <a
                          href="#contact"
                          className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5"
                          style={{
                            background: "var(--color-gold)",
                            color: "var(--color-black)",
                            fontFamily: "var(--font-primary)",
                            textDecoration: "none",
                          }}
                        >
                          {pkg.ctaText}
                        </a>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {pkg.highlights.map((h, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[rgba(235,235,234,0.05)] border border-[rgba(235,235,234,0.1)]"
                            style={{ color: "var(--color-white)" }}
                          >
                            <Check size={12} style={{ color: "var(--color-gold)" }} />
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Categories Grid */}
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-12">
                        {pkg.categories.map((cat, idx) => (
                          <div key={idx}>
                            <h4
                              className="text-base font-bold mb-5 pb-3 border-b"
                              style={{
                                color: "var(--color-gold-light)",
                                borderColor: "rgba(208,151,52,0.2)",
                              }}
                            >
                              {cat.categoryAr}
                            </h4>
                            <ul className="flex flex-col gap-4 list-none">
                              {cat.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-3">
                                  <div
                                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                    style={{ background: "rgba(208,151,52,0.6)" }}
                                  />
                                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-white)" }}>
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Mobile CTA */}
                      <div className="mt-8 pt-6 border-t md:hidden border-[rgba(235,235,234,0.1)]">
                        <a
                          href="#contact"
                          className="inline-flex w-full items-center justify-center px-6 py-4 rounded-sm text-sm font-bold uppercase transition-all"
                          style={{
                            background: "var(--color-gold)",
                            color: "var(--color-black)",
                            fontFamily: "var(--font-primary)",
                            textDecoration: "none",
                          }}
                        >
                          {pkg.ctaText}
                        </a>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout (Accordion style) */}
        <div className="lg:hidden flex flex-col gap-6">
          {PACKAGES.map((pkg) => {
            const isActive = activeTab === pkg.id;

            return (
              <div
                key={pkg.id}
                className="rounded-sm overflow-hidden"
                style={{
                  background: isActive ? "rgba(20,21,22,0.8)" : "rgba(26,27,28,0.6)",
                  border: isActive
                    ? "1px solid rgba(208,151,52,0.4)"
                    : "1px solid rgba(235,235,234,0.06)",
                }}
              >
                {/* Header (Clickable) */}
                <button
                  onClick={() => setActiveTab(isActive ? "" : pkg.id)}
                  className="w-full text-right p-4 flex items-center justify-between bg-transparent border-none cursor-pointer gap-3"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className="text-base font-bold leading-relaxed"
                        style={{
                          color: isActive ? "var(--color-gold-light)" : "var(--color-white)",
                          fontFamily: "var(--font-primary)",
                        }}
                      >
                        {pkg.name}
                      </h3>
                      {pkg.badge && (
                        <span
                          className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest"
                          style={{
                            background: "rgba(208,151,52,0.15)",
                            color: "var(--color-gold-light)",
                            border: "1px solid rgba(208,151,52,0.3)",
                          }}
                        >
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2 mt-2" dir="ltr">
                      <span className="text-lg font-black leading-none" style={{ color: "var(--color-white)", fontFamily: "var(--font-accent)" }}>
                        {pkg.price}
                      </span>
                      <span className="text-[10px]" style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }} dir="rtl">
                        {pkg.priceNote}
                      </span>
                    </div>
                  </div>
                  
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0"
                    style={{
                      background: isActive ? "rgba(208,151,52,0.15)" : "rgba(235,235,234,0.05)",
                      color: isActive ? "var(--color-gold)" : "var(--text-secondary)",
                      transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-2 border-t border-[rgba(235,235,234,0.08)] mt-1">
                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 my-4">
                          {pkg.highlights.map((h, idx) => (
                            <span
                              key={idx}
                              className="flex items-center gap-1 px-2 py-1 rounded-sm text-[10px] font-semibold bg-[rgba(235,235,234,0.05)] border border-[rgba(235,235,234,0.1)]"
                              style={{ color: "var(--color-white)" }}
                            >
                              <Check size={10} style={{ color: "var(--color-gold)" }} />
                              {h}
                            </span>
                          ))}
                        </div>

                        {/* Categories List */}
                        <div className="flex flex-col gap-8 mt-6">
                          {pkg.categories.map((cat, idx) => (
                            <div key={idx}>
                              <h4
                                className="text-sm font-bold mb-4 pb-2 border-b"
                                style={{
                                  color: "var(--color-gold-light)",
                                  borderColor: "rgba(208,151,52,0.2)",
                                }}
                              >
                                {cat.categoryAr}
                              </h4>
                              <ul className="flex flex-col gap-4 list-none">
                                {cat.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-start gap-3">
                                    <div
                                      className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                                      style={{ background: "rgba(208,151,52,0.6)" }}
                                    />
                                    <span className="text-xs leading-relaxed" style={{ color: "var(--color-white)" }}>
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-6 pt-4 border-t border-[rgba(235,235,234,0.1)]">
                          <a
                            href="#contact"
                            className="inline-flex w-full items-center justify-center px-4 py-3 rounded-sm text-xs font-bold uppercase transition-all"
                            style={{
                              background: "var(--color-gold)",
                              color: "var(--color-black)",
                              fontFamily: "var(--font-primary)",
                              textDecoration: "none",
                            }}
                          >
                            {pkg.ctaText}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
