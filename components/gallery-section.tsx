"use client"

import { useEffect, useRef } from "react"

const images = [
  {
    src: "./gallery/conectaton-ips-2025.jpg",
    alt: "Conectatón IPS Perú 2025",
    description: "At IPS Perú 2025 with teammates, representing Hospital Santa Clotilde & university.",
  },
  {
    src: "./gallery/hl7-peru-reunion.png",
    alt: "Meeting with HL7 Peru members",
    description: "SIH SALUS team meeting with HL7 Perú members.",
  },
  {
    src: "./gallery/health-minister.jpg",
    alt: "With Dr. César Vásquez (Minister of Health) and José Pérez Lu (General Director of IT, MINSA)",
    description: "With Dr. César Vásquez, Minister of Health, and José Pérez Lu, General Director of IT at MINSA.",
  },
  {
    src: "./gallery/diresa-huanuco-sanmartin.jpg",
    alt: "With DIRESA Huánuco and San Martín members",
    description: "With members of DIRESA Huánuco and San Martín during a regional health digitalization meeting.",
  },
  {
    src: "./gallery/xpostem-2025.jpg",
    alt: "XPOSTEM 2025",
    description: "At XPOSTEM 2025, a fair of innovation by PUCP showcasing 90+ solutions transforming lives through science and engineering.",
  },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Efecto de fade-in al entrar en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )
    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }
    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-12 md:py-20 fade-in-section"
    >
      <div className="container px-2 md:px-6">
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-8">
            <span className="text-dark-accent">#</span> Gallery
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
          >
            {images.map((img, idx) => (
              <div
                key={img.src + idx}
                className="flex flex-col items-center justify-start w-full bg-dark-surface rounded-2xl overflow-hidden shadow-lg border border-dark-border"
              >
                <div className="w-full h-0 pb-[56.25%] relative flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="border-none absolute top-0 left-0 w-full h-full object-cover select-none"
                    draggable={false}
                    style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
                  />
                </div>
                <div className="mt-2 w-full break-words text-center text-dark-secondary text-sm transition-colors min-h-[2.5rem] flex items-center justify-center whitespace-normal overflow-visible px-2 pb-4 pt-1">
                  <span style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', width: '100%' }}>
                    {img.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
