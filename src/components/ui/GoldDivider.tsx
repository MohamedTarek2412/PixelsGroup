"use client";

// ============================================================
// GoldDivider — Decorative gold line divider
// ============================================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GoldDividerProps {
  className?: string;
  width?: string;
  centered?: boolean;
  delay?: number;
}

export function GoldDivider({
  className = "",
  width = "60px",
  centered = false,
  delay = 0,
}: GoldDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`${centered ? "mx-auto" : ""} ${className}`}
      style={{ width, height: "2px", originX: 0 }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D09734, transparent)",
        }}
      />
    </motion.div>
  );
}
