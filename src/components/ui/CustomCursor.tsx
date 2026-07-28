"use client";

// ============================================================
// CustomCursor — Premium gold cursor effect
// ============================================================

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let animId: number;
    let isVisible = false;

    const moveCursor = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
      // Ring follows with lag
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    // Hover effects
    const addHoverClass = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "rgba(208,151,52,0.9)";
      }
    };
    const removeHoverClass = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(208,151,52,0.5)";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
        style={{ opacity: 0, transition: "opacity 0.3s" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
        style={{ opacity: 0, transition: "opacity 0.3s, width 0.3s, height 0.3s, border-color 0.3s" }}
      />
    </>
  );
}
