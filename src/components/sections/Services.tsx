"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Ruler, Sofa, HardHat, ClipboardList, TrendingUp, Home, ArrowLeft,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, Ruler, Sofa, HardHat, ClipboardList, TrendingUp, Home,
};

export function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section-padding bg-brand relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div
        className="absolute top-0 end-0 w-1/2 h-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(208,151,52,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-brand">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader
            overline="خدماتنا"
            title="ما نقدمه"
            titleHighlight="لعملائنا"
            description="حلول تشطيب شاملة — من الفكرة الأولى حتى التسليم النهائي — بدقة هندسية ومعايير فاخرة."
            align="right"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 text-sm font-semibold tracking-wider transition-colors hover:text-[var(--color-gold-light)]"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
            >
              <ArrowLeft size={14} />
              اطلب خدمة
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Building2;
            const isHovered = hoveredId === service.id;

            return (
              <motion.article
                key={service.id}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative p-7 rounded-sm flex flex-col gap-5 cursor-default overflow-hidden"
                style={{
                  background: isHovered ? "rgba(30,31,32,0.95)" : "rgba(20,21,22,0.8)",
                  border: isHovered ? "1px solid rgba(208,151,52,0.4)" : "1px solid rgba(235,235,234,0.06)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isHovered ? "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(208,151,52,0.1)" : "none",
                }}
                aria-label={`خدمة: ${service.titleAr}`}
              >
                {/* Top border glow */}
                <motion.div
                  className="absolute top-0 start-0 end-0 h-[1px]"
                  style={{
                    background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Service Number */}
                <span
                  className="absolute top-5 start-6 text-5xl font-black opacity-[0.04] select-none"
                  style={{ fontFamily: "var(--font-accent)", color: "var(--color-gold)" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-sm flex items-center justify-center"
                  style={{
                    background: isHovered ? "rgba(208,151,52,0.15)" : "rgba(208,151,52,0.07)",
                    border: "1px solid rgba(208,151,52,0.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon
                    size={20}
                    style={{
                      color: isHovered ? "var(--color-gold-bright)" : "var(--color-gold)",
                      transition: "color 0.3s ease",
                    }}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Titles */}
                <div>
                  <h3
                    className="text-base font-bold mb-1 transition-colors duration-300"
                    style={{ color: isHovered ? "var(--color-gold-light)" : "var(--color-white)" }}
                  >
                    {service.titleAr}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
                  >
                    {service.titleEn}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {service.descriptionAr}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(208,151,52,0.07)",
                        color: "var(--color-gold-dark)",
                        border: "1px solid rgba(208,151,52,0.15)",
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
