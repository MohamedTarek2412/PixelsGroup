"use client";

// ============================================================
// Projects Section — Gallery of projects with lightbox
// ============================================================

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import type { Project } from "@/types";

export function Projects() {
  const [lightbox, setLightbox] = useState<{
    project: Project;
    imageIndex: number;
  } | null>(null);

  const openLightbox = (project: Project, imageIndex = 0) => {
    setLightbox({ project, imageIndex });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    if (!lightbox) return;
    const images = lightbox.project.images;
    if (!images || images.length === 0) return;
    const prev = (lightbox.imageIndex - 1 + images.length) % images.length;
    setLightbox({ ...lightbox, imageIndex: prev });
  };

  const nextImage = () => {
    if (!lightbox) return;
    const images = lightbox.project.images;
    if (!images || images.length === 0) return;
    const next = (lightbox.imageIndex + 1) % images.length;
    setLightbox({ ...lightbox, imageIndex: next });
  };

  return (
    <section
      id="projects"
      className="section-padding bg-section-alt relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="container-brand">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeader
            overline="معرض الأعمال"
            title="مشاريعنا"
            titleHighlight="المتميزة"
            description="مجموعة مختارة من مشاريعنا التي تجسد التزامنا بالتصميم الفاخر والتنفيذ الهندسي الدقيق."
            align="center"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, i) => {
              const cover = project.coverImage || (project.images && project.images[0]);
              return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                style={{
                  background: "rgba(20,21,22,0.8)",
                  border: "1px solid rgba(235,235,234,0.07)",
                }}
                onClick={() => openLightbox(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(project);
                }}
                aria-label={`View project: ${project.title}`}
              >
                {/* Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, 
                          hsl(${i * 40 + 30}, 15%, 12%) 0%, 
                          hsl(${i * 40 + 45}, 20%, 18%) 100%)`,
                      }}
                    />
                  )}

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(17,18,19,0.6)" }}
                  >
                    <Maximize2
                      size={28}
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        className="text-base font-bold mb-1 group-hover:text-[var(--color-gold-light)] transition-colors duration-200"
                        style={{ color: "var(--color-white)" }}
                      >
                        {project.title}
                      </h3>
                      {project.location && (
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={11}
                          style={{ color: "var(--color-gold)" }}
                          aria-hidden="true"
                        />
                        <span
                          className="text-xs"
                          style={{ color: "var(--color-dark-gray)" }}
                        >
                          {project.location}
                        </span>
                      </div>
                      )}
                    </div>
                    {project.year && <span className="badge-gold shrink-0">{project.year}</span>}
                  </div>

                  <div className="flex items-center gap-4 mt-3 pt-3"
                    style={{ borderTop: "1px solid rgba(235,235,234,0.06)" }}>
                    {project.type && (
                    <div>
                      <p className="text-[10px] font-semibold tracking-wider uppercase mb-0.5"
                        style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}>
                        النوع
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{project.type}</p>
                    </div>
                    )}
                    {project.area && (
                      <div>
                        <p className="text-[10px] font-semibold tracking-wider uppercase mb-0.5"
                          style={{ color: "var(--color-dark-gray)", fontFamily: "var(--font-accent)" }}>
                          المساحة
                        </p>
                        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{project.area}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            )})}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && lightbox.project.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Project gallery: ${lightbox.project.title}`}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--color-black)",
                border: "1px solid rgba(208,151,52,0.2)",
              }}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-sm flex items-center justify-center cursor-pointer transition-colors"
                style={{
                  background: "rgba(208,151,52,0.1)",
                  border: "1px solid rgba(208,151,52,0.3)",
                  color: "var(--color-gold)",
                }}
                aria-label="Close lightbox"
              >
                <X size={16} />
              </button>

              {/* Image area */}
              <div
                className="relative flex items-center justify-center bg-black/90 w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
              >
                <Image
                  src={lightbox.project.images[lightbox.imageIndex]}
                  alt={`${lightbox.project.title} — Image ${lightbox.imageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs tracking-widest uppercase" style={{ background: "rgba(0,0,0,0.5)", color: "var(--color-white)", backdropFilter: "blur(4px)" }}>
                  {lightbox.imageIndex + 1} / {lightbox.project.images.length}
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm flex items-center justify-center cursor-pointer"
                style={{
                  background: "rgba(208,151,52,0.1)",
                  border: "1px solid rgba(208,151,52,0.3)",
                  color: "var(--color-gold)",
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm flex items-center justify-center cursor-pointer"
                style={{
                  background: "rgba(208,151,52,0.1)",
                  border: "1px solid rgba(208,151,52,0.3)",
                  color: "var(--color-gold)",
                }}
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>

              {/* Project details */}
              <div
                className="p-6 flex items-start justify-between gap-6"
                style={{ borderTop: "1px solid rgba(208,151,52,0.12)" }}
              >
                <div>
                  <h2
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--color-white)" }}
                  >
                    {lightbox.project.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
