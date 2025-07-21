"use client";

import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Intuit",
    location: "Mountain View, CA",
    period: "Jan 2024 - Present",
    type: "Full-time",
    team: "QuickBooks Fintech Money Payments Team",
    description: [
      "Lead a Kafka-to-S3 reconciliation pipeline handling 1B+ events/day with AWS Lambda, powering fraud models with <5-min SLA.",
      "Built an LLM-powered Payments Agent microservice (Python + FastAPI + RAG) projected to generate $1M+ ARR.",
      "Engineered user state tracking via Kafka & Java to support churn prediction, reducing drop-off by 12%.",
      "Developed a React-based one-click onboarding flow, lifting Instant Deposit adoption by 55%.",
      "Built E2E test suite with Playwright and React Testing Library to ensure frontend reliability.",
      "Enforced role-based access with OPA (Rego), boosting SMB customer engagement.",
      "Integrated Amplitude tracking for user behavior and product analytics."
    ],
    technologies: ["React", "Python", "FastAPI", "Kafka", "AWS Lambda", "S3", "Java", "Playwright", "OPA", "Rego", "Amplitude"],
    achievements: [
      "Handling 1B+ events/day with <5-min SLA",
      "Built microservice projected for $1M+ ARR",
      "Reduced user drop-off by 12%",
      "Increased Instant Deposit adoption by 55%"
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Intuit",
    location: "Mountain View, CA",
    period: "May 2023 - Aug 2023",
    type: "Internship",
    team: "",
    description: [
      "Developed a React-based deposit list and tracker with filtering & download, improving satisfaction.",
      "Built backend APIs using Spring Boot to manage deposit statuses, reducing operational issues."
    ],
    technologies: ["React", "Spring Boot", "Java"],
    achievements: [
      "Improved customer satisfaction with deposit tracking",
      "Reduced operational issues through better API design"
    ]
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Amazon",
    location: "Remote",
    period: "Feb 2022 - Aug 2022",
    type: "Internship",
    team: "Customer Search & Recommendation",
    description: [
      "Built an offline eval framework (Java, JUnit) to test search ranking models over 200M queries.",
      "Prototyped new engagement features with clickstream signals, improving nDCG@10 by 5%.",
      "Refactored debugging tools using Java & Kata, improving modularity and team debug efficiency by 20%."
    ],
    technologies: ["Java", "JUnit", "Kata"],
    achievements: [
      "Tested models over 200M queries",
      "Improved nDCG@10 by 5%",
      "Increased debug efficiency by 20%"
    ]
  },
  {
    id: 4,
    title: "ML Engineer",
    company: "University of Illinois Urbana-Champaign",
    location: "Urbana, IL",
    period: "Aug 2022 - Dec 2023",
    type: "Research",
    team: "",
    description: [
      "Led MLOps pipeline development with MLflow, Docker, and Kubernetes to streamline model iteration.",
      "Co-developed a BERT + VGAE belief embedding model, boosting accuracy by 18%.",
      "Built scalable scrapers with Selenium + Redis for social media data (100K+ records).",
      "Developed React-based visualization dashboard for 2D/3D influence graphs."
    ],
    technologies: ["Python", "MLflow", "Docker", "Kubernetes", "BERT", "VGAE", "Selenium", "Redis", "React"],
    achievements: [
      "Streamlined model iteration with MLOps pipeline",
      "Boosted model accuracy by 18%",
      "Collected 100K+ social media records",
      "Built visualization dashboard for influence graphs"
    ]
  }
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1
  },
  whileHover: {
    y: -5,
    scale: 1.02
  }
};

const statsVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1
  }
};

export default function Experience() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-foreground"
            variants={fadeInUp}
          >
            Experience
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            My professional journey in software engineering and machine learning, building scalable systems and innovative solutions at top tech companies.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            style={{ originY: 0 }}
          ></motion.div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div 
                key={experience.id} 
                className="relative"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="whileHover"
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>

                {/* Content */}
                <div className="md:ml-16">
                  <motion.div className="bg-card border border-border rounded-lg p-6 shadow-sm">
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
                        {experience.team && (
                          <div className="text-sm text-muted-foreground mt-1">
                            {experience.team}
                          </div>
                        )}
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 pt-16 border-t border-border"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl font-semibold text-foreground mb-8 text-center"
            variants={fadeInUp}
          >
            Career Highlights
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center space-y-2"
              variants={statsVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                3+
              </motion.div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-2"
              variants={statsVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                1B+
              </motion.div>
              <div className="text-sm text-muted-foreground">Events Processed/Day</div>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-2"
              variants={statsVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                20+
              </motion.div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-2"
              variants={statsVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                3
              </motion.div>
              <div className="text-sm text-muted-foreground">Major Companies</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-muted/20 rounded-lg p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Interested in working together?
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Get my complete professional background including technical achievements, key projects, and measurable impact across leading tech companies.
            </motion.p>
            <motion.a
              href="/ZanderXu_resume_sde.pdf"
              download="ZanderXu_Resume_SDE.pdf"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              viewport={{ once: true }}
            >
              Download My Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 