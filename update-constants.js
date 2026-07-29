const fs = require('fs');

const constantsPath = 'src/lib/constants.ts';
let content = fs.readFileSync(constantsPath, 'utf8');

const testimonialsCode = `export const TESTIMONIALS: Testimonial[] = [
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
];`;

const projectsCode = fs.readFileSync('generated-projects.txt', 'utf8');

const testimonialsStart = content.indexOf('export const TESTIMONIALS: Testimonial[] = [');
if (testimonialsStart !== -1) {
  content = content.substring(0, testimonialsStart);
  content += testimonialsCode + '\n\n// ── Projects ─────────────────────────────────────────────\n' + projectsCode + '\n';
  fs.writeFileSync(constantsPath, content);
  console.log('Successfully updated constants.ts');
} else {
  console.log('Could not find TESTIMONIALS in constants.ts');
}
