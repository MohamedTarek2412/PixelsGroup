"use client";

// ============================================================
// Testimonials Section — Client reviews carousel
// ============================================================

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";
import { viewportOnce } from "@/lib/animations";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="section-padding bg-brand relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(208,151,52,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-brand">
        <div className="text-center mb-16">
          <SectionHeader
            overline="Client Stories"
            title="What Our Clients"
            titleHighlight="Say"
            description="The voices of those we've built for — every word earned through precision, dedication, and results."
            align="center"
          />
        </div>

        {/* Main Testimonial */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-14 h-14 rounded-sm flex items-center justify-center"
              style={{
                background: "rgba(208,151,52,0.08)",
                border: "1px solid rgba(208,151,52,0.2)",
              }}
              aria-hidden="true"
            >
              <Quote size={24} style={{ color: "var(--color-gold)" }} />
            </div>
          </div>

          {/* Testimonial Content */}
          <div
            className="relative min-h-[200px] flex items-center"
            style={{ overflow: "hidden" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center"
              >
                {/* Stars */}
                <div
                  className="flex items-center justify-center gap-1.5 mb-8"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4"
                      style={{
                        background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-bright))",
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote>
                  <p
                    className="text-xl md:text-2xl leading-relaxed mb-10 font-light"
                    style={{ color: "var(--color-white)" }}
                  >
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </blockquote>

                <div className="flex flex-col items-center gap-2">
                  {/* Avatar placeholder */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))",
                    }}
                    aria-hidden="true"
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ color: "var(--color-black)", fontFamily: "var(--font-accent)" }}
                    >
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-base font-bold"
                      style={{ color: "var(--color-white)" }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-dark-gray)" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                  <span className="badge-gold mt-2">{testimonial.projectType}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer transition-all"
              style={{
                border: "1px solid rgba(208,151,52,0.3)",
                background: "transparent",
                color: "var(--color-gold)",
              }}
              whileHover={{
                borderColor: "rgba(208,151,52,0.7)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </motion.button>

            {/* Dots */}
            <div
              className="flex items-center gap-2"
              role="group"
              aria-label="Testimonial navigation"
            >
              {TESTIMONIALS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="rounded-full cursor-pointer border-none"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === current
                        ? "var(--color-gold)"
                        : "rgba(208,151,52,0.25)",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? "true" : "false"}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer transition-all"
              style={{
                border: "1px solid rgba(208,151,52,0.3)",
                background: "transparent",
                color: "var(--color-gold)",
              }}
              whileHover={{
                borderColor: "rgba(208,151,52,0.7)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>

        {/* Scroll trust line */}
        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: "rgba(235,235,234,0.06)" }} />
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
            >
              Trusted by clients across Greater Cairo
            </p>
            <div className="flex-1 h-px" style={{ background: "rgba(235,235,234,0.06)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
