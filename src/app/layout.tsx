import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk, Cairo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { COMPANY_NAME, COMPANY_TAGLINE, COMPANY_DESCRIPTION, SITE_URL } from "@/lib/constants";

// ── Fonts ─────────────────────────────────────────────────
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-loaded",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk-loaded",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Pixels Group — Cairo's premier interior finishing, architectural design, and engineering supervision company. Luxury interiors delivered with precision, transparency, and uncompromising quality.",
  keywords: [
    "interior finishing Cairo",
    "interior design Egypt",
    "engineering supervision",
    "luxury interiors",
    "architectural design",
    "Pixels Group",
    "تشطيبات داخلية",
    "تصميم داخلي",
    "إشراف هندسي",
    "القاهرة",
  ],
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Engineering Luxury Interiors`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  category: "business",
};

// ── Viewport ──────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111213",
  colorScheme: "dark",
};

// ── JSON-LD Structured Data ────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: COMPANY_NAME,
  alternateName: "بيكسلز جروب",
  description: COMPANY_DESCRIPTION,
  url: SITE_URL,
  telephone: "+201099974203",
  email: "info@pixelsgroup.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  priceRange: "$$$$",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 30.0444,
      longitude: 31.2357,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Finishing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrated Finishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engineering Supervision" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cost Plus System" } },
    ],
  },
  sameAs: [
    "https://github.com/MohamedTarek2412/PixelsGroup",
  ],
};

// ── Root Layout ───────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${cairo.variable}`}
    >
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{
          fontFamily: "var(--font-cairo, var(--font-primary))",
        }}
      >
        {/* Premium custom cursor — desktop only */}
        <CustomCursor />

        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] px-4 py-2 text-sm font-semibold rounded-sm"
          style={{
            background: "var(--color-gold)",
            color: "var(--color-black)",
            fontFamily: "var(--font-accent)",
          }}
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
