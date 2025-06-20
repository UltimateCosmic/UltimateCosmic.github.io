"use client"

import { useEffect, useRef } from "react"

const projects = [
  {
    title: "Academic Thesis Management System",
    period: "March 2025 - Present",
    role: "Full Stack Developer",
    technologies: "React • Spring Boot • PostgreSQL",
    description:
      "Final career project developed with 38 members, simulating a real professional environment. Developed the review module, integrating the GoWinston API to analyze similarity and detect possible thesis plagiarism. Participated in the technical management of the system with quality control, CI/CD, and collaborative code review.",
  },
  {
    title: "Logistics Operations Platform",
    period: "August 2024 - December 2024",
    role: "Full Stack Developer",
    technologies: "Java • React • Figma",
    description:
      "Delivery route planning system with restrictions and blockages. Backend with optimization algorithm in Java. Modular interface in React + UI system design in Figma.",
  },
  {
    title: "Academic Tutoring System",
    period: "March 2024 - July 2024",
    role: "Full Stack Developer",
    technologies: "React • ASP.NET",
    description:
      "Platform to coordinate advising between students and teachers. Implementation of schedules, notifications, and session management. Agile development with Scrum and interactive prototyping in Figma.",
  },
  {
    title: "Banking Risk Management System",
    period: "August 2023 - December 2023",
    role: "Full Stack Developer",
    technologies: "Java • C# • Figma",
    description:
      "Academic prototype for comprehensive risk management in digital banking entities. Implementation of registration, analysis, hierarchy, and reporting modules with filters. Coordination of a multidisciplinary team, flow design, and prototyping in Figma.",
  },
]

export function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 fade-in-section">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-8">
            <span className="text-dark-accent">#</span> Project Experience
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="timeline-container">
                <div className="timeline-dot"></div>
                <div className="bg-dark-surface p-6 rounded-lg border border-dark-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-dark-foreground">{project.title}</h3>
                    <span className="text-dark-secondary text-sm">{project.period}</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-dark-accent font-medium">{project.role}</span>
                    <span className="mx-2 text-dark-muted">|</span>
                    <span className="text-dark-secondary">{project.technologies}</span>
                  </div>
                  <p className="text-dark-secondary">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
