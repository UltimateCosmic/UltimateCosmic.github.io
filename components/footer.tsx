import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 border-t border-dark-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-dark-secondary">
            &copy; {new Date().getFullYear()} Johan Amador (@cosmodev). All rights reserved.
          </p>
          <p className="text-sm text-dark-secondary">
            Built with <span className="text-dark-accent">Next.js</span> and{" "}
            <span className="text-dark-accent">Tailwind CSS</span>
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/UltimateCosmic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-dark-accent transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/cosmodev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-secondary hover:text-dark-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:johan.amador@pucp.edu.pe"
              className="text-dark-secondary hover:text-dark-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
