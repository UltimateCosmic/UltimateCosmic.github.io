"use client"

import { useEffect, useRef } from "react"

const education = [
  {
    institution: "Pontificia Universidad Católica del Perú",
    degree: "Bachelor in Computer Science",
    period: "2020-2025",
    location: "Lima, Peru",
  },
  {
    institution: "Platzi",
    degree: "Full Stack Developer Path",
    period: "2022-2023",
    location: "Online",
  },
  {
    institution: "Coursera",
    degree: "Software Development",
    period: "2025",
    location: "Online",
  },
]

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-16 md:py-24 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-8">
            <span className="text-dark-accent">#</span> Education
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {education.map((item, index) => (
              <div key={index} className="bg-dark-surface p-6 rounded-lg border border-dark-border">
                <h3 className="text-xl font-semibold text-dark-foreground mb-2">{item.institution}</h3>
                <p className="text-dark-accent mb-1">{item.degree}</p>
                <div className="flex justify-between text-dark-secondary text-sm">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
