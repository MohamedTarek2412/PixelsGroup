// ============================================================
// PIXELS GROUP — Site Constants & Content Data
// All real data from official company brochures
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
  PaymentInstallment,
  GeneralNote,
  CostPlusTier,
  EstimationStep,
} from "@/types";

// ── Company Info ──────────────────────────────────────────
export const COMPANY_NAME = "Pixels Group";
export const COMPANY_NAME_AR = "بيكسلز جروب";
export const COMPANY_TAGLINE = "Engineering Tomorrow.";
export const COMPANY_TAGLINE_AR = "هندسة الغد";
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
    titleEn: "Executive Estimation",
    titleAr: "المقايسات التنفيذية",
    descriptionEn:
      "Precise, transparent cost estimation based on actual measurements — pay only for work actually executed.",
    descriptionAr:
      "مقايسة تفصيلية شفافة بناءً على رفع المقاسات الفعلية — تدفع فقط مقابل الأعمال المنفذة فعلياً.",
    features: ["Full transparency", "Detailed breakdown", "Actual quantities"],
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

// ── Packages (REAL DATA) ──────────────────────────────────
export const PACKAGES: Package[] = [
  {
    id: "silver",
    name: "Silver",
    nameAr: "سيلفر",
    tier: "silver",
    price: "4,200",
    priceNote: "جنيه للمتر",
    highlights: ["متابعة مستمرة", "التزام بالمواعيد", "ضمان على التنفيذ", "جودة عالية"],
    categories: [
      {
        category: "Electrical",
        categoryAr: "بند الكهرباء",
        items: [
          "سلك سويدي أصلي",
          "علبة ماجيك",
          "لوحة رئيسية 12 خط",
          "دائرة تليفون",
          "دائرة internet",
          "مفتاح ديفيتير للطرقة",
          "مفتاح وبريزة صنشاين",
          "إضاءة الريسيبشن والطرقة بالكامل ليد واسبوتات",
        ],
      },
      {
        category: "Plumbing & Waterproofing",
        categoryAr: "بند السباكة والعزل",
        items: [
          "مواسير تغذية BR مع الاختبار والضمان",
          "مواسير صرف كاسيل الألماني",
          "عزل الحمامات سيكا 107 كيماويات البناء الحديث",
          "تشطيب صحي (خلاطات وحوض وقاعدة) لا يتعدى 10,000 ج",
          "تأسيس صرف لوحدة تكييف",
          "هدية الباقة: طقم اكسسوارات للحمام",
        ],
      },
      {
        category: "Ceilings",
        categoryAr: "بند الأسقف",
        items: [
          "جبسمبورد بيت نور للريسيبشن والطرقة",
          "كرانيش جبسية أو فيوتيك لباقي الغرف",
          "كيماويت أو مصيص لباقي الغرف",
        ],
      },
      {
        category: "Flooring",
        categoryAr: "بند السيراميك",
        items: [
          "أرضيات الشقة بالكامل سيراميك كليوباترا لا يتعدى سعر المتر 200 ج",
          "تركيب وزرة من نفس نوع الأرضية",
        ],
      },
      {
        category: "Paint",
        categoryAr: "بند الدهانات",
        items: [
          "وش سيلر مائي",
          "عدد 3 سكينة معجون",
          "بطانة + تلقيطة",
          "وشين تشطيب GLC",
        ],
      },
      {
        category: "Aluminum",
        categoryAr: "بند الألومنيوم",
        items: [
          "الوميتال PS قطاع صغير شبابيك الحمامات والمطبخ",
        ],
      },
      {
        category: "Decorations",
        categoryAr: "بند الديكورات",
        items: [
          "جنب ورق حائط بمساحة 9 م²",
          "جنب ديكور دهانات حائط واحد",
        ],
      },
      {
        category: "Doors",
        categoryAr: "بند الأبواب",
        items: [
          "باب مصفح صيني لباب الشقة",
          "الأبواب الداخلية صيني مستورد",
        ],
      },
    ],
    image: "/assets/packages/silver.jpg",
    ctaText: "احجز باقة Silver",
  },
  {
    id: "gold",
    name: "Gold",
    nameAr: "جولد",
    tier: "gold",
    isPopular: true,
    badge: "الأكثر طلباً",
    price: "5,250",
    priceNote: "جنيه للمتر",
    highlights: ["متابعة مستمرة", "التزام بالمواعيد", "ضمان على التنفيذ", "جودة عالية"],
    categories: [
      {
        category: "Electrical",
        categoryAr: "بند الكهرباء",
        items: [
          "سلك سويدي أصلي",
          "علب ماجيك",
          "لوحة رئيسية 18 خط",
          "شاسيه ووش فينوس",
          "خراطيم مصطفى محمود",
          "دائرة ستالايت (إنترنت + تليفزيون) للريسيبشن وغرفة النوم الماستر",
          "ديفيتير للطرقة وغرفة نوم ماستر",
          "تأسيس تكييف للريسيبشن وغرفة نوم ماستر",
          "ليد واسبوتات 3 حركة الشقة كاملة",
        ],
      },
      {
        category: "Plumbing & Waterproofing",
        categoryAr: "بند السباكة والعزل",
        items: [
          "صرف كاسيل ألماني ضمان 10 سنوات",
          "تركيب BR ضمان 10 سنوات",
          "عزل ممبريل للحمامات",
          "قطاع زجاج ثابت للشاور",
          "أطقم صحي وأكسسوارات لا تتعدى 16 ألف من أي نوع يختاره العميل",
          "هدية الباقة: طقم اكسسوارات حمام + مرآة ليد",
        ],
      },
      {
        category: "Ceilings",
        categoryAr: "بند الأسقف",
        items: [
          "جبسمبورد إجمالي مساحة الشقة بالمتر الطولي",
          "كناوف أبيض للريسيبشن والغرف",
          "كناوف أحمر للمطبخ (مقاومة الحرارة)",
          "كناوف أخضر للحمامات (مقاومة الرطوبة)",
          "جبس بلدي بنفس تصميم الجبسمبورد",
          "باقي أسقف الشقة مصيص أو كيماويت",
        ],
      },
      {
        category: "Flooring",
        categoryAr: "بند الأرضيات",
        items: [
          "سيراميك 60x60 للريسيبشن والغرف والطرقة والحمامات لا يتعدى سعر المتر 280 ج",
          "عمل معايرة استانلس عند الأبواب",
        ],
      },
      {
        category: "Paint",
        categoryAr: "بند الدهانات",
        items: [
          "وش سيلر مائي",
          "3 سكينة معجون دايتون",
          "وش بطانة + تلقيطة",
          "2 وش دهانات نهائي GLC",
        ],
      },
      {
        category: "Doors",
        categoryAr: "بند الأبواب",
        items: [
          "باب رئيسي مصفح تركي",
          "الأبواب الداخلية خشب مستورد صيني",
        ],
      },
      {
        category: "Aluminum",
        categoryAr: "بند الألوميتال",
        items: [
          "شبابيك المطبخ + شبابيك الحمام PS صغير",
          "زجاج مصنفر للشبابيك",
        ],
      },
      {
        category: "Decorations",
        categoryAr: "بند الديكورات",
        items: [
          "جنب ديكور شيبورد لا يتعدى 9 م²",
          "25 م.ط فيوتيك",
        ],
      },
    ],
    image: "/assets/packages/gold.jpg",
    ctaText: "احجز باقة Gold",
  },
  {
    id: "platinum",
    name: "Platinum",
    nameAr: "بلاتينيوم",
    tier: "platinum",
    badge: "جودة استثنائية",
    price: "7,000",
    priceNote: "جنيه للمتر",
    highlights: ["متابعة مستمرة", "التزام بالمواعيد", "ضمان على التنفيذ", "جودة عالية"],
    categories: [
      {
        category: "Plumbing & Waterproofing",
        categoryAr: "بند السباكة والعزل",
        items: [
          "مواسير صرف كاسيل ألماني",
          "مواسير التغذية BR معزول أو أكواتيرم",
          "عزل ممبريل + عزل سيكا 107 كيماويات البناء الحديث",
          "صندوق دفن جروهي",
          "خلاط دفن للشاور",
          "كابينة شاور زجاج مفصلي أو جرار",
          "تشطيب صحي جروهي أو ايديال ستاندرد (خلاطات وأكسسوارات وأحواض وقواعد) لا يتعدى 25 ألف",
          "هدية الباقة: مرآة حمام + وحدة حوض HPL",
        ],
      },
      {
        category: "Flooring",
        categoryAr: "بند الأرضيات",
        items: [
          "بورسلين 60×120 للريسيبشن والطرقة والحمامات لا يتعدى سعر المتر 500 ج",
          "أرضيات الغرف سيراميك كليوباترا 60x60 قطع ليزر وسيراميك باركيه",
          "المطابخ سيراميك كليوباترا لا يتعدى سعر المتر 300 ج",
          "ديكورات أرفف وخرنقات للحمامات",
          "المعايير للغرف جرانيت أسود أسواني",
          "عتب باب الشقة امبرادور إسباني",
        ],
      },
      {
        category: "Ceilings",
        categoryAr: "بند الأسقف",
        items: [
          "فلات للريسيبشن والطرقة وغرفة نوم الماستر والحمامات والمطابخ",
          "بيت نور لباقي الغرف + ديكورات جبسية",
        ],
      },
      {
        category: "Doors",
        categoryAr: "بند الأبواب",
        items: [
          "باب مصفح تركي",
          "الأبواب الداخلية جاهزة تركي",
        ],
      },
      {
        category: "Aluminum",
        categoryAr: "بند الألوميتال",
        items: [
          "تركيب أبواب وشبابيك قطاع PS صغير للحمامات والمطبخ + باب بلكونة",
          "زجاج مصنفر للشبابيك الداخلية",
          "زجاج عاكس للواجهات",
        ],
      },
      {
        category: "Paint",
        categoryAr: "بند الدهانات",
        items: [
          "وش سيلر مقاوم للرطوبة",
          "4 سكينة معجون",
          "وش بطانة + وش تلقيط",
          "2 وش تشطيب نهائي من خامة جوتن",
        ],
      },
      {
        category: "Sound System",
        categoryAr: "ساوند سيستم",
        items: [
          "تأسيس ساوند سيستم للريسيبشن",
        ],
      },
      {
        category: "AC",
        categoryAr: "التكييفات",
        items: [
          "تأسيس مواسير فريون جنوب أفريقي بحد أقصى 20 م.ط",
          "تأسيس صرف التكييفات",
          "تأسيس الكهرباء",
        ],
      },
      {
        category: "Electrical",
        categoryAr: "بند الكهرباء",
        items: [
          "سلك سويدي أصلي",
          "علب ماجيك",
          "خراطيم مصطفى محمود",
          "لوحة كهرباء 24 خط",
          "لوحة خدمات للتيار الخفيف",
          "مفاتيح وبرايز فيديمينو",
          "ليد واسبوتات 3 حركة",
          "9 م ليد بروفايل",
          "2 أبليك",
          "6 م ماجيك تراك",
          "ديفيتير للريسيبشن والطرقة والغرفة الماستر",
        ],
      },
      {
        category: "Decorations",
        categoryAr: "بند الديكورات",
        items: [
          "تجاليد شيبورد لا يتعدى 22 م²",
          "20 م.ط ديكورات جبسية استغلال المساحات شامل الإضاءة",
          "40 م.ط فيوتيك",
        ],
      },
    ],
    image: "/assets/packages/platinum.jpg",
    ctaText: "احجز باقة Platinum",
  },
  {
    id: "vip",
    name: "VIP",
    nameAr: "في آي بي",
    tier: "vip",
    badge: "Exclusive",
    price: "9,500",
    priceNote: "جنيه للمتر",
    highlights: ["متابعة مستمرة", "التزام بالمواعيد", "ضمان على التنفيذ", "جودة عالية"],
    categories: [
      {
        category: "Ceilings",
        categoryAr: "بند الأسقف",
        items: [
          "جبسمبورد فلات أبيض للريسيبشن وجميع الغرف من نوع كناوف",
          "جبسمبورد أخضر للحمامات مقاوم للرطوبة",
          "جبسمبورد أحمر للمطبخ مقاوم للحرارة",
        ],
      },
      {
        category: "Electrical",
        categoryAr: "بند الكهرباء",
        items: [
          "سلك سويدي أصلي",
          "مواسير مصطفى محمود",
          "لوحة كهرباء 24 خط",
          "شاسيه ووش شنايدر أو مينوس",
          "علب ماجيك",
          "مفتاح ديفيتير لجميع الغرف",
          "كشافات طوارئ لجميع الغرف",
          "20 م ليد بروفايل",
          "15 م ماجنتك تراك",
          "4 أبليك",
          "شفاطات للحمامات والمطابخ",
          "ليد واسبوتات 3 حركة للشقة بالكامل",
          "دائرة تليفون",
          "دائرة ستالايت",
          "دائرة إنترنت",
        ],
      },
      {
        category: "Plumbing & Waterproofing",
        categoryAr: "بند السباكة والعزل",
        items: [
          "عزل ممبريل",
          "عزل سيكا 107 كيماويات البناء الحديث",
          "مواسير صرف كاسيل الألماني",
          "مواسير تغذية BR أو أكواتيرم",
          "تأسيس 2 صندوق دفن جروهي",
          "تأسيس شاور دفن",
          "تأسيس وحدة شاور شامل السيكوريت",
          "تشطيب الصحي بالكامل (ايديال ستاندرد أو ديورافيت أو جروهي) — خلاطات وأحواض واكسسوارات وقواعد لا تتعدى 50,000 ج",
          "هدية الباقة: وحدة حوض للحمامات + مرآة ليد",
        ],
      },
      {
        category: "Flooring",
        categoryAr: "بند الأرضيات",
        items: [
          "بورسلين هندي 60×120 للريسيبشن والطرقة والحمامات لا يتعدى سعر المتر 550 ج",
          "أرضيات سيراميك 60×60 فرز أول قطع ليزر لجميع الغرف والمطبخ أو أرضيات HDF بحسب اختيار العميل",
          "أرضية كابينة الشاور رخام",
          "المعايير رخام مستورد امبرادور غامق أو جرانيت أسود جلاكسي",
          "عمل ديكورات للحمامات — أرفف وخرنقات",
        ],
      },
      {
        category: "Paint",
        categoryAr: "بند الدهانات",
        items: [
          "وش سيلر مقاوم للرطوبة",
          "4 سكينة معجون",
          "وش بطانة + تلقيطة",
          "3 وش دهانات قابلة للغسيل — جوتن أو الجزيرة",
        ],
      },
      {
        category: "Aluminum",
        categoryAr: "بند الألوميتال",
        items: [
          "قطاع PVC تركي أو الوميتال PS كبير — شبابيك المطابخ والحمامات + باب البلكونة",
          "زجاج عاكس",
        ],
      },
      {
        category: "Decorations",
        categoryAr: "بند الديكورات",
        items: [
          "تجاليد شيبورد — المساحة 25 م²",
          "تركيب 50 م.ط فيوتيك",
          "ديكورات جبسية لاستغلال المساحات 20 م.ط",
        ],
      },
      {
        category: "Doors",
        categoryAr: "بند الأبواب",
        items: [
          "باب مصفح تركي للباب الرئيسي شامل Smart Lock لا يتعدى سعره 10,000 ج",
          "الأبواب الداخلية جاهزة تركي أو عمولة أو WPC",
        ],
      },
      {
        category: "Sound System",
        categoryAr: "ساوند سيستم",
        items: [
          "ساوند سيستم للشقة بالكامل",
        ],
      },
      {
        category: "AC",
        categoryAr: "التكييفات",
        items: [
          "تأسيس مواسير فريون جنوب أفريقي للشقة بالكامل بحد أقصى 25 م.ط",
          "تأسيس مواسير الصرف بالكامل",
          "تأسيس الكهرباء",
        ],
      },
    ],
    image: "/assets/packages/vip.jpg",
    ctaText: "احجز باقة VIP",
  },
];

// ── Payment System (آلية السداد) ──────────────────────────
export const PAYMENT_INSTALLMENTS: PaymentInstallment[] = [
  {
    number: "01",
    percentage: "50%",
    label: "First Installment",
    labelAr: "الدفعة الأولى",
    items: [
      "معاينة",
      "تصميم",
      "تأسيس سباكة",
      "تأسيس كهرباء",
    ],
  },
  {
    number: "02",
    percentage: "30%",
    label: "Second Installment",
    labelAr: "الدفعة الثانية",
    items: [
      "أسقف",
      "أرضيات",
    ],
  },
  {
    number: "03",
    percentage: "20%",
    label: "Third Installment",
    labelAr: "الدفعة الثالثة",
    items: [
      "تشطيب نهائي دهانات",
      "ديكورات",
      "تشطيب صحي وكهرباء",
    ],
  },
];

// ── General Notes & Terms (ملاحظات وشروط عامة) ───────────
export const GENERAL_NOTES: GeneralNote[] = [
  {
    textAr: "يتم إضافة 400 جنيه/م² في حالة التعاقد داخل الكومباوند.",
    textEn: "+400 EGP/m² for projects inside compounds.",
  },
  {
    textAr: "يتم إضافة 400 جنيه/م² في حالة إضافة بند المحارة.",
    textEn: "+400 EGP/m² for plastering (محارة) work.",
  },
  {
    textAr: "يتم إضافة 200 جنيه/م² في حالة التعديلات المعمارية.",
    textEn: "+200 EGP/m² for architectural modifications.",
  },
  {
    textAr: "يتم إضافة 200 جنيه/م² في حالة أعمال الهدم.",
    textEn: "+200 EGP/m² for demolition works.",
  },
];

// ── Cost Plus System ──────────────────────────────────────
export const COST_PLUS_TIERS: CostPlusTier[] = [
  {
    range: "Less than 1,000,000 EGP",
    rangeAr: "أقل من 1,000,000 جنيه",
    percentage: "20%",
  },
  {
    range: "1,000,000 — 2,000,000 EGP",
    rangeAr: "من 1,000,000 إلى 2,000,000 جنيه",
    percentage: "15%",
  },
  {
    range: "More than 2,000,000 EGP",
    rangeAr: "أكثر من 2,000,000 جنيه",
    percentage: "12%",
  },
];

export const COST_PLUS_INCLUDES = [
  "شراء الخامات باسم العميل",
  "مراجعة واعتماد جميع الخامات قبل التنفيذ",
  "إدارة ومتابعة جميع بنود التشطيب",
  "الإشراف على جودة التنفيذ والاستلام",
  "تقديم تقارير دورية عن سير الأعمال",
];

export const COST_PLUS_GIFTS = [
  "تصميم معماري 2D مجاني مع مقترح الفرش",
  "مقترح توزيع وفرش الأثاث مجاني",
  "مقايسة مجانية",
  "معاينة مجانية",
];

export const COST_PLUS_NO_CONTRACT_FEE = "5,000 جنيه";

// ── Executive Estimation System (نظام المقايسة) ───────────
export const ESTIMATION_STEPS: EstimationStep[] = [
  {
    number: "01",
    titleAr: "المعاينة ورفع المقاسات",
    titleEn: "Inspection & Measurements",
    items: [
      "معاينة الموقع",
      "رفع جميع المقاسات",
      "مناقشة احتياجات العميل",
      "تحديد مستوى التشطيب",
    ],
  },
  {
    number: "02",
    titleAr: "إعداد المقايسة",
    titleEn: "Estimation Preparation",
    items: [
      "حصر جميع البنود",
      "تحديد وحدة القياس لكل بند (م² - م - م.ط - عدد - مقطوعية)",
      "تحديد سعر الوحدة لكل بند",
      "إرسال المقايسة التفصيلية للعميل للمراجعة والاعتماد",
    ],
  },
  {
    number: "03",
    titleAr: "بدء التنفيذ",
    titleEn: "Start Execution",
    items: [
      "يبدأ التنفيذ بعد اعتماد المقايسة",
      "يتم تنفيذ الأعمال وفق البنود والأسعار المعتمدة",
    ],
  },
  {
    number: "04",
    titleAr: "المحاسبة",
    titleEn: "Accounting",
    items: [
      "تتم المحاسبة على الكميات المنفذة فعلياً",
      "يتم احتساب قيمة كل بند وفق سعر الوحدة الوارد بالمقايسة",
      "لا يتم احتساب أي بند غير منفذ",
    ],
  },
];

export const ESTIMATION_ADVANTAGES = [
  "شفافية كاملة في التسعير",
  "مرونة في اختيار البنود والخامات",
  "مناسب للشقق التي تختلف كمياتها أو تصميمها",
  "سهولة إضافة أو حذف أي بند مع اعتماده قبل التنفيذ",
  "تدفع مقابل التنفيذ الفعلي فقط",
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
    name: "أحمد كريم",
    role: "عميل سكني — القاهرة الجديدة",
    content: "الاهتمام بالتفاصيل كان استثنائياً. لقد حولوا فيلتنا إلى تحفة فنية مع الالتزام التام بالجدول الزمني. نظام Cost Plus وفر لنا شفافية تامة في كل خطوة.",
    rating: 5,
    projectType: "تشطيب سكني"
  },
  {
    id: "2",
    name: "سارة محمود",
    role: "عميل تجاري — السادس من أكتوبر",
    content: "تم الانتهاء من عيادتنا في الوقت المحدد بالضبط وفي حدود الميزانية - وهو أمر لم أتوقعه أبدًا. الشفافية حول التكاليف والتحديثات اليومية جعلت العملية بأكملها خالية من التوتر.",
    rating: 5,
    projectType: "تشطيب تجاري"
  },
  {
    id: "3",
    name: "عمر حسين",
    role: "مطور عقاري — المعادي",
    content: "لقد عملنا مع العديد من شركات التشطيب، لكن بيكسلز جروب تعمل بمستوى مختلف تمامًا. إشرافهم الهندسي شامل وموادهم فاخرة والنتائج تتحدث عن نفسها.",
    rating: 5,
    projectType: "وحدة إدارية"
  },
  {
    id: "4",
    name: "نور الدين",
    role: "عميل سكني — مصر الجديدة",
    content: "كان نظام Cost Plus بمثابة تغيير جذري بالنسبة لنا. شفافية كاملة، لا تكاليف خفية، وكان لدينا سيطرة كاملة على خيارات المواد. الفريق أدار كل شيء بلا عيب.",
    rating: 5,
    projectType: "تشطيب فيلا (Cost Plus)"
  },
  {
    id: "5",
    name: "ليلى إبراهيم",
    role: "عميل تصميم داخلي — الزمالك",
    content: "جئت بفكرة غامضة وسلموا لي تحفة فنية. كانت التصاميم ثلاثية الأبعاد مذهلة، ولكن أكثر ما أثار إعجابي هو مدى دقة تنفيذهم للتصميم في الواقع.",
    rating: 5,
    projectType: "تصميم داخلي وتشطيب"
  }
];

// ── Projects ─────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    "id": "project-1",
    "title": "اعمال السباكه في شقه المهندس رامز الفايد التجمع الخامس الاندلس",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/اعمال السباكه في شقه المهندس رامز الفايد التجمع الخامس الاندلس/WhatsApp Image 2026-07-25 at 12.35.18 PM.jpeg",
      "/assets/projects/اعمال السباكه في شقه المهندس رامز الفايد التجمع الخامس الاندلس/WhatsApp Image 2026-07-25 at 12.35.19 PM.jpeg",
      "/assets/projects/اعمال السباكه في شقه المهندس رامز الفايد التجمع الخامس الاندلس/WhatsApp Image 2026-07-25 at 12.35.20 PM.jpeg",
      "/assets/projects/اعمال السباكه في شقه المهندس رامز الفايد التجمع الخامس الاندلس/WhatsApp Image 2026-07-25 at 12.35.21 PM.jpeg"
    ]
  },
  {
    "id": "project-2",
    "title": "اعمال السيراميك مول التجمع الاول بالتعاون مع شركة Cse",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/اعمال السيراميك مول التجمع الاول بالتعاون مع شركة Cse/WhatsApp Image 2026-07-25 at 12.35.56 PM (1).jpeg",
      "/assets/projects/اعمال السيراميك مول التجمع الاول بالتعاون مع شركة Cse/WhatsApp Image 2026-07-25 at 12.35.56 PM.jpeg",
      "/assets/projects/اعمال السيراميك مول التجمع الاول بالتعاون مع شركة Cse/WhatsApp Image 2026-07-25 at 12.35.58 PM (1).jpeg",
      "/assets/projects/اعمال السيراميك مول التجمع الاول بالتعاون مع شركة Cse/WhatsApp Image 2026-07-25 at 12.35.58 PM.jpeg"
    ]
  },
  {
    "id": "project-3",
    "title": "رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.41 PM (1).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.41 PM (2).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.41 PM.jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.42 PM (1).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.42 PM (2).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.42 PM.jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.43 PM (1).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.43 PM (2).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.43 PM (3).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.43 PM.jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.44 PM (1).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.44 PM (2).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.44 PM (3).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.44 PM.jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.45 PM (1).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.45 PM.jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.46 PM (1).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.46 PM (2).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.46 PM.jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.47 PM (1).jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.47 PM.jpeg",
      "/assets/projects/رفع كفاءة فندق راديسون بلو الشيراتون بالتعاون مع شركة الشمس/WhatsApp Image 2026-07-25 at 12.43.48 PM.jpeg"
    ]
  },
  {
    "id": "project-4",
    "title": "سنترال محطة مصر اسكندريه بالتعاون مع شركه اوميجا",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/سنترال محطة مصر اسكندريه بالتعاون مع شركه اوميجا/WhatsApp Image 2026-07-25 at 12.35.48 PM.jpeg",
      "/assets/projects/سنترال محطة مصر اسكندريه بالتعاون مع شركه اوميجا/WhatsApp Image 2026-07-25 at 12.35.49 PM (1).jpeg",
      "/assets/projects/سنترال محطة مصر اسكندريه بالتعاون مع شركه اوميجا/WhatsApp Image 2026-07-25 at 12.35.49 PM.jpeg",
      "/assets/projects/سنترال محطة مصر اسكندريه بالتعاون مع شركه اوميجا/WhatsApp Image 2026-07-25 at 12.35.50 PM.jpeg"
    ]
  },
  {
    "id": "project-5",
    "title": "شقة العاشر من رمضان الشرقيه",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/شقة العاشر من رمضان الشرقيه/WhatsApp Image 2026-07-25 at 12.43.12 PM (1).jpeg",
      "/assets/projects/شقة العاشر من رمضان الشرقيه/WhatsApp Image 2026-07-25 at 12.43.12 PM.jpeg",
      "/assets/projects/شقة العاشر من رمضان الشرقيه/WhatsApp Image 2026-07-25 at 12.43.13 PM (1).jpeg",
      "/assets/projects/شقة العاشر من رمضان الشرقيه/WhatsApp Image 2026-07-25 at 12.43.13 PM (2).jpeg",
      "/assets/projects/شقة العاشر من رمضان الشرقيه/WhatsApp Image 2026-07-25 at 12.43.13 PM.jpeg",
      "/assets/projects/شقة العاشر من رمضان الشرقيه/WhatsApp Image 2026-07-25 at 12.43.14 PM.jpeg"
    ]
  },
  {
    "id": "project-6",
    "title": "شقه حدائق الاهرام حورس",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/شقه حدائق الاهرام حورس/WhatsApp Image 2026-07-25 at 12.35.37 PM.jpeg",
      "/assets/projects/شقه حدائق الاهرام حورس/WhatsApp Image 2026-07-25 at 12.35.38 PM.jpeg",
      "/assets/projects/شقه حدائق الاهرام حورس/WhatsApp Image 2026-07-25 at 12.35.39 PM.jpeg",
      "/assets/projects/شقه حدائق الاهرام حورس/WhatsApp Image 2026-07-25 at 12.35.42 PM.jpeg"
    ]
  },
  {
    "id": "project-7",
    "title": "عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.28 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.29 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.29 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.29 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.30 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.30 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.30 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.31 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.31 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.31 PM (3).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.31 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.32 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.32 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.32 PM (3).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.32 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.33 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.33 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.33 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.34 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.34 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.34 PM (3).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.34 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.35 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.35 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.35 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.36 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.36 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.36 PM (3).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.36 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.37 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.37 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.37 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.38 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.38 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.38 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.39 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.39 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.40 PM (1).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.40 PM (2).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.40 PM (3).jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.40 PM.jpeg",
      "/assets/projects/عماره م احمد نبوت بيت الوطن التجمع الخامس شركة اونكريت/WhatsApp Image 2026-07-25 at 12.43.41 PM.jpeg"
    ]
  },
  {
    "id": "project-8",
    "title": "فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.43 PM.jpeg",
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.44 PM (1).jpeg",
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.44 PM.jpeg",
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.45 PM (1).jpeg",
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.45 PM.jpeg",
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.46 PM.jpeg",
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.47 PM (1).jpeg",
      "/assets/projects/فيلا الحاج خالد حمزه بالتعاون مع شركة فالي اوف ارت التجمع الخامس التسعين/WhatsApp Image 2026-07-25 at 12.35.47 PM.jpeg"
    ]
  },
  {
    "id": "project-9",
    "title": "فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.22 PM (1).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.22 PM.jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.23 PM (1).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.23 PM (2).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.23 PM.jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.24 PM (1).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.24 PM (2).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.24 PM (3).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.24 PM.jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.25 PM (1).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.25 PM (2).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.25 PM (3).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.25 PM.jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.26 PM (1).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.26 PM (2).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.26 PM (3).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.26 PM.jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.27 PM (1).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.27 PM (2).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.27 PM (3).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.27 PM.jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.28 PM (1).jpeg",
      "/assets/projects/فيلا الشروق كمبوند ماي فير بالتعاون مع شركة اركونست/WhatsApp Image 2026-07-25 at 12.43.28 PM.jpeg"
    ]
  },
  {
    "id": "project-10",
    "title": "قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.48 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.48 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.49 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.49 PM (2).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.49 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.50 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.50 PM (2).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.50 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.51 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.51 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.52 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.52 PM (2).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.52 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.53 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.53 PM (2).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.53 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.54 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.54 PM (2).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.54 PM (3).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.54 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.55 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.55 PM (2).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.55 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.56 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.56 PM (2).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.56 PM.jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.57 PM (1).jpeg",
      "/assets/projects/قصر التجمع الخامس رفع كفاءة النرجس 2 بالتعاون مع شركة سامكو هولدينج/WhatsApp Image 2026-07-25 at 12.43.57 PM.jpeg"
    ]
  },
  {
    "id": "project-11",
    "title": "مجموعه فلل التجمع بالتعاون مع شركة Vally of art",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/مجموعه فلل التجمع بالتعاون مع شركة Vally of art/WhatsApp Image 2026-07-25 at 12.43.14 PM.jpeg",
      "/assets/projects/مجموعه فلل التجمع بالتعاون مع شركة Vally of art/WhatsApp Image 2026-07-25 at 12.43.15 PM (1).jpeg",
      "/assets/projects/مجموعه فلل التجمع بالتعاون مع شركة Vally of art/WhatsApp Image 2026-07-25 at 12.43.15 PM (2).jpeg",
      "/assets/projects/مجموعه فلل التجمع بالتعاون مع شركة Vally of art/WhatsApp Image 2026-07-25 at 12.43.15 PM.jpeg",
      "/assets/projects/مجموعه فلل التجمع بالتعاون مع شركة Vally of art/WhatsApp Image 2026-07-25 at 12.43.16 PM (1).jpeg",
      "/assets/projects/مجموعه فلل التجمع بالتعاون مع شركة Vally of art/WhatsApp Image 2026-07-25 at 12.43.16 PM (2).jpeg",
      "/assets/projects/مجموعه فلل التجمع بالتعاون مع شركة Vally of art/WhatsApp Image 2026-07-25 at 12.43.16 PM.jpeg"
    ]
  },
  {
    "id": "project-12",
    "title": "مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.35.59 PM (1).jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.35.59 PM.jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.36.00 PM.jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.36.01 PM (1).jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.36.01 PM.jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.43.08 PM.jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.43.09 PM (1).jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.43.09 PM.jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.43.10 PM.jpeg",
      "/assets/projects/مداخل زهراء مدينة نصر بالتعاون مع شركة اونكريت مشروع جاردينيا 2/WhatsApp Image 2026-07-25 at 12.43.11 PM.jpeg"
    ]
  },
  {
    "id": "project-13",
    "title": "مدخل استانلى اسكندريه",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.50 PM.jpeg",
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.51 PM (1).jpeg",
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.51 PM.jpeg",
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.52 PM (1).jpeg",
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.52 PM.jpeg",
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.53 PM (1).jpeg",
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.53 PM.jpeg",
      "/assets/projects/مدخل استانلى اسكندريه/WhatsApp Image 2026-07-25 at 12.35.54 PM.jpeg"
    ]
  },
  {
    "id": "project-14",
    "title": "موقع ابراج الزهراء",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/موقع ابراج الزهراء/WhatsApp Image 2026-07-25 at 12.35.22 PM.jpeg",
      "/assets/projects/موقع ابراج الزهراء/WhatsApp Image 2026-07-25 at 12.35.24 PM (1).jpeg",
      "/assets/projects/موقع ابراج الزهراء/WhatsApp Image 2026-07-25 at 12.35.24 PM.jpeg",
      "/assets/projects/موقع ابراج الزهراء/WhatsApp Image 2026-07-25 at 12.35.25 PM.jpeg",
      "/assets/projects/موقع ابراج الزهراء/WhatsApp Image 2026-07-25 at 12.35.26 PM.jpeg"
    ]
  },
  {
    "id": "project-15",
    "title": "موقع الحى السكنى R5بالتعاون مع شركة مراسم",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/موقع الحى السكنى R5بالتعاون مع شركة مراسم/WhatsApp Image 2026-07-25 at 12.35.54 PM.jpeg",
      "/assets/projects/موقع الحى السكنى R5بالتعاون مع شركة مراسم/WhatsApp Image 2026-07-25 at 12.35.55 PM.jpeg"
    ]
  },
  {
    "id": "project-16",
    "title": "موقع اويست مع شركة البحر الاحمر",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.17 PM (1).jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.17 PM (2).jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.17 PM.jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.18 PM (1).jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.18 PM (2).jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.18 PM (3).jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.18 PM.jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.19 PM (1).jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.19 PM (2).jpeg",
      "/assets/projects/موقع اويست مع شركة البحر الاحمر/WhatsApp Image 2026-07-25 at 12.43.19 PM.jpeg"
    ]
  },
  {
    "id": "project-17",
    "title": "موقع هايد بارك",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.17 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.17 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.17 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.18 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.18 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.18 PM (3).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.18 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.19 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.19 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.19 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.22 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.22 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.23 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.23 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.23 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.24 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.24 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.24 PM (3).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.24 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.25 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.25 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.25 PM (3).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.25 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.26 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.26 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.26 PM (3).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.26 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.27 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.27 PM (2).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.27 PM (3).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.27 PM.jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.28 PM (1).jpeg",
      "/assets/projects/موقع هايد بارك/WhatsApp Image 2026-07-25 at 12.43.28 PM.jpeg"
    ]
  },
  {
    "id": "project-18",
    "title": "واجهه بازار مينا للبرديات الهرم",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/واجهه بازار مينا للبرديات الهرم/WhatsApp Image 2026-07-25 at 12.35.32 PM.jpeg",
      "/assets/projects/واجهه بازار مينا للبرديات الهرم/WhatsApp Image 2026-07-25 at 12.35.33 PM (1).jpeg",
      "/assets/projects/واجهه بازار مينا للبرديات الهرم/WhatsApp Image 2026-07-25 at 12.35.33 PM.jpeg",
      "/assets/projects/واجهه بازار مينا للبرديات الهرم/WhatsApp Image 2026-07-25 at 12.35.34 PM.jpeg"
    ]
  },
  {
    "id": "project-19",
    "title": "ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ",
    "location": "",
    "type": "تشطيبات وتصميم",
    "area": "",
    "images": [
      "/assets/projects/ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ/WhatsApp Image 2026-07-25 at 12.35.27 PM (1).jpeg",
      "/assets/projects/ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ/WhatsApp Image 2026-07-25 at 12.35.27 PM.jpeg",
      "/assets/projects/ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ/WhatsApp Image 2026-07-25 at 12.35.28 PM.jpeg",
      "/assets/projects/ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ/WhatsApp Image 2026-07-25 at 12.35.29 PM (1).jpeg",
      "/assets/projects/ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ/WhatsApp Image 2026-07-25 at 12.35.29 PM.jpeg",
      "/assets/projects/ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ/WhatsApp Image 2026-07-25 at 12.35.30 PM.jpeg",
      "/assets/projects/ودا تصميم مدخل جاردينيا 2 زهراء مدينه نصر بالتعاون مع شركة اونكريت باعتلك صور التنفيذ/WhatsApp Image 2026-07-25 at 12.35.31 PM.jpeg"
    ]
  }
];

// ── FAQ ───────────────────────────────────────────────────
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "ما هي مدة تنفيذ مشروع التشطيب؟",
    answer: "تختلف المدة حسب مساحة وتفاصيل المشروع، ولكن في المتوسط تتراوح بين 3 إلى 6 أشهر، مع التزامنا التام بالجدول الزمني المتفق عليه."
  },
  {
    question: "هل تقدمون خدمات التصميم فقط؟",
    answer: "نعم، نقدم خدمات التصميم الداخلي والمعماري بشكل منفصل، ولكننا نوصي بتنفيذ التصميم من خلال فريقنا لضمان تطابق النتيجة النهائية مع التصميم."
  },
  {
    question: "ما هو نظام الكوست بلس (Cost Plus)؟",
    answer: "هو نظام شفاف حيث يقوم العميل بدفع التكلفة الفعلية للمواد والعمالة، مع إضافة نسبة مئوية متفق عليها كأتعاب إدارة وإشراف لشركتنا."
  },
  {
    question: "هل تقدمون ضماناً على الأعمال المنفذة؟",
    answer: "نعم، نقدم ضماناً كاملاً على جميع أعمال التشطيبات والتأسيس، لضمان راحة بال عملائنا وجودة العمل على المدى الطويل."
  }
];


export const STATS = [
  { number: "150+", label: "مشروع تم تسليمه" },
  { number: "98%", label: "رضا العملاء" },
  { number: "7+", label: "سنوات خبرة" },
  { number: "50+", label: "فريق العمل" },
];
