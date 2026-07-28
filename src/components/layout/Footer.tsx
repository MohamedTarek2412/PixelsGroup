"use client";

// ============================================================
// Footer — Premium footer with links, contact, and legal
// ============================================================

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";
import { COMPANY_NAME, CONTACT, NAV_LINKS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative"
      style={{
        background: "#0d0e0f",
        borderTop: "1px solid rgba(208,151,52,0.12)",
      }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Gold top line */}
      <div className="glow-line" />

      <div className="container-brand pt-20 pb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #D09734 0%, #F5C759 50%, #BB832A 100%)",
                  }}
                />
                <div className="absolute inset-[2px] rounded-[2px] flex items-center justify-center"
                  style={{ background: "#0d0e0f" }}>
                  <span
                    className="text-[11px] font-black"
                    style={{ color: "#D09734", fontFamily: "var(--font-accent)" }}
                  >
                    PG
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-base font-bold tracking-[0.12em] uppercase"
                  style={{ color: "var(--color-white)", fontFamily: "var(--font-accent)" }}
                >
                  Pixels Group
                </span>
                <span
                  className="text-[9px] font-medium tracking-[0.3em] uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Engineering Luxury Interiors
                </span>
              </div>
            </div>

            <p
              className="leading-relaxed max-w-sm"
              style={{ color: "var(--color-dark-gray)" }}
            >
              A premier interior finishing, design, and engineering supervision company. We transform spaces into luxury environments — with precision, transparency, and uncompromising quality.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              {CONTACT.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label={`Call ${phone}`}
                >
                  <Phone size={14} style={{ color: "var(--color-gold)" }} />
                  <span className="hover:text-[var(--color-white)] transition-colors">{phone}</span>
                </a>
              ))}
              {CONTACT.whatsapp.map((wa) => (
                <a
                  key={wa}
                  href={whatsappLink(wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label={`WhatsApp ${wa}`}
                >
                  <MessageCircle size={14} style={{ color: "var(--color-gold)" }} />
                  <span className="hover:text-[var(--color-white)] transition-colors">{wa}</span>
                </a>
              ))}
              <div
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <MapPin size={14} style={{ color: "var(--color-gold)" }} />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 list-none">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 no-underline hover:text-[var(--color-white)]"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-primary)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-accent)" }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3 list-none">
              {[
                "Integrated Finishing",
                "Architectural Design",
                "Interior Design",
                "Engineering Supervision",
                "Execution Estimation",
                "Cost Plus System",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm transition-colors duration-200 no-underline hover:text-[var(--color-white)]"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-primary)" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(235,235,234,0.07)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-dark-gray)" }}>
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>

          <p className="text-xs" style={{ color: "var(--color-dark-gray)" }}>
            Crafted with precision & passion.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-sm border cursor-pointer transition-all duration-300"
            style={{
              borderColor: "rgba(208,151,52,0.3)",
              color: "var(--color-gold)",
              background: "transparent",
            }}
            whileHover={{
              borderColor: "rgba(208,151,52,0.8)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
