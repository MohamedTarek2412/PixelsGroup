"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT, COMPANY_NAME } from "@/lib/constants";
import { whatsappLink, formatPhone } from "@/lib/utils";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const SERVICES_OPTIONS = [
  "تشطيب متكامل",
  "تصميم معماري",
  "تصميم داخلي",
  "إشراف هندسي",
  "مقايسة تنفيذية",
  "نظام Cost Plus",
  "أخرى",
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1.25rem",
    background: "rgba(20,21,22,0.8)",
    border: "1px solid rgba(235,235,234,0.1)",
    borderRadius: "4px",
    color: "var(--color-white)",
    fontFamily: "var(--font-primary)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  };

  return (
    <section
      id="contact"
      className="section-padding bg-section-alt relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 100% 100%, rgba(208,151,52,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 xl:gap-20">
          {/* Right (RTL): Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-10"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeader
              overline="تواصل معنا"
              title="ابدأ مشروعك"
              titleHighlight="الآن"
              description="مستعد لتحويل مساحتك؟ تواصل معنا اليوم للحصول على استشارة مجانية ومعاينة للموقع."
              align="right"
            />

            {/* Contact methods */}
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div>
                <h3
                  className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                >
                  الهاتف
                </h3>
                <div className="flex flex-col gap-2">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${formatPhone(phone)}`}
                      className="flex items-center gap-3 group"
                      aria-label={`اتصل بـ ${phone}`}
                    >
                      <div
                        className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(208,151,52,0.08)",
                          border: "1px solid rgba(208,151,52,0.2)",
                        }}
                      >
                        <Phone size={15} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                      </div>
                      <span
                        className="text-sm font-medium transition-colors group-hover:text-[var(--color-gold)]"
                        style={{ color: "var(--text-secondary)" }}
                        dir="ltr"
                      >
                        {phone}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <h3
                  className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                >
                  واتساب
                </h3>
                <div className="flex flex-col gap-2">
                  {CONTACT.whatsapp.map((wa) => (
                    <a
                      key={wa}
                      href={whatsappLink(wa, "مرحباً، أود الاستفسار عن خدماتكم.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                      aria-label={`تواصل عبر واتساب ${wa}`}
                    >
                      <div
                        className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(208,151,52,0.08)",
                          border: "1px solid rgba(208,151,52,0.2)",
                        }}
                      >
                        <MessageCircle size={15} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                      </div>
                      <span
                        className="text-sm font-medium transition-colors group-hover:text-[var(--color-gold)]"
                        style={{ color: "var(--text-secondary)" }}
                        dir="ltr"
                      >
                        {wa}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3
                  className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                >
                  العنوان
                </h3>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(208,151,52,0.08)",
                      border: "1px solid rgba(208,151,52,0.2)",
                    }}
                  >
                    <MapPin size={15} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                  </div>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    القاهرة، مصر · نغطي القاهرة الكبرى
                  </span>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div
              className="p-5 rounded-sm"
              style={{
                background: "rgba(208,151,52,0.04)",
                border: "1px solid rgba(208,151,52,0.12)",
              }}
            >
              <p
                className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-primary)" }}
              >
                وقت الاستجابة
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                نقوم بالرد على جميع الاستفسارات خلال <strong style={{ color: "var(--color-white)" }}>24 ساعة</strong>.
                يتم تحديد موعد المعاينة عادة خلال <strong style={{ color: "var(--color-white)" }}>48 ساعة</strong>.
              </p>
            </div>
          </motion.div>

          {/* Left (RTL): Form */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div
              className="p-8 md:p-10 rounded-sm relative overflow-hidden"
              style={{
                background: "rgba(20,21,22,0.7)",
                border: "1px solid rgba(235,235,234,0.08)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 inset-x-0 h-[2px]"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                }}
                aria-hidden="true"
              />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-5"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(208,151,52,0.1)",
                      border: "2px solid rgba(208,151,52,0.4)",
                    }}
                  >
                    <CheckCircle size={32} style={{ color: "var(--color-gold)" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--color-white)" }}>
                    تم إرسال رسالتك!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    شكراً لتواصلك معنا. سيقوم فريقنا بالتواصل معك قريباً جداً.
                  </p>
                  <a
                    href={whatsappLink(
                      CONTACT.whatsapp[0],
                      `مرحباً، قمت بملء نموذج التواصل في الموقع. اسمي ${formData.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold uppercase"
                    style={{
                      background: "var(--color-gold)",
                      color: "var(--color-black)",
                      fontFamily: "var(--font-primary)",
                      textDecoration: "none",
                    }}
                  >
                    <MessageCircle size={14} />
                    يمكنك أيضاً مراسلتنا عبر واتساب
                  </a>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="نموذج التواصل"
                >
                  <h3
                    className="text-lg font-bold mb-8"
                    style={{ color: "var(--color-white)" }}
                  >
                    أرسل لنا رسالة
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[11px] font-semibold mb-2"
                        style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                      >
                        الاسم بالكامل *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="الاسم"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(208,151,52,0.5)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(208,151,52,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(235,235,234,0.1)";
                          e.target.style.boxShadow = "none";
                        }}
                        aria-required="true"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-[11px] font-semibold mb-2"
                        style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                      >
                        رقم الهاتف *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        style={{ ...inputStyle, textAlign: "right" }}
                        dir="ltr"
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(208,151,52,0.5)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(208,151,52,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(235,235,234,0.1)";
                          e.target.style.boxShadow = "none";
                        }}
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-semibold mb-2"
                      style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={{ ...inputStyle, textAlign: "right" }}
                      dir="ltr"
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(208,151,52,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(208,151,52,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(235,235,234,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <label
                      htmlFor="contact-service"
                      className="block text-[11px] font-semibold mb-2"
                      style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                    >
                      الخدمة المطلوبة
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(208,151,52,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(208,151,52,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(235,235,234,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">اختر الخدمة المناسبة لك...</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s} style={{ background: "#141516" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label
                      htmlFor="contact-message"
                      className="block text-[11px] font-semibold mb-2"
                      style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-primary)" }}
                    >
                      الرسالة *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="حدثنا عن مشروعك... الموقع، المساحة، متطلباتك الأساسية..."
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(208,151,52,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(208,151,52,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(235,235,234,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                      aria-required="true"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-sm text-sm font-bold transition-all duration-300 cursor-pointer"
                    style={{
                      background: isSubmitting
                        ? "rgba(208,151,52,0.5)"
                        : "var(--color-gold)",
                      color: "var(--color-black)",
                      fontFamily: "var(--font-primary)",
                      border: "none",
                    }}
                    whileHover={isSubmitting ? {} : { scale: 1.01, y: -1 }}
                    whileTap={isSubmitting ? {} : { scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 rounded-full"
                          style={{ borderColor: "var(--color-black)", borderTopColor: "transparent" }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send size={14} className="rotate-180" />
                        إرسال الرسالة
                      </>
                    )}
                  </motion.button>

                  <p
                    className="text-center text-xs mt-4"
                    style={{ color: "var(--color-dark-gray)" }}
                  >
                    أو تواصل معنا مباشرة عبر{" "}
                    <a
                      href={whatsappLink(CONTACT.whatsapp[0])}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--color-gold)" }}
                    >
                      واتساب
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
