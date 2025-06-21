"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-12 md:py-20 bg-dark-surface/50 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-8">
            <span className="text-dark-accent">#</span> Contact
          </h2>
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-dark-secondary mb-6">
                I'm interested in software development opportunities. If you have any questions or want to discuss a
                project, feel free to contact me.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-dark-accent mr-3" />
                  <span>Lima, Perú</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-dark-accent mr-3" />
                  <span>+51 951 665 323</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-dark-accent mr-3" />
                  <a href="mailto:johan.amador@pucp.edu.pe" className="hover:text-dark-accent transition-colors">
                    johan.amador@pucp.edu.pe
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link
                  href="https://github.com/UltimateCosmic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-background hover:bg-dark-border p-3 rounded-full transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/cosmodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-background hover:bg-dark-border p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:johan.amador@pucp.edu.pe"
                  className="bg-dark-background hover:bg-dark-border p-3 rounded-full transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="bg-dark-background p-6 rounded-lg border border-dark-border">
              <h3 className="text-xl font-semibold mb-2">Send me a message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-dark-surface border border-dark-border rounded-md p-3 text-dark-foreground focus:outline-none focus:ring-1 focus:ring-dark-accent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-dark-surface border border-dark-border rounded-md p-3 text-dark-foreground focus:outline-none focus:ring-1 focus:ring-dark-accent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-dark-surface border border-dark-border rounded-md p-3 text-dark-foreground focus:outline-none focus:ring-1 focus:ring-dark-accent"
                  ></textarea>
                </div>
                <Button className="w-full bg-dark-accent hover:bg-dark-accent/90 text-black font-medium">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
