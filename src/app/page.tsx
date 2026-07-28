// ============================================================
// Homepage — Assembles all sections
// ============================================================

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Packages } from "@/components/sections/Packages";
import { CostPlus } from "@/components/sections/CostPlus";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero />

      {/* 2 — About */}
      <About />

      {/* 3 — Services */}
      <Services />

      {/* 4 — Why Choose Us */}
      <WhyUs />

      {/* 5 — Packages */}
      <Packages />

      {/* 6 — Cost Plus */}
      <CostPlus />

      {/* 7 — Execution Process */}
      <Process />

      {/* 8 — Projects */}
      <Projects />

      {/* 9 — Testimonials */}
      <Testimonials />

      {/* 10 — FAQ */}
      <FAQ />

      {/* 11 — Contact */}
      <Contact />
    </>
  );
}
