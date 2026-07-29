"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";
import { viewportOnce } from "@/lib/animations";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, viewportOnce);

  const handlePrev = () =>
    setActiveIndex((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1));

  const handleNext = () =>
    setActiveIndex((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1));

  const t = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-black)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-brand" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Header */}
          <div className="lg:col-span-4">
            <SectionHeader
              overline="آراء العملاء"
              title="تحدثوا"
              titleHighlight="عنا"
              description="أكثر من مجرد مساحات — نبني ثقة وعلاقات تدوم."
              align="right"
            />

            {/* Nav buttons */}
            <motion.div
              className="flex gap-3 mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-transparent cursor-pointer group"
                style={{ border: "1px solid rgba(208,151,52,0.3)" }}
                aria-label="السابق"
              >
                <ChevronRight
                  size={18}
                  className="transition-colors group-hover:text-[var(--color-gold-bright)]"
                  style={{ color: "var(--color-gold)" }}
                />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-transparent cursor-pointer group"
                style={{ border: "1px solid rgba(208,151,52,0.3)" }}
                aria-label="التالي"
              >
                <ChevronLeft
                  size={18}
                  className="transition-colors group-hover:text-[var(--color-gold-bright)]"
                  style={{ color: "var(--color-gold)" }}
                />
              </button>

              {/* counter */}
              <div
                className="flex items-center gap-1 mr-2"
                style={{ color: "var(--color-dark-gray)" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--color-gold)" }}
                >
                  {activeIndex + 1}
                </span>
                <span className="text-xs">/</span>
                <span className="text-xs">{TESTIMONIALS.length}</span>
              </div>
            </motion.div>
          </div>

          {/* Testimonial Card — auto height */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 rounded-sm"
                style={{
                  background: "rgba(20,21,22,0.85)",
                  border: "1px solid rgba(235,235,234,0.07)",
                }}
              >
                {/* Quote icon */}
                <Quote
                  size={36}
                  className="opacity-10 mb-4"
                  style={{ color: "var(--color-gold)" }}
                  aria-hidden="true"
                />

                {/* Content */}
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{
                    color: "var(--color-white)",
                    fontFamily: "var(--font-primary)",
                  }}
                >
                  "{t.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label={`تقييم ${t.rating} نجوم`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: "var(--color-gold)" }}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(235,235,234,0.07)" }}
                >
                  <h4
                    className="text-sm font-bold mb-0.5"
                    style={{ color: "var(--color-gold-light)" }}
                  >
                    {t.name}
                  </h4>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-dark-gray)" }}
                  >
                    {t.role}
                  </p>
                  <span
                    className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(208,151,52,0.08)",
                      color: "var(--color-gold-dark)",
                      border: "1px solid rgba(208,151,52,0.15)",
                    }}
                  >
                    {t.projectType}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-end gap-2 mt-5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full transition-all cursor-pointer border-none p-0"
                  style={{
                    width: i === activeIndex ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === activeIndex
                        ? "var(--color-gold)"
                        : "rgba(235,235,234,0.15)",
                  }}
                  aria-label={`الذهاب للرأي ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
