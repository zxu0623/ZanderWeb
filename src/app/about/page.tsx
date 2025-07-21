import { Code, Coffee, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building exceptional digital experiences through clean code and innovative solutions.
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                My journey into software development began during my computer science studies, where I discovered 
                my passion for creating digital solutions that solve real-world problems. What started as curiosity 
                about how websites work evolved into a deep fascination with the entire software development lifecycle.
              </p>
              <p>
                Over the years, I&apos;ve had the opportunity to work on diverse projects ranging from small business 
                websites to large-scale enterprise applications. Each project has taught me valuable lessons about 
                code quality, user experience, and the importance of understanding business requirements.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest technologies and best practices. 
                The tech industry evolves rapidly, and I embrace this challenge by dedicating time to learning new 
                frameworks, tools, and methodologies that can improve my craft.
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code size={20} />
                Frontend Development
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Languages & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Styling & UI</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Tailwind CSS", "Styled Components", "Sass", "Material-UI", "Chakra UI"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe size={20} />
                Backend Development
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Languages & Runtime</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "Java", "Go", "Express.js", "FastAPI"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Databases & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Prisma"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Love */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">What I Love About Development</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Problem Solving</h3>
              <p className="text-muted-foreground">
                I thrive on breaking down complex problems into manageable pieces and crafting elegant solutions 
                that are both efficient and maintainable.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Coffee size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Continuous Learning</h3>
              <p className="text-muted-foreground">
                The tech industry never stops evolving, and I love staying on the cutting edge by learning 
                new technologies and best practices.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing code that is readable, maintainable, and scalable is crucial for long-term project success 
                and team collaboration.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">User Experience</h3>
              <p className="text-muted-foreground">
                Creating applications that not only work well but also provide an intuitive and delightful 
                experience for end users.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <div className="bg-muted/20 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Beyond Coding</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                When I&apos;m not coding, you can find me exploring new coffee shops, reading tech blogs, or 
                contributing to open source projects. I&apos;m also passionate about mentoring aspiring developers 
                and sharing knowledge through technical writing and speaking at local meetups.
              </p>
              <p>
                I believe in maintaining a healthy work-life balance and enjoy outdoor activities like hiking 
                and photography, which help me stay creative and bring fresh perspectives to my work.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 