"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const codeLines = [
    {
      id: 1,
      content:
        '<span class="code-keyword">const</span> <span class="code-variable">developer</span> <span class="code-operator">=</span> {',
      delay: 0,
    },
    {
      id: 2,
      content: '  <span class="code-variable">name</span>: <span class="code-string">"Johan Amador"</span>,',
      delay: 800,
    },
    {
      id: 3,
      content: '  <span class="code-variable">username</span>: <span class="code-string">"@cosmodev"</span>,',
      delay: 1200,
    },
    {
      id: 4,
      content:
        '  <span class="code-variable">role</span>: <span class="code-string">"Computer Science Student | Software Developer"</span>,',
      delay: 1600,
    },
    {
      id: 5,
      content: '  <span class="code-variable">location</span>: <span class="code-string">"Lima, Peru"</span>,',
      delay: 2400,
    },
    { id: 6, content: '  <span class="code-function">introduce</span>() {', delay: 3200 },
    {
      id: 7,
      content:
        '    <span class="code-keyword">return</span> <span class="code-string">"Building efficient solutions with modern technologies"</span>;',
      delay: 4000,
    },
    { id: 8, content: "  }", delay: 4800 },
    { id: 9, content: "};", delay: 5600 },
  ]

  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setIsVisible(true)

    const timer = setTimeout(() => {
      setCurrentLine(codeLines.length)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  // Manejo del movimiento del mouse para el patrón topográfico
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Patrón topográfico animado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(0,240,80,0.15) 0%, 
              rgba(0,240,80,0.08) 25%, 
              rgba(0,240,80,0.04) 50%, 
              transparent 70%
            )
          `,
          transition: 'background 0.3s ease-out',
        }}
      >
        {/* Líneas topográficas */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <defs>
            <pattern id="topographic" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Líneas topográficas concéntricas */}
              <circle cx="60" cy="60" r="10" fill="none" stroke="rgba(0,240,80,0.1)" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(0,240,80,0.08)" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="30" fill="none" stroke="rgba(0,240,80,0.06)" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(0,240,80,0.04)" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(0,240,80,0.02)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topographic)" />
        </svg>
        
        {/* Líneas adicionales que siguen el cursor */}
        <div
          className="absolute w-96 h-96 rounded-full border border-dark-accent/10"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full border border-dark-accent/15"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.4s ease-out',
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full border border-dark-accent/20"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out',
          }}
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-baseline mb-2">        
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">Johan Amador</h1>                
                <span className="ml-3 text-sm text-dark-secondary">@cosmodev</span>
              </div>
              <h2 className="text-xl sm:text-2xl text-dark-accent mb-4">
                Computer Science Student | Software Developer
              </h2>
              <p className="max-w-[600px] text-dark-secondary text-lg mb-6">
                Focused on building efficient solutions with modern technologies. Self-taught and passionate about
                tackling real technical challenges.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <Button
                className="bg-dark-accent hover:bg-dark-accent/90 text-black font-medium button-hover-fix"
                asChild
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-dark-border hover:bg-dark-surface hover:text-dark-foreground"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
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

            <div
              className={`flex space-x-4 transition-opacity duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <Link
                href="https://github.com/UltimateCosmic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-accent transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/cosmodev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-secondary hover:text-dark-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:johan.amador@pucp.edu.pe"
                className="text-dark-secondary hover:text-dark-accent transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-dark-code-bg rounded-lg p-6 border border-dark-border w-full">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                <span className="ml-4 text-dark-secondary text-sm">developer.js</span>
              </div>
              <div className="font-mono text-sm md:text-base">
                {codeLines.map((line, index) => (
                  <div
                    key={line.id}
                    className={`code-line ${index <= currentLine ? "block" : "hidden"}`}
                    style={{ animation: `fadeIn 0.5s ease-out forwards ${line.delay / 1000}s` }}
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
