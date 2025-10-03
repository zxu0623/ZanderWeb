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
    team: "Fintech Payments Team",
    description: [
      "Architected a distributed reconciliation system to process 2M+ daily financial transactions, utilizing Kafka with custom key-based partitioning to ensure sequential processing by merchant.",
      "Engineered fault-tolerant data ingestion with idempotent AWS Lambda consumers, implementing exponential backoff retries and a Dead-Letter Queue (DLQ) for robust poison message handling.",
      "Optimized data storage and analytics using S3 Parquet columnar format with date-hour partitioning, reducing analytical query latency from 45s to 2s and enabling real-time financial reporting across multiple data centers.",
      "Designed enterprise RBAC system using OPA/Rego for microservices authorization, implementing 200+ permission policies across 15 services with centralized distribution via Redis cache and auto validation pipeline, reducing authorization latency from 50ms to 5ms.",
      "Built end-to-end Payment AI Agent using LLM APIs with React/TypeScript frontend and Python FastAPI backend, implementing real-time screenshot analysis, contextual invoice generation with validation pipelines, and A/B testing framework via Amplitude.",
      "Optimized high-traffic payment UI architecture using React virtualization with react-window, implementing progressive loading for 100K+ transaction records, lazy component hydration, and comprehensive E2E testing via Playwright reducing page load time by 60%."
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Kafka", "AWS Lambda", "S3", "Parquet", "OPA", "Rego", "Redis", "Playwright", "Amplitude", "react-window"],
    achievements: [
      "Processing 2M+ daily financial transactions",
      "Reduced query latency from 45s to 2s",
      "Reduced authorization latency from 50ms to 5ms",
      "Reduced page load time by 60%"
    ]
  },
  {
    id: 2,
    title: "Research Assistant (Software Development)",
    company: "University of Illinois Urbana-Champaign",
    location: "Urbana, IL",
    period: "Aug 2022 - Dec 2023",
    type: "Research",
    team: "INCAS/MIPS Data Platform Development",
    description: [
      "Led development of a large-scale social media intelligence platform to identify and track misinformation campaigns, processing 100K+ daily records using Selenium/Python, Redis, and Docker ML orchestration.",
      "Pioneered novel Belief Embedding Model integrating BERT, VGAE, and Segment Trees for misinformation detection, achieving breakthrough performance on social network analysis benchmarks.",
      "Built React-based analytics platform with 3D/2D network visualizations serving 50+ researchers, implementing automated evaluation frameworks and enabling 15+ published papers across multiple institutions.",
      "Designed production-grade ML infrastructure with continuous retraining, A/B testing, and real-time classification workflows, supporting research collaborations and cross-platform misinformation analysis."
    ],
    technologies: ["Python", "Selenium", "Redis", "Docker", "BERT", "VGAE", "React", "ML", "Data Analytics"],
    achievements: [
      "Processing 100K+ daily records",
      "Breakthrough performance on ML benchmarks",
      "Serving 50+ researchers",
      "Enabled 15+ published papers"
    ]
  },
  {
    id: 3,
    title: "Software Development Engineer Intern",
    company: "Intuit",
    location: "Mountain View, CA",
    period: "May 2023 - Aug 2023",
    type: "Internship",
    team: "QuickBooks Money Team",
    description: [
      "Developed React-based deposit list and tracker with advanced data filtering, sorting, and CSV download functionality using MySQL backend, processing 5K+ daily deposit records and improving user satisfaction scores by 15%.",
      "Implemented deposit management feature using Spring Boot with RESTful APIs for status updates, added input validation and auto email notifications for status changes, reducing failure rates by 25% and improving search performance through database indexing."
    ],
    technologies: ["React", "Spring Boot", "Java", "MySQL", "RESTful APIs"],
    achievements: [
      "Processing 5K+ daily deposit records",
      "Improved user satisfaction by 15%",
      "Reduced failure rates by 25%"
    ]
  },
  {
    id: 4,
    title: "Software Development Engineer Intern",
    company: "Amazon",
    location: "Remote",
    period: "Feb 2022 - Aug 2022",
    type: "Internship",
    team: "Customer Search Recommendations Team",
    description: [
      "Implemented Redis caching layer for product catalog queries to reduce DynamoDB load from 8K+ QPS, using TTL-based expiration and achieving 92% cache hit ratio, reducing search latency from 300ms to 80ms.",
      "Built cache invalidation system using DynamoDB Streams and Java to automatically evict stale product data when catalog updates occur, maintaining cache consistency across frequent product changes.",
      "Developed CloudWatch monitoring dashboard to track cache performance metrics and automated alerts for cache degradation, improving incident response efficiency."
    ],
    technologies: ["Redis", "DynamoDB", "Java", "CloudWatch", "AWS"],
    achievements: [
      "Reduced DynamoDB load from 8K+ QPS",
      "Achieved 92% cache hit ratio",
      "Reduced search latency from 300ms to 80ms"
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
                2M+
              </motion.div>
              <div className="text-sm text-muted-foreground">Transactions/Day</div>
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