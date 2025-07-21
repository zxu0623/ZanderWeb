"use client"

import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// TODO: Set showProjects to true when projects section is ready
const showProjects = false;

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
                          {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-primary via-primary to-muted-foreground bg-clip-text text-transparent">
                  Zander
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Software Engineer by Day, Bug Exterminator by Night
              </h2>
            </div>
            
            {/* Subtitle */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed">
                I build things that run fast, don&apos;t crash (usually), and actually help users.
                Sometimes it&apos;s a simple tool, sometimes it&apos;s just a really clever button.
              </p>
            </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/experience"
                  className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View My Experience
                </Link>
                
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-all duration-200"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                              <a
                href="https://www.linkedin.com/in/zander-xinhe-xu-96a1ab174/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
                              <a
                href="mailto:zanderxu.uiuc2023@gmail.com"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              </div>
            </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => {
              document.getElementById('about-preview')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to content"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m a software engineer passionate about building systems that blend infrastructure, 
              intelligence, and interface. From optimizing Kafka pipelines processing billions of events 
              to embedding LLMs into financial systems, I work across the full stack to make software 
              smarter, faster, and more impactful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3+</span>
                </div>
                <h3 className="font-semibold text-foreground">Years Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Building web applications and solving complex problems
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1B+</span>
                </div>
                <h3 className="font-semibold text-foreground">Events Processed Daily</h3>
                <p className="text-sm text-muted-foreground">
                  Building scalable systems that handle massive data
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">20+</span>
                </div>
                <h3 className="font-semibold text-foreground">Technologies</h3>
                <p className="text-sm text-muted-foreground">
                  From ML frameworks to web development tools
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-all duration-200"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      {showProjects && (
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Featured Projects
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Project {i}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        A brief description of this amazing project and the technologies used to build it.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Next.js</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">TypeScript</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
