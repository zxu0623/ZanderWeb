import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: [
      "Led development of microservices architecture serving 1M+ daily active users",
      "Mentored junior developers and conducted technical interviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Architected and built real-time notification system using WebSockets"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    achievements: [
      "Improved application performance by 40% through optimization",
      "Led team of 5 developers on major product redesign",
      "Implemented automated testing reducing bugs by 50%"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 - 2022",
    type: "Full-time",
    description: [
      "Built and maintained customer-facing web applications",
      "Collaborated with product team to define technical requirements",
      "Developed RESTful APIs and integrated with third-party services",
      "Participated in agile development process and sprint planning"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API"],
    achievements: [
      "Delivered 15+ features on time and within budget",
      "Reduced customer onboarding time by 30%",
      "Implemented payment processing system"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "2019 - 2020",
    type: "Contract",
    description: [
      "Developed responsive websites for various clients",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Optimized websites for performance and SEO",
      "Maintained and updated existing client websites"
    ],
    technologies: ["JavaScript", "React", "Sass", "Webpack", "WordPress"],
    achievements: [
      "Completed 20+ client projects with 100% satisfaction rate",
      "Improved client website speed scores by average of 35%",
      "Developed reusable component library"
    ]
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "Local Web Solutions",
    location: "Austin, TX",
    period: "2018 - 2019",
    type: "Full-time",
    description: [
      "Assisted in development of client websites and web applications",
      "Fixed bugs and implemented small features",
      "Learned modern web development practices and tools",
      "Participated in code reviews and team meetings"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
    achievements: [
      "Successfully completed internship to full-time conversion",
      "Contributed to 10+ client projects",
      "Gained proficiency in full-stack development"
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a software developer, building solutions and growing with amazing teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                {/* Content */}
                <div className="md:ml-16">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium mt-1">
                          <span>{experience.company}</span>
                          <ExternalLink size={16} />
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Responsibilities</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Achievements</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 pt-16 border-t border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Career Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="mt-16 text-center">
          <div className="bg-muted/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Want to know more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Download my resume for a comprehensive overview of my experience and skills.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 