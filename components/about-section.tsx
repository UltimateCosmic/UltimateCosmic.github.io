"use client"

import { useEffect, useRef } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDiscord } from "react-icons/fa"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-dark-surface/50 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-start justify-center gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            <span className="text-dark-accent">#</span> About Me
          </h2>
          <div className="mt-4 grid gap-8 md:grid-cols-[2fr_1fr]">
            <div>
              <p className="text-dark-foreground mb-4">
                Computer Science student in my final semester at PUCP, focused on software development. I'm motivated to
                build efficient solutions with modern technologies like Java, React, SQL, and .NET. Self-taught and
                passionate about participating in projects that pose real technical challenges.
              </p>
              <p className="text-dark-foreground mb-4">
                Currently developing my thesis on healthcare systems interoperability, learning about standards like HL7
                FHIR and service-oriented architectures. This experience has brought me closer to designing scalable and
                connected systems.
              </p>
              <p className="text-dark-foreground mb-6">
                Outside of academics, I enjoy exploring game development, participating in game jams, and designing
                illustrations or logos as a hobby. These activities strengthen my creative thinking and practical
                approach.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-dark-accent">Languages</h3>
              <ul className="space-y-1 text-dark-secondary mb-6">
                <li>English: Intermediate-Advanced (Level B2 – First Certificate in English, Cambridge)</li>
                <li>Spanish: Native</li>
              </ul>
              <Button
                variant="outline"
                className="border-dark-border hover:bg-dark-surface hover:text-dark-foreground"
                asChild
              >
                <a href="/johan-amador-cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="bg-dark-background p-6 rounded-lg border border-dark-border flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-dark-accent">Contact Information</h3>
              <img
                src="/johan-white.png"
                alt="Johan Amador"
                className="w-32 h-32 mt-4 mb-8 animate-fade-in animate-[float_3s_ease-in-out_infinite]"
                style={{ animation: "fadeIn 1s ease-in, float 3s ease-in-out infinite" }}
              />
              <style jsx>{`
                @keyframes float {
                  0% {
                  transform: translateY(0px);
                  }
                  50% {
                  transform: translateY(-8px);
                  }
                  100% {
                  transform: translateY(0px);
                  }
                }
                `}</style>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-dark-accent mr-2 mt-1" />
                  <span>Lima, Peru</span>
                </li>
                <li className="flex items-start">
                  <FaDiscord className="text-dark-accent mr-2 mt-1" />
                  <span>cosmodev</span>
                </li>
                <li className="flex items-start">
                  <FaPhoneAlt className="text-dark-accent mr-2 mt-1" />
                  <span>+51 951 665 323</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-dark-accent mr-2 mt-1" />
                  <a href="mailto:johan.amador@pucp.edu.pe" className="text-dark-accent hover:underline">
                    johan.amador@pucp.edu.pe
                  </a>
                </li>                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
