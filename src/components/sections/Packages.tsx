"use client";

// ============================================================
// Packages Section — Silver, Gold, Platinum, VIP pricing cards
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PACKAGES, CONTACT } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import type { Package } from "@/types";

const TIER_STYLES: Record<
  Package["tier"],
  { gradient: string; border: string; badge: string; icon: React.ElementType | null }
> = {
  silver: {
    gradient: "linear-gradient(135deg, #9ca3af 0%, #d1d5db 50%, #9ca3af 100%)",
    border: "rgba(156,163,175,0.25)",
    badge: "rgba(156,163,175,0.1)",
    icon: null,
  },
  gold: {
    gradient: "linear-gradient(135deg, #BB832A 0%, #D09734 40%, #F5C759 70%, #E6B148 100%)",
    border: "rgba(208,151,52,0.5)",
    badge: "rgba(208,151,52,0.12)",
    icon: Star,
  },
  platinum: {
    gradient: "linear-gradient(135deg, #6b7280 0%, #94a3b8 40%, #cbd5e1 70%, #94a3b8 100%)",
    border: "rgba(148,163,184,0.3)",
    badge: "rgba(148,163,184,0.08)",
    icon: Sparkles,
  },
  vip: {
    gradient: "linear-gradient(135deg, #A16F26 0%, #D09734 30%, #F5C759 60%, #D09734 80%, #A16F26 100%)",
    border: "rgba(245,199,89,0.6)",
    badge: "rgba(245,199,89,0.12)",
    icon: Sparkles,
  },
};

export function Packages() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const message = "Hello, I'd like to inquire about your packages.";

  return (
    <section
      id="packages"
      className="section-padding bg-section-alt relative overflow-hidden"
      aria-labelledby="packages-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(208,151,52,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-brand">
        <SectionHeader
          overline="Pricing & Packages"
          title="Choose Your"
          titleHighlight="Level of Luxury"
          description="Four carefully crafted packages — each designed to deliver exceptional value at its tier. From premium to ultra-luxury, we have a solution for every vision."
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {PACKAGES.map((pkg) => {
            const styles = TIER_STYLES[pkg.tier];
            const BadgeIcon = styles.icon;
            const isHovered = hoveredId === pkg.id;
            const isPopular = pkg.isPopular;

            return (
              <motion.div
                key={pkg.id}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredId(pkg.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex flex-col rounded-sm overflow-hidden"
                style={{
                  background: isPopular
                    ? "rgba(28,29,30,0.95)"
                    : "rgba(20,21,22,0.85)",
                  border: `1px solid ${isHovered || isPopular ? styles.border : "rgba(235,235,234,0.07)"}`,
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  transform: isHovered ? "translateY(-8px)" : isPopular ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${styles.border}`
                    : isPopular
                    ? `0 15px 40px rgba(0,0,0,0.3)`
                    : "none",
                }}
                aria-label={`${pkg.name} package`}
              >
                {/* Top gradient bar */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: styles.gradient }}
                />

                {/* Badge */}
                {pkg.badge && (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{ background: styles.badge }}
                  >
                    {BadgeIcon && (
                      <BadgeIcon
                        size={10}
                        style={{
                          background: styles.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className="text-[9px] font-bold tracking-widest uppercase"
                      style={{
                        background: styles.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1 gap-8">
                  {/* Header */}
                  <div>
                    <p
                      className="text-xs font-semibold tracking-[0.25em] uppercase mb-2"
                      style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
                    >
                      Package
                    </p>
                    <h3
                      className="text-3xl font-black"
                      style={{
                        background: styles.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{ color: "var(--color-dark-gray)", direction: "rtl" }}
                      lang="ar"
                    >
                      {pkg.nameAr}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 list-none" role="list">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: styles.badge, border: `1px solid ${styles.border}` }}
                        >
                          <Check
                            size={9}
                            style={{
                              stroke: pkg.tier === "silver" ? "#9ca3af" : "var(--color-gold)",
                              strokeWidth: 3,
                            }}
                            aria-hidden="true"
                          />
                        </div>
                        <span
                          className="text-sm leading-snug"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto pt-4 flex flex-col gap-3">
                    <a
                      href={whatsappLink(
                        CONTACT.whatsapp[0],
                        `Hello, I'm interested in the ${pkg.name} package.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3.5 px-6 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300"
                      style={{
                        background: isHovered || isPopular ? styles.gradient : "transparent",
                        border: `1px solid ${styles.border}`,
                        color:
                          isHovered || isPopular
                            ? pkg.tier === "silver"
                              ? "#111213"
                              : "var(--color-black)"
                            : pkg.tier === "silver"
                            ? "#9ca3af"
                            : "var(--color-gold)",
                        fontFamily: "var(--font-accent)",
                        textDecoration: "none",
                      }}
                      aria-label={`Request ${pkg.name} package via WhatsApp`}
                    >
                      {pkg.ctaText}
                    </a>
                    <p
                      className="text-center text-[10px]"
                      style={{ color: "var(--color-dark-gray)" }}
                    >
                      Free consultation included
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-sm" style={{ color: "var(--color-dark-gray)" }}>
            All packages include a free site inspection and consultation.
            <br />
            Custom packages available — contact us for bespoke solutions.
          </p>
          <motion.div
            className="mt-6"
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
          >
            <Button
              href="#contact"
              variant="outline"
              size="md"
              showArrow
              id="packages-cta"
            >
              Discuss Custom Package
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
