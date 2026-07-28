"use client";

// ============================================================
// WhyUs Section — 8 key differentiators with icons
// ============================================================

import {
  Users,
  Clock,
  Eye,
  Star,
  MapPin,
  Shield,
  CheckCircle,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_US } from "@/lib/constants";
import { staggerContainer, fadeInUp, fadeInLeft, viewportOnce } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  Users,
  Clock,
  Eye,
  Star,
  MapPin,
  Shield,
  CheckCircle,
  Heart,
};

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-padding relative overflow-hidden"
      style={{ background: "#141516" }}
      aria-labelledby="why-us-heading"
    >
      {/* Decorative large text */}
      <div
        className="absolute -left-8 top-1/2 -translate-y-1/2 text-[180px] font-black leading-none pointer-events-none select-none hidden xl:block"
        style={{
          color: "rgba(208,151,52,0.02)",
          fontFamily: "var(--font-accent)",
          transform: "rotate(-90deg) translateX(-50%)",
        }}
        aria-hidden="true"
      >
        QUALITY
      </div>

      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 xl:gap-24 items-center">
          {/* Left: Header + large number */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeader
              overline="Why Pixels Group"
              title="The Standard"
              titleHighlight="You Deserve."
              description="We don't just finish spaces — we engineer experiences. Eight principles guide every project we undertake."
              align="left"
            />

            <motion.div
              className="mt-12 flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex flex-col">
                <span
                  className="text-7xl font-black leading-none"
                  style={{
                    background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold-bright))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  8
                </span>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
                >
                  Core Commitments
                </span>
              </div>
              <div
                className="w-px h-16"
                style={{ background: "rgba(208,151,52,0.2)" }}
              />
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-dark-gray)" }}
              >
                Every promise is a guarantee. Every project is a testament to our standards.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Points grid */}
          <motion.div
            className="lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_US.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || CheckCircle;
                return (
                  <motion.div
                    key={item.titleEn}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-5 rounded-sm group cursor-default"
                    style={{
                      background: "rgba(26,27,28,0.6)",
                      border: "1px solid rgba(235,235,234,0.06)",
                      transition: "all 0.35s ease",
                    }}
                    whileHover={{
                      borderColor: "rgba(208,151,52,0.25)",
                      backgroundColor: "rgba(30,31,32,0.8)",
                      x: 4,
                    }}
                  >
                    {/* Number */}
                    <span
                      className="text-[10px] font-bold shrink-0"
                      style={{
                        color: "var(--color-gold-dark)",
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(208,151,52,0.08)",
                        border: "1px solid rgba(208,151,52,0.15)",
                      }}
                    >
                      <Icon
                        size={15}
                        style={{ color: "var(--color-gold)" }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="text-sm font-bold mb-0.5"
                        style={{ color: "var(--color-white)" }}
                      >
                        {item.titleEn}
                      </h3>
                      <p
                        className="text-xs"
                        style={{
                          color: "var(--color-dark-gray)",
                          direction: "rtl",
                          fontFamily: "var(--font-primary)",
                        }}
                        lang="ar"
                      >
                        {item.titleAr}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
