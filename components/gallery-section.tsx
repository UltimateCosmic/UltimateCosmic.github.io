"use client"

import { useEffect, useRef, useState } from "react"

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
]

const VISIBLE_COUNT_DESKTOP = 3
const VISIBLE_COUNT_MOBILE = 1
const IMAGE_RATIO = "aspect-[16/9]" // Para fotos horizontales

const getMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [start, setStart] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT_DESKTOP)
  const [isMobile, setIsMobile] = useState(getMobile());

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

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [isHovered])

  useEffect(() => {
    function handleResize() {
      setIsMobile(getMobile());
      setVisibleCount(getMobile() ? VISIBLE_COUNT_MOBILE : VISIBLE_COUNT_DESKTOP);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  // Calcula las imágenes visibles en el carrusel
  const visibleImages = Array.from({ length: visibleCount }, (_, i) => {
    return images[(start + i) % images.length]
  })

  // Efecto de desplazamiento natural
  const trackRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!trackRef.current) return
    trackRef.current.style.transition =
      "transform 0.8s cubic-bezier(0.4,0,0.2,1)"
    trackRef.current.style.transform = `translateX(-${(100 / visibleCount) * start
      }%)`
  }, [start, visibleCount])

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
            className={`mb-8 relative flex-1 flex items-center justify-center overflow-hidden ${isMobile ? 'w-full' : 'w-screen left-1/2 right-1/2 -mx-[50vw]'} px-0`}
            style={{ maxWidth: "100vw" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isMobile ? (
              <div
                ref={trackRef}
                className="flex"
                style={{
                  width: "100%",
                  minHeight: "56vw",
                  maxHeight: "70vh",
                  transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div
                  className="flex flex-col items-center justify-start w-full"
                  style={{ minWidth: "100%", maxWidth: "100%", height: "auto", maxHeight: "none" }}
                >
                  <div className="w-full h-0 pb-[56.25%] relative flex items-center justify-center bg-dark-surface rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={images[start].src}
                      alt={images[start].alt}
                      className="border border-dark-border absolute top-0 left-0 w-full h-full object-cover select-none"
                      draggable={false}
                      style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
                    />
                  </div>
                  <div className="mt-2 w-full break-words text-center text-dark-secondary text-sm md:text-base transition-colors min-h-[2.5rem] flex items-center justify-center whitespace-normal overflow-visible px-2">
                    <span style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', width: '100%' }}>
                      {images[start].description}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                ref={trackRef}
                className="flex gap-2 md:gap-8"
                style={{
                  width: `${(images.length / visibleCount) * 100}%`,
                  minHeight: "21vw",
                  maxHeight: "70vh",
                  transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {images.concat(images.slice(0, visibleCount)).map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="flex flex-col items-center justify-start w-full"
                    style={{
                      minWidth: `calc(100vw / ${visibleCount})`,
                      maxWidth: `calc(100vw / ${visibleCount})`,
                      height: "auto",
                      maxHeight: "none",
                    }}
                  >
                    <div className="w-full h-0 pb-[56.25%] relative flex items-center justify-center bg-dark-surface rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="border border-dark-border absolute top-0 left-0 w-full h-full object-cover select-none"
                        draggable={false}
                        style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
                      />
                    </div>
                    <div className="mt-2 w-full break-words text-center text-dark-secondary text-sm md:text-base transition-colors min-h-[2.5rem] flex items-center justify-center whitespace-normal overflow-visible px-2">
                      <span style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', width: '100%' }}>
                        {img.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-2 mt-2 justify-center">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border border-dark-accent transition-all ${idx === start ? "bg-dark-accent" : "bg-transparent"}`}
                onClick={() => setStart(idx)}
                aria-label={`Ver imagen ${idx + 1}`}
                tabIndex={0}
                style={isMobile ? { minWidth: 12, minHeight: 12 } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
