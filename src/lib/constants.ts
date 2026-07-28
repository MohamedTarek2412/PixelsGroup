// ============================================================
// PIXELS GROUP — Site Constants & Content Data
// ============================================================

import type {
  Service,
  Package,
  Project,
  ProcessStep,
  Testimonial,
  FAQItem,
  WhyUsPoint,
  ContactInfo,
  NavLink,
} from "@/types";

// ── Company Info ──────────────────────────────────────────
export const COMPANY_NAME = "Pixels Group";
export const COMPANY_NAME_AR = "بيكسلز جروب";
export const COMPANY_TAGLINE = "Engineering Luxury Interiors";
export const COMPANY_TAGLINE_AR = "هندسة الفخامة في كل تفصيلة";
export const COMPANY_DESCRIPTION =
  "A premier interior finishing, design, and engineering supervision company delivering integrated solutions across all budgets. Built on a foundation of precision, transparency, and uncompromising quality.";
export const COMPANY_DESCRIPTION_AR =
  "شركة متخصصة في أعمال التشطيبات الداخلية، التصميم، والإشراف الهندسي، تقدم حلولًا متكاملة تناسب مختلف الاحتياجات والميزانيات. نعتمد على فريق هندسي متخصص، ونلتزم بأعلى معايير الجودة والدقة.";

export const SITE_URL = "https://pixelsgroup.com";

// ── Contact ───────────────────────────────────────────────
export const CONTACT: ContactInfo = {
  phones: ["01099974203", "01122421917"],
  whatsapp: ["01148954825"],
  email: "info@pixelsgroup.com",
  address: "Cairo, Egypt",
};

// ── Navigation ────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ── Services ─────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "finishing",
    icon: "Building2",
    titleEn: "Integrated Finishing",
    titleAr: "التشطيبات المتكاملة",
    descriptionEn:
      "Complete turnkey finishing solutions from foundations to the finest details — executed with precision and premium materials.",
    descriptionAr:
      "حلول تشطيب متكاملة من الأساسات حتى أدق التفاصيل، منفذة بدقة وبأجود الخامات.",
    features: [
      "Premium materials",
      "Quality assured",
      "End-to-end execution",
    ],
  },
  {
    id: "architecture",
    icon: "Ruler",
    titleEn: "Architectural Design",
    titleAr: "التصميم المعماري",
    descriptionEn:
      "Visionary architectural designs that balance aesthetics with engineering reality, creating spaces that inspire and endure.",
    descriptionAr:
      "تصاميم معمارية رؤيوية تجمع بين الجماليات والواقع الهندسي، مما يخلق مساحات ملهمة وطويلة الأمد.",
    features: ["2D & 3D plans", "Engineering drawings", "Concept to reality"],
  },
  {
    id: "interior",
    icon: "Sofa",
    titleEn: "Interior Design",
    titleAr: "التصميم الداخلي",
    descriptionEn:
      "Curated interior environments that reflect your personality — where luxury meets functionality in every corner.",
    descriptionAr:
      "بيئات داخلية مُنتقاة تعكس شخصيتك — حيث تلتقي الفخامة بالوظيفية في كل زاوية.",
    features: ["3D visualization", "Material selection", "Custom furniture"],
  },
  {
    id: "supervision",
    icon: "HardHat",
    titleEn: "Engineering Supervision",
    titleAr: "الإشراف الهندسي",
    descriptionEn:
      "Rigorous daily on-site supervision ensuring every execution meets the highest standards of quality and craftsmanship.",
    descriptionAr:
      "إشراف يومي صارم في الموقع لضمان أن كل تنفيذ يلبي أعلى معايير الجودة والحرفية.",
    features: ["Daily site visits", "Quality control", "Progress reports"],
  },
  {
    id: "estimation",
    icon: "ClipboardList",
    titleEn: "Execution Estimation",
    titleAr: "المقايسات التنفيذية",
    descriptionEn:
      "Precise, transparent cost estimation with full material breakdowns — no hidden surprises, just complete clarity.",
    descriptionAr:
      "تقدير دقيق وشفاف للتكاليف مع تفاصيل كاملة للمواد — لا مفاجآت خفية، فقط وضوح تام.",
    features: ["Full transparency", "Detailed breakdown", "Fixed pricing"],
  },
  {
    id: "costplus",
    icon: "TrendingUp",
    titleEn: "Cost Plus System",
    titleAr: "نظام Cost Plus",
    descriptionEn:
      "Client purchases materials directly in their name — we manage execution, supervision, and quality control.",
    descriptionAr:
      "يشتري العميل المواد مباشرة باسمه — نحن ندير التنفيذ والإشراف ومراقبة الجودة.",
    features: ["Client ownership", "Full supervision", "Cost transparency"],
  },
  {
    id: "units",
    icon: "Home",
    titleEn: "Unit Finishing",
    titleAr: "تشطيب الوحدات",
    descriptionEn:
      "Specialist finishing for residential, administrative, and commercial units — delivered on schedule, every time.",
    descriptionAr:
      "تشطيب متخصص للوحدات السكنية والإدارية والتجارية — يتم تسليمها في الموعد المحدد في كل مرة.",
    features: [
      "Residential",
      "Commercial",
      "Administrative",
    ],
  },
];

// ── Why Choose Us ─────────────────────────────────────────
export const WHY_US: WhyUsPoint[] = [
  { icon: "Users", titleEn: "Specialized Engineering Team", titleAr: "فريق هندسي متخصص" },
  { icon: "Clock", titleEn: "Full Schedule Commitment", titleAr: "التزام كامل بالمواعيد" },
  { icon: "Eye", titleEn: "Price Transparency", titleAr: "شفافية في الأسعار" },
  { icon: "Star", titleEn: "High Execution Quality", titleAr: "جودة تنفيذ عالية" },
  { icon: "MapPin", titleEn: "Daily Site Follow-up", titleAr: "متابعة يومية للموقع" },
  { icon: "Shield", titleEn: "Certified Premium Materials", titleAr: "استخدام خامات معتمدة" },
  { icon: "CheckCircle", titleEn: "Phase-by-Phase Handover", titleAr: "استلام كل مرحلة قبل التالية" },
  { icon: "Heart", titleEn: "After-Delivery Service", titleAr: "خدمة ما بعد التسليم" },
];

// ── Packages ──────────────────────────────────────────────
export const PACKAGES: Package[] = [
  {
    id: "silver",
    name: "Silver",
    nameAr: "فضي",
    tier: "silver",
    features: [
      "Standard finishing materials",
      "Engineering supervision",
      "2D floor plans",
      "Monthly progress reports",
      "1-year warranty",
    ],
    image: "/assets/packages/silver.jpg",
    ctaText: "Get Silver",
  },
  {
    id: "gold",
    name: "Gold",
    nameAr: "ذهبي",
    tier: "gold",
    isPopular: true,
    badge: "Most Popular",
    features: [
      "Premium finishing materials",
      "Full interior design",
      "2D & 3D visualization",
      "Weekly progress reports",
      "Daily supervision",
      "2-year warranty",
    ],
    image: "/assets/packages/gold.jpg",
    ctaText: "Get Gold",
  },
  {
    id: "platinum",
    name: "Platinum",
    nameAr: "بلاتيني",
    tier: "platinum",
    features: [
      "Luxury finishing materials",
      "Full architectural & interior design",
      "3D walkthroughs",
      "Bi-weekly client meetings",
      "Daily on-site supervision",
      "Custom furniture sourcing",
      "3-year warranty",
    ],
    image: "/assets/packages/platinum.jpg",
    ctaText: "Get Platinum",
  },
  {
    id: "vip",
    name: "VIP",
    nameAr: "في آي بي",
    tier: "vip",
    badge: "Exclusive",
    features: [
      "Ultra-luxury materials worldwide",
      "Complete bespoke design system",
      "Full 3D cinematic rendering",
      "Dedicated project manager",
      "24/7 supervisor access",
      "Smart home integration",
      "Custom joinery & millwork",
      "5-year comprehensive warranty",
    ],
    image: "/assets/packages/vip.jpg",
    ctaText: "Request VIP",
  },
];

// ── Process Steps ────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    icon: "MapPin",
    titleEn: "Site Inspection",
    titleAr: "معاينة الموقع",
    descriptionEn: "Our engineering team visits your site to understand its potential and constraints.",
    descriptionAr: "يزور فريقنا الهندسي موقعك لفهم إمكاناته وقيوده.",
  },
  {
    number: "02",
    icon: "Ruler",
    titleEn: "Measurements",
    titleAr: "رفع المقاسات",
    descriptionEn: "Precise measurements of every dimension captured for accurate planning.",
    descriptionAr: "قياسات دقيقة لكل بُعد يتم التقاطها للتخطيط الدقيق.",
  },
  {
    number: "03",
    icon: "Pencil",
    titleEn: "Design Creation",
    titleAr: "إعداد التصميم",
    descriptionEn: "Bespoke design concepts crafted to reflect your vision and lifestyle.",
    descriptionAr: "مفاهيم تصميم مخصصة مصنوعة لتعكس رؤيتك وأسلوب حياتك.",
  },
  {
    number: "04",
    icon: "FileText",
    titleEn: "Financial Proposal",
    titleAr: "إعداد العرض المالي",
    descriptionEn: "Transparent, detailed financial proposal with full material and labor breakdown.",
    descriptionAr: "عرض مالي شفاف ومفصل مع تفاصيل كاملة للمواد والعمالة.",
  },
  {
    number: "05",
    icon: "PenLine",
    titleEn: "Contract Signing",
    titleAr: "توقيع العقد",
    descriptionEn: "Clear contract protecting all parties — milestone-based payment schedule.",
    descriptionAr: "عقد واضح يحمي جميع الأطراف — جدول دفع قائم على المراحل.",
  },
  {
    number: "06",
    icon: "Hammer",
    titleEn: "Execution Begins",
    titleAr: "بدء التنفيذ",
    descriptionEn: "Precision execution commences with daily supervision and quality control.",
    descriptionAr: "يبدأ التنفيذ الدقيق مع الإشراف اليومي ومراقبة الجودة.",
  },
  {
    number: "07",
    icon: "CheckSquare",
    titleEn: "Phase Handovers",
    titleAr: "استلام كل مرحلة",
    descriptionEn: "Each phase inspected and signed off before proceeding to the next.",
    descriptionAr: "يتم فحص كل مرحلة والموافقة عليها قبل الانتقال إلى التالية.",
  },
  {
    number: "08",
    icon: "Key",
    titleEn: "Final Delivery",
    titleAr: "التسليم النهائي",
    descriptionEn: "Your dream space delivered — immaculate, on schedule, and beyond expectations.",
    descriptionAr: "يُسلَّم مساحة أحلامك — نظيفة، في الموعد المحدد، وتتجاوز التوقعات.",
  },
];

// ── Testimonials ─────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Karim",
    role: "Residential Client — New Cairo",
    content:
      "Pixels Group transformed our apartment into something beyond what we imagined. The attention to detail, the quality of materials, and the professionalism of the team were absolutely exceptional. Every single corner was perfect.",
    rating: 5,
    projectType: "Residential Finishing",
  },
  {
    id: "2",
    name: "Sara Mohamed",
    role: "Commercial Client — 6th of October",
    content:
      "Our clinic was finished exactly on time and on budget — something I never expected. The team's transparency about costs and daily updates made the whole process stress-free. Highly recommended.",
    rating: 5,
    projectType: "Commercial Finishing",
  },
  {
    id: "3",
    name: "Omar Hussain",
    role: "Property Developer — Maadi",
    content:
      "We've worked with many finishing companies, but Pixels Group operates on a completely different level. Their engineering supervision is thorough, their materials are premium, and the results speak for themselves.",
    rating: 5,
    projectType: "Administrative Unit",
  },
  {
    id: "4",
    name: "Nour El-Din",
    role: "Residential Client — Heliopolis",
    content:
      "The Cost Plus system was a game-changer for us. Full transparency, no hidden costs, and we had complete control over material choices. The team managed everything flawlessly while we enjoyed total peace of mind.",
    rating: 5,
    projectType: "Villa Finishing (Cost Plus)",
  },
  {
    id: "5",
    name: "Layla Ibrahim",
    role: "Interior Design Client — Zamalek",
    content:
      "I came with a vague idea and they delivered a masterpiece. The 3D designs were stunning, but what impressed me most was how accurately they executed the design in real life. Pure excellence.",
    rating: 5,
    projectType: "Interior Design & Finishing",
  },
];

// ── Projects ─────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: "project-01",
    title: "Modern Luxury Apartment",
    location: "New Cairo",
    type: "Residential",
    area: "250 m²",
    year: "2024",
    coverImage: "/assets/projects/project-01/cover.jpg",
    images: [
      "/assets/projects/project-01/01.jpg",
      "/assets/projects/project-01/02.jpg",
      "/assets/projects/project-01/03.jpg",
      "/assets/projects/project-01/04.jpg",
    ],
    description:
      "A contemporary luxury apartment blending warm materials with clean architectural lines. Full turnkey finishing with custom joinery.",
    category: "residential",
  },
  {
    id: "project-02",
    title: "Executive Office Suite",
    location: "Downtown Cairo",
    type: "Administrative",
    area: "180 m²",
    year: "2024",
    coverImage: "/assets/projects/project-02/cover.jpg",
    images: [
      "/assets/projects/project-02/01.jpg",
      "/assets/projects/project-02/02.jpg",
      "/assets/projects/project-02/03.jpg",
      "/assets/projects/project-02/04.jpg",
    ],
    description:
      "A premium executive office suite designed to command confidence and authority. Open workspace with private executive zones.",
    category: "administrative",
  },
  {
    id: "project-03",
    title: "Boutique Medical Clinic",
    location: "Maadi, Cairo",
    type: "Commercial",
    area: "120 m²",
    year: "2023",
    coverImage: "/assets/projects/project-03/cover.jpg",
    images: [
      "/assets/projects/project-03/01.jpg",
      "/assets/projects/project-03/02.jpg",
      "/assets/projects/project-03/03.jpg",
      "/assets/projects/project-03/04.jpg",
    ],
    description:
      "A modern medical clinic balancing clinical precision with welcoming warmth. Fully compliant with medical facility standards.",
    category: "commercial",
  },
  {
    id: "project-04",
    title: "Penthouse Duplex",
    location: "Heliopolis",
    type: "Residential",
    area: "400 m²",
    year: "2023",
    coverImage: "/assets/projects/project-04/cover.jpg",
    images: [
      "/assets/projects/project-04/01.jpg",
      "/assets/projects/project-04/02.jpg",
      "/assets/projects/project-04/03.jpg",
      "/assets/projects/project-04/04.jpg",
    ],
    description:
      "A spectacular penthouse duplex featuring double-height ceilings, imported marble, and bespoke lighting design.",
    category: "residential",
  },
  {
    id: "project-05",
    title: "Premium Showroom",
    location: "6th of October",
    type: "Commercial",
    area: "300 m²",
    year: "2024",
    coverImage: "/assets/projects/project-05/cover.jpg",
    images: [
      "/assets/projects/project-05/01.jpg",
      "/assets/projects/project-05/02.jpg",
      "/assets/projects/project-05/03.jpg",
      "/assets/projects/project-05/04.jpg",
    ],
    description:
      "A high-end retail showroom designed to showcase luxury products with theatrical lighting and precision display systems.",
    category: "commercial",
  },
  {
    id: "project-06",
    title: "Family Villa",
    location: "Sheikh Zayed",
    type: "Residential",
    area: "650 m²",
    year: "2024",
    coverImage: "/assets/projects/project-06/cover.jpg",
    images: [
      "/assets/projects/project-06/01.jpg",
      "/assets/projects/project-06/02.jpg",
      "/assets/projects/project-06/03.jpg",
      "/assets/projects/project-06/04.jpg",
    ],
    description:
      "An elegant family villa with classical proportions and contemporary interiors. Custom millwork, smart home integration, and private landscaping.",
    category: "residential",
  },
];

// ── FAQ ───────────────────────────────────────────────────
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What areas do you operate in?",
    answer:
      "We operate across all of Greater Cairo and surrounding regions, including New Cairo, Heliopolis, Maadi, Zamalek, 6th of October, Sheikh Zayed, and beyond. Contact us to confirm your location.",
  },
  {
    question: "How long does a standard finishing project take?",
    answer:
      "Project duration depends on the unit size and scope. A typical apartment (150–250 m²) takes 6–10 weeks from execution start. We provide a precise timeline before contract signing and commit to it.",
  },
  {
    question: "What is the Cost Plus system?",
    answer:
      "In the Cost Plus model, you purchase materials directly in your name from our approved suppliers — ensuring you know exactly what you're paying for. We manage all execution, supervision, and quality control on your behalf. This provides maximum transparency and material ownership.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Yes. All our packages include a minimum 1-year warranty. Our Gold and Platinum packages include 2–3 year warranties, and our VIP package includes a comprehensive 5-year warranty covering materials and workmanship.",
  },
  {
    question: "Can I see 3D designs before execution starts?",
    answer:
      "Absolutely. Our Gold, Platinum, and VIP packages include 3D design visualization before any execution begins. This ensures you can fully review and approve your space before a single wall is touched.",
  },
  {
    question: "What is the payment structure?",
    answer:
      "We follow a milestone-based payment system linked to project progress phases. Payments are never taken in advance of work. You pay as each phase is completed and signed off — full transparency, no surprises.",
  },
  {
    question: "Do you work on commercial and administrative projects?",
    answer:
      "Yes. In addition to residential units, we specialize in commercial spaces (clinics, showrooms, restaurants), administrative offices, and corporate headquarters — all delivered to the same premium standard.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us via phone or WhatsApp. Our team will schedule a free site inspection within 48 hours, after which we'll prepare a detailed design proposal and financial offer tailored to your needs.",
  },
];

// ── Stats ─────────────────────────────────────────────────
export const STATS = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "7+", label: "Years Experience" },
  { number: "50+", label: "Team Members" },
];
