"use client";

// ============================================================
// Navbar — Premium fixed navigation with scroll behavior
// ============================================================

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT, COMPANY_NAME } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35 }
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled
            ? "rgba(17, 18, 19, 0.92)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(208, 151, 52, 0.12)"
            : "1px solid transparent",
        }}
        role="banner"
      >
        <div className="container-brand">
          <nav
            className="flex items-center justify-between py-5"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 no-underline group"
              aria-label={`${COMPANY_NAME} - Home`}
            >
              <div className="relative">
                {/* Stylized logo mark */}
                <div className="w-9 h-9 relative">
                  <div
                    className="absolute inset-0 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, #D09734 0%, #F5C759 50%, #BB832A 100%)",
                    }}
                  />
                  <div className="absolute inset-[2px] bg-[var(--color-black)] rounded-[2px] flex items-center justify-center">
                    <span
                      className="text-[10px] font-black tracking-[-0.05em]"
                      style={{ color: "#D09734", fontFamily: "var(--font-accent)" }}
                    >
                      PG
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-sm font-bold tracking-[0.12em] uppercase"
                  style={{
                    color: "var(--color-white)",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  Pixels
                </span>
                <span
                  className="text-[9px] font-medium tracking-[0.3em] uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 list-none" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={`relative text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                      activeSection === href
                        ? "text-[var(--color-gold)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--color-white)]"
                    }`}
                    style={{ fontFamily: "var(--font-accent)" }}
                    aria-current={activeSection === href ? "page" : undefined}
                  >
                    {label}
                    {activeSection === href && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[1px]"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, #D09734, transparent)",
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappLink(CONTACT.whatsapp[0], "Hello, I'd like to inquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:text-[var(--color-gold-light)]"
                style={{
                  fontFamily: "var(--font-accent)",
                  color: "var(--color-gold)",
                  border: "1px solid rgba(208,151,52,0.3)",
                }}
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phones[0]}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-300"
                style={{
                  fontFamily: "var(--font-accent)",
                  background: "var(--color-gold)",
                  color: "var(--color-black)",
                }}
                aria-label={`Call us at ${CONTACT.phones[0]}`}
              >
                <Phone size={12} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden p-2 text-[var(--color-white)] bg-transparent border-none cursor-pointer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{
              background: "rgba(17, 18, 19, 0.98)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col justify-center h-full container-brand gap-8">
              <motion.div
                className="flex flex-col gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <motion.div
                    key={href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(href)}
                      className={`text-3xl font-bold tracking-tight bg-transparent border-none cursor-pointer transition-colors duration-200 ${
                        activeSection === href
                          ? "text-gradient-gold"
                          : "text-[var(--color-white)] hover:text-[var(--color-gold)]"
                      }`}
                      style={{ fontFamily: "var(--font-primary)" }}
                    >
                      {label}
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 pt-8 border-t"
                style={{ borderColor: "rgba(208,151,52,0.15)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={`tel:${CONTACT.phones[0]}`}
                  className="flex items-center gap-3 text-[var(--color-gold)]"
                >
                  <Phone size={16} />
                  <span className="text-lg font-semibold">{CONTACT.phones[0]}</span>
                </a>
                <a
                  href={whatsappLink(CONTACT.whatsapp[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--color-white)]"
                >
                  <MessageCircle size={16} />
                  <span className="text-lg font-semibold">{CONTACT.whatsapp[0]}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
