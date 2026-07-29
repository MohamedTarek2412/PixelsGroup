"use client";

// ============================================================
// SectionHeader — Reusable premium section heading
// ============================================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export function SectionHeader({
  overline,
  title,
  titleHighlight,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  light = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewportOnce);

  const alignClass = {
    left: "items-end text-left", // In RTL, items-end is left
    center: "items-center text-center",
    right: "items-start text-right", // In RTL, items-start is right
  }[align];

  const dividerClass = {
    left: "ms-auto", // margin-start auto pushes to the left in RTL
    center: "mx-auto",
    right: "me-auto", // margin-end auto pushes to the right in RTL
  }[align];

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-4 ${alignClass} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {overline && (
        <motion.span variants={fadeInUp} className="overline">
          {overline}
        </motion.span>
      )}

      <motion.h2
        variants={fadeInUp}
        className={`${titleClassName} ${light ? "text-[var(--color-black)]" : "text-[var(--color-white)]"}`}
      >
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-gradient-gold">{titleHighlight}</span>
          </>
        )}
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        className={`divider-gold ${dividerClass}`}
      />

      {description && (
        <motion.p
          variants={fadeInUp}
          className={`max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-[var(--color-dark-gray)]" : "text-[var(--text-secondary)]"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
