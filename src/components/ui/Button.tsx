"use client";

// ============================================================
// Button — Premium CTA button component
// ============================================================

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  disabled = false,
  external = false,
  type = "button",
  id,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs gap-2",
    md: "px-7 py-3.5 text-sm gap-2.5",
    lg: "px-9 py-4.5 text-sm gap-3",
  };

  const variantClasses = {
    primary:
      "bg-[var(--color-gold)] text-[var(--color-black)] hover:bg-[var(--color-gold-light)] hover:shadow-[0_12px_40px_rgba(208,151,52,0.35)]",
    outline:
      "bg-transparent border border-[rgba(235,235,234,0.25)] text-[var(--color-white)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]",
    ghost:
      "bg-transparent text-[var(--color-gold)] hover:text-[var(--color-gold-light)]",
  };

  const baseClasses = cn(
    "inline-flex items-center font-semibold tracking-widest uppercase font-[var(--font-accent)]",
    "rounded-sm cursor-pointer transition-all duration-300 ease-out no-underline",
    "focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-3",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={14} />
        </motion.span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          id={id}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={href} id={id} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );
}
