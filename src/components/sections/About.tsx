"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATS, COMPANY_DESCRIPTION_AR } from "@/lib/constants";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, viewportOnce);

  return (
    <section
      id="about"
      className="section-padding bg-section-alt relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-brand">
        {/* Top Grid: Header + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16 lg:mb-24">
          {/* Right: Header (RTL = right) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeader
              overline="من نحن"
              title="أُسّسنا على الهندسة."
              titleHighlight="نسعى للتميّز."
              description="بيكسلز جروب شركة رائدة في التشطيبات الداخلية والتصميم المعماري والإشراف الهندسي. نقدّم حلولاً متكاملة تناسب كل احتياج وميزانية."
              align="right"
            />

            <motion.div
              className="mt-8 p-5 sm:p-6 rounded-sm relative overflow-hidden"
              style={{
                background: "rgba(208,151,52,0.05)",
                border: "1px solid rgba(208,151,52,0.15)",
              }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                  display: "block",
                }}
              >
                {COMPANY_DESCRIPTION_AR}
              </span>
            </motion.div>
          </motion.div>

          {/* Left: Image placeholder */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1a1b1c 0%, #222324 100%)",
                  minHeight: "400px",
                }}
              >
                <div className="text-center">
                  <div
                    className="text-5xl font-black mb-4 text-gradient-gold"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    PG
                  </div>
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-dark-gray)" }}>
                    Pixels Group
                  </p>
                </div>
              </div>
              {/* Gold corners */}
              <div
                className="absolute top-4 end-4 w-10 h-10 pointer-events-none"
                style={{ borderTop: "2px solid var(--color-gold)", borderRight: "2px solid var(--color-gold)" }}
              />
              <div
                className="absolute bottom-4 start-4 w-10 h-10 pointer-events-none"
                style={{ borderBottom: "2px solid var(--color-gold)", borderLeft: "2px solid var(--color-gold)" }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -end-4 sm:-bottom-6 sm:-end-6 p-4 sm:p-5 rounded-sm"
              style={{
                background: "var(--color-black)",
                border: "1px solid rgba(208,151,52,0.3)",
                boxShadow: "var(--shadow-gold)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl sm:text-2xl font-black" style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}>7+</p>
              <p className="text-[10px] sm:text-xs tracking-wider" style={{ color: "var(--text-secondary)" }}>سنوات من التميّز</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ───── Stats Row ───── */}
        <motion.div
          ref={statsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-sm"
              style={{
                background: "rgba(208,151,52,0.04)",
                border: "1px solid rgba(208,151,52,0.1)",
              }}
            >
              <span
                className="counter-number"
                style={{
                  background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold-bright))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </span>
              <span
                className="text-xs sm:text-sm font-medium mt-2 leading-snug"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ───── Vision & Mission ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-12 lg:mt-20">
          {[
            {
              tag: "رؤيتنا",
              text: "أن نكون من الشركات الرائدة في مجال التشطيبات والتصميم الداخلي من خلال الجودة، والابتكار، والالتزام.",
              icon: "◈",
            },
            {
              tag: "رسالتنا",
              text: "تقديم تجربة تشطيب احترافية تعتمد على الشفافية، والجودة، والالتزام بالمواعيد — نتجاوز التوقعات في كل مرحلة.",
              icon: "◇",
            },
          ].map((item, i) => (
            <ScrollReveal
              key={item.tag}
              delay={i * 0.15}
              className="p-5 sm:p-7 rounded-sm card-gold-top"
              style={{
                background: "rgba(26,27,28,0.8)",
                border: "1px solid rgba(235,235,234,0.07)",
              } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-2xl sm:text-3xl shrink-0"
                  style={{ color: "var(--color-gold)" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <span className="badge-gold mb-3 inline-block">{item.tag}</span>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
