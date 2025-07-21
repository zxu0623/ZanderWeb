"use client";

import { Code, Coffee, Globe, Heart, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function About() {
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
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Passionate about building exceptional digital experiences through clean code and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Personal Story */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                My journey into tech started with a healthy curiosity for &ldquo;how the internet works&rdquo; and snowballed into a career that blends infrastructure, intelligence, and interface.
              </p>
              <p>
                From optimizing Kafka pipelines that process over a billion events a day to embedding LLMs into financial systems, I&apos;ve worked across backend, frontend, and ML to make software smarter, faster, and occasionally even fun to use.
              </p>
              <p>
                These days, I work at Intuit on QuickBooks&apos; Fintech AI team, where I help build ML-powered user experiences and reconciliation pipelines. Before that, I was at Amazon working on search ranking and debugging infrastructure. And before that? I was reverse-engineering influence networks and building social signal pipelines for political discourse modeling.
              </p>
              <p>
                A huge part of my growth happened at the University of Illinois Urbana-Champaign, where I had the chance to explore machine learning research under the guidance of amazing professors. I&apos;m especially grateful for the mentorship of Professor Tarek Abdelzaher and his research group, where I was encouraged to build things, break things, and push boundaries — from building belief embedding models to designing real-time social data pipelines.
              </p>
              <p>
                I like writing code that doesn&apos;t break (too often), building things that make users go &ldquo;whoa,&rdquo; and occasionally pretending I understand how Kubernetes actually works.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills & Technologies */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-semibold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Frontend */}
            <motion.div 
              className="bg-card border border-border rounded-lg p-6"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>

            {/* Backend */}
            <motion.div 
              className="bg-card border border-border rounded-lg p-6"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>

            {/* Machine Learning & AI */}
            <motion.div 
              className="bg-card border border-border rounded-lg p-6 md:col-span-2 lg:col-span-1"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Brain size={20} />
                Machine Learning & AI
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenAI API", "MLflow"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {["LLMs", "RAG", "NLP (BERT)", "GNNs (VGAE)", "Style Transfer", "Recommender Systems", "Federated Learning"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">MLOps & Data Engineering</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Kafka", "Redis", "Spark", "Airflow", "Kubernetes", "Docker", "AWS", "S3"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* What I Love */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-semibold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What I Love About Development
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-card border border-border rounded-lg p-6 space-y-4"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Problem Solving</h3>
              <p className="text-muted-foreground">
                I thrive on breaking down complex problems into manageable pieces and crafting elegant solutions 
                that are both efficient and maintainable.
              </p>
            </motion.div>

            <motion.div 
              className="bg-card border border-border rounded-lg p-6 space-y-4"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Coffee size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Continuous Learning</h3>
              <p className="text-muted-foreground">
                The tech industry never stops evolving, and I love staying on the cutting edge by learning 
                new technologies and best practices.
              </p>
            </motion.div>

            <motion.div 
              className="bg-card border border-border rounded-lg p-6 space-y-4"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing code that is readable, maintainable, and scalable is crucial for long-term project success 
                and team collaboration.
              </p>
            </motion.div>

            <motion.div 
              className="bg-card border border-border rounded-lg p-6 space-y-4"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Creative Engineering</h3>
              <p className="text-muted-foreground">
                I enjoy mixing cutting-edge ML with web and product development — building things that are both 
                technically complex and visually expressive.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-muted/20 rounded-lg p-8"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">Beyond Coding</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                When I&apos;m not shipping code or fighting with YAML, you&apos;ll probably find me somewhere off-grid with a camera in hand.
              </p>
              <p>
                I&apos;m passionate about travel, storytelling, and capturing places that spark curiosity — both through photography and writing. I also love nerding out about product design, new AI tools, and occasionally trying to build side projects just to see if they can be cooler than they are useful.
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
} 