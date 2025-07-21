import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Features include user authentication, product catalog, shopping cart, and order tracking.",
    longDescription: "Built a comprehensive e-commerce solution from scratch, handling everything from product management to payment processing. The platform supports multiple payment methods, real-time inventory updates, and advanced search functionality.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Docker"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
    status: "Completed",
    team: "Solo Project",
    duration: "3 months",
    highlights: [
      "Integrated Stripe payment processing with webhook handling",
      "Implemented real-time inventory management with Redis",
      "Built responsive admin dashboard for order management",
      "Achieved 99% uptime with automated deployment pipeline"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard. Includes drag-and-drop functionality and project timeline views.",
    longDescription: "Developed a Slack/Asana-inspired task management tool with focus on team collaboration and productivity. Features include real-time updates, file attachments, and comprehensive reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3", "Express"],
    liveUrl: "https://taskapp-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
    status: "Completed",
    team: "2 Developers",
    duration: "4 months",
    highlights: [
      "Real-time collaboration with Socket.io integration",
      "Drag-and-drop task management with React DnD",
      "File upload and management with AWS S3",
      "Analytics dashboard with custom charts and reports"
    ]
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "A modern weather dashboard with interactive maps, detailed forecasts, and historical data analysis. Features location-based weather alerts and customizable widgets.",
    longDescription: "Created a comprehensive weather analytics platform that aggregates data from multiple weather APIs to provide accurate forecasts and historical analysis with beautiful visualizations.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "OpenWeather API", "PostgreSQL"],
    liveUrl: "https://weather-dashboard.vercel.app",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: true,
    status: "Completed",
    team: "Solo Project",
    duration: "2 months",
    highlights: [
      "Integration with multiple weather APIs for accuracy",
      "Interactive maps with weather overlay data",
      "Historical data analysis with custom visualizations",
      "Location-based push notifications for weather alerts"
    ]
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    description: "An analytics platform for social media managers to track engagement, analyze trends, and schedule posts across multiple platforms.",
    longDescription: "Built a comprehensive social media management tool that helps businesses track their social media performance across different platforms with automated reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Express.js", "MySQL", "Redis", "Twitter API", "Facebook API"],
    liveUrl: "https://social-analytics.vercel.app",
    githubUrl: "https://github.com/username/social-analytics",
    featured: false,
    status: "In Progress",
    team: "3 Developers",
    duration: "5 months",
    highlights: [
      "Multi-platform social media integration",
      "Automated content scheduling and publishing",
      "Advanced analytics with trend analysis",
      "Team collaboration features for agencies"
    ]
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from full-stack applications to creative solutions that solve real-world problems.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Featured Projects</h2>
          
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-muted-foreground text-lg">Project Screenshot</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={16} />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Built With</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-all duration-200"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Other Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <div key={project.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200">
                  {/* Project Image */}
                  <div className="aspect-video bg-muted">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-md ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-muted/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and see how we can create something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 