// ============================================================
// PIXELS GROUP — Framer Motion Animation Variants
// ============================================================

import type { Variants } from "framer-motion";

// ── Fade In Up ────────────────────────────────────────────
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ── Fade In ───────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ── Fade In Left ──────────────────────────────────────────
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ── Fade In Right ─────────────────────────────────────────
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ── Scale In ──────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ── Stagger Container ─────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ── Stagger Container Fast ────────────────────────────────
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// ── Stagger Container Slow ────────────────────────────────
export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// ── Reveal from Clip ──────────────────────────────────────
export const clipReveal: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ── Line Draw ─────────────────────────────────────────────
export const lineDraw: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
};

// ── Hero Title Word ───────────────────────────────────────
export const heroWordReveal: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ── Card Hover ────────────────────────────────────────────
export const cardHover = {
  initial: { y: 0 },
  hover: {
    y: -6,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ── Number Counter ────────────────────────────────────────
export const counterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ── Slide Up and Fade ─────────────────────────────────────
export const slideUpFade: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// ── Accordion ─────────────────────────────────────────────
export const accordionContent: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
};

// ── Process Step ─────────────────────────────────────────
export const processStep: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.1,
    },
  }),
};

// ── Viewport settings ─────────────────────────────────────
import type { UseInViewOptions } from "framer-motion";

export const viewportOnce: UseInViewOptions = {
  once: true,
  margin: "-10% 0px" as any,
};

export const viewportRepeat: UseInViewOptions = {
  once: false,
  margin: "-15% 0px" as any,
};
