"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, ArrowUp } from "lucide-react";
import { COMPANY_NAME, COMPANY_DESCRIPTION_AR, NAV_LINKS, CONTACT } from "@/lib/constants";
import { whatsappLink, formatPhone } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-24 pb-8 overflow-hidden"
      style={{
        background: "var(--color-black)",
        borderTop: "1px solid rgba(235,235,234,0.05)",
      }}
    >
      <div className="container-brand relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 no-underline group"
              aria-label={`${COMPANY_NAME} - الصفحة الرئيسية`}
            >
              <div className="relative w-56 sm:w-72 h-20 sm:h-28 flex items-center">
                <Image src="/assets/logo/logo.png" alt={COMPANY_NAME} fill sizes="288px" className="object-contain object-right" />
              </div>
            </Link>

            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {COMPANY_DESCRIPTION_AR}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4
              className="text-sm font-bold mb-6"
              style={{ color: "var(--color-white)" }}
            >
              روابط سريعة
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--color-gold)] inline-flex items-center gap-2 group"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h4
              className="text-sm font-bold mb-6"
              style={{ color: "var(--color-white)" }}
            >
              تواصل معنا
            </h4>
            <ul className="flex flex-col gap-4 list-none">
              <li>
                <a
                  href={`tel:${CONTACT.phones[0]}`}
                  className="flex items-start gap-3 group"
                  aria-label={`اتصل بنا: ${CONTACT.phones[0]}`}
                >
                  <Phone size={16} className="mt-0.5" style={{ color: "var(--color-gold)" }} />
                  <span
                    className="text-sm transition-colors group-hover:text-[var(--color-white)]"
                    style={{ color: "var(--text-secondary)" }}
                    dir="ltr"
                  >
                    {CONTACT.phones.join(" / ")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(CONTACT.whatsapp[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                  aria-label={`تواصل عبر واتساب: ${CONTACT.whatsapp[0]}`}
                >
                  <MessageCircle size={16} className="mt-0.5" style={{ color: "var(--color-gold)" }} />
                  <span
                    className="text-sm transition-colors group-hover:text-[var(--color-white)]"
                    style={{ color: "var(--text-secondary)" }}
                    dir="ltr"
                  >
                    {CONTACT.whatsapp.join(" / ")}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5" style={{ color: "var(--color-gold)" }} />
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    القاهرة، مصر
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(235,235,234,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}
            dir="ltr"
          >
            © {new Date().getFullYear()} PIXELS GROUP. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-transparent border-none cursor-pointer transition-colors hover:text-[var(--color-gold)]"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-primary)" }}
            aria-label="العودة للأعلى"
          >
            العودة للأعلى
            <ArrowUp size={14} style={{ color: "var(--color-gold)" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
