"use client";

// ============================================================
// ScrollReveal — Animate children on scroll into view
// ============================================================

import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variants?: Variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({
  children,
  className,
  style,
  variants = fadeInUp,
  delay = 0,
  duration,
  once = true,
  margin = "-10% 0px",
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as any });

  const customVariants: Variants = duration
    ? {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object })?.transition || {}),
            duration,
            delay,
          },
        },
      }
    : delay > 0
    ? {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object })?.transition || {}),
            delay,
          },
        },
      }
    : variants;

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      style={style}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </MotionComponent>
  );
}
