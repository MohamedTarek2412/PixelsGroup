"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
                <Image
                  src="/assets/banners/ChatGPT Image Jul 18, 2026, 01_59_57 AM.png"
                  alt="Pixels Group — من نحن"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Gold corners */}
              <div
                className="absolute -top-3 -end-3 sm:-top-4 sm:-end-4 w-10 h-10 pointer-events-none"
                style={{ borderTop: "2px solid var(--color-gold)", borderLeft: "2px solid var(--color-gold)" }}
              />
              <div
                className="absolute -bottom-3 -start-3 sm:-bottom-4 sm:-start-4 w-10 h-10 pointer-events-none"
                style={{ borderBottom: "2px solid var(--color-gold)", borderRight: "2px solid var(--color-gold)" }}
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
              <p className="text-xl sm:text-2xl font-black inline-block" dir="ltr" style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}>7+</p>
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mt-16 sm:mt-20 lg:mt-24"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-6 py-10 sm:px-8 sm:py-12 lg:p-12 rounded-sm"
              style={{
                background: "rgba(208,151,52,0.04)",
                border: "1px solid rgba(208,151,52,0.1)",
              }}
            >
              <span
                className="counter-number inline-block"
                dir="ltr"
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
                className="text-sm sm:text-base font-semibold mt-4 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ───── Vision & Mission ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-20 sm:mt-24 lg:mt-32">
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
              className="px-8 py-12 sm:p-12 lg:p-16 rounded-sm card-gold-top"
              style={{
                background: "rgba(26,27,28,0.8)",
                border: "1px solid rgba(235,235,234,0.07)",
              } as React.CSSProperties}
            >
              <div className="flex items-start gap-6">
                <span
                  className="text-3xl sm:text-4xl shrink-0 mt-1"
                  style={{ color: "var(--color-gold)" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <span className="badge-gold mb-5 inline-block px-4 py-1.5">{item.tag}</span>
                  <p className="text-base sm:text-lg leading-loose" style={{ color: "var(--text-secondary)" }}>
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
