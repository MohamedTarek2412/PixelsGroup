"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone, MessageCircle } from "lucide-react";
import { COMPANY_NAME, CONTACT } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "30%"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--color-black)" }}
      aria-label="القسم الرئيسي"
    >
      {/* Animated Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(208,151,52,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(208,151,52,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient Radial Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 50% 50%, rgba(208,151,52,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 20% 80%, rgba(187,131,42,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 30% 30% at 80% 20%, rgba(245,199,89,0.04) 0%, transparent 50%)
            `,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(208, 151, 52, ${Math.random() * 0.4 + 0.1})`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Horizontal accent lines */}
      <div className="absolute inset-x-0 pointer-events-none" style={{ top: "20%" }} aria-hidden="true">
        <motion.div
          className="glow-line opacity-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="absolute inset-x-0 pointer-events-none" style={{ bottom: "20%" }} aria-hidden="true">
        <motion.div
          className="glow-line opacity-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container-brand flex flex-col items-center text-center gap-8"
        style={{ opacity }}
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <div className="divider-gold" style={{ margin: 0 }} />
          <span className="overline">PIXELS GROUP — القاهرة، مصر</span>
          <div className="divider-gold" style={{ margin: 0 }} />
        </motion.div>

        {/* Main Headline — Arabic */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
          style={{ fontFamily: "var(--font-cairo, var(--font-primary))" }}
        >
          <span className="block" style={{ fontSize: "clamp(2rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 1.4 }}>
            نُهندس لك
          </span>
          <span
            className="block text-gradient-gold"
            style={{ fontSize: "clamp(2rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 1.4 }}
          >
            مساحتك المثالية
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-xl leading-relaxed"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-cairo, var(--font-primary))" }}
        >
          تشطيبات داخلية فاخرة · تصميم معماري · إشراف هندسي — بدقة وشفافية وجودة لا تقبل المساومة
        </motion.p>

        {/* English tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm tracking-widest uppercase"
          style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
          dir="ltr"
        >
          ENGINEERING TOMORROW
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            showArrow
            id="hero-cta-primary"
          >
            ابدأ مشروعك
          </Button>
          <Button
            href="#projects"
            variant="outline"
            size="lg"
            id="hero-cta-projects"
          >
            شاهد أعمالنا
          </Button>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="flex items-center gap-6 mt-4"
          dir="ltr"
        >
          <a
            href={`tel:${CONTACT.phones[0]}`}
            className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase transition-colors hover:text-[var(--color-gold)]"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-accent)" }}
            aria-label={`اتصل بنا: ${CONTACT.phones[0]}`}
          >
            <Phone size={12} style={{ color: "var(--color-gold)" }} />
            {CONTACT.phones[0]}
          </a>
          <div className="w-px h-4" style={{ background: "rgba(235,235,234,0.15)" }} />
          <a
            href={whatsappLink(CONTACT.whatsapp[0])}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase transition-colors hover:text-[var(--color-gold)]"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-accent)" }}
            aria-label={`واتساب: ${CONTACT.whatsapp[0]}`}
          >
            <MessageCircle size={12} style={{ color: "var(--color-gold)" }} />
            WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
        aria-hidden="true"
      >
        <span
          className="text-[9px] font-medium tracking-[0.25em] uppercase"
          style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
        >
          Scroll
        </span>
        <div className="scroll-indicator-line" />
        <ArrowDown size={10} style={{ color: "var(--color-gold-dark)" }} />
      </motion.div>

      {/* Corner decorations */}
      <div
        className="absolute top-24 start-8 w-20 h-20 pointer-events-none"
        aria-hidden="true"
        style={{
          borderTop: "1px solid rgba(208,151,52,0.2)",
          borderLeft: "1px solid rgba(208,151,52,0.2)",
        }}
      />
      <div
        className="absolute top-24 end-8 w-20 h-20 pointer-events-none"
        aria-hidden="true"
        style={{
          borderTop: "1px solid rgba(208,151,52,0.2)",
          borderRight: "1px solid rgba(208,151,52,0.2)",
        }}
      />
    </section>
  );
}
