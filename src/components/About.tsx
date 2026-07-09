import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { animTextLeftVariants, animTextRightVariants } from "@/lib/animations";

interface Highlight {
  title: string;
  description: string;
}

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  status: string;
  highlights: string[];
}

interface AboutProps {
  highlights: Highlight[];
  education: EducationItem[];
  handleDownloadResume: () => void;
}

export const About = ({ highlights, education, handleDownloadResume }: AboutProps) => {
  return (
    <section id="about" className="border-b border-border relative px-6 md:px-12 py-24 bg-card/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Journey Description */}
          <motion.div
            variants={animTextLeftVariants(0)}
            className="lg:col-span-8 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold serif-display tracking-wide text-foreground uppercase">
              About
            </h2>
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-mono">
              <p>
                Hi, I'm <strong className="text-foreground">Manish Kumar</strong>, a Software Engineer and 2026 B.Tech graduate in Information Technology from Technocrats Institute of Technology, Bhopal. I enjoy designing and developing modern, scalable, and user-centric web applications using Java Full Stack technologies.
              </p>
              <p>
                My technical expertise includes <strong className="text-foreground">Java, Spring Boot, React.js, JavaScript, SQL, MySQL, PostgreSQL, REST APIs, Hibernate, Docker, AWS, Git, and Jenkins</strong>. I have hands-on experience building full-stack applications, implementing secure authentication, designing RESTful APIs, integrating databases, and deploying applications using modern development practices.
              </p>
              <p>
                During my internship at <strong className="text-foreground">Ramraj Technology Solutions Pvt. Ltd.</strong>, I worked on enterprise applications where I contributed to feature development, API integration, debugging, testing, deployment, and Agile team collaboration. These experiences strengthened my understanding of software development across both frontend and backend.
              </p>
              <p>
                I enjoy turning ideas into real-world applications and continuously improving my skills in Data Structures & Algorithms, Object-Oriented Programming, System Design, Database Management Systems, and cloud technologies.
              </p>
              <p>
                I've worked on multiple real-world projects, including <strong className="text-foreground">Hungry Hub</strong>, <strong className="text-foreground">Evaluaze AI</strong>, <strong className="text-foreground">Mess Management System</strong>, and other Java Full Stack applications. Feel free to explore the <strong className="text-foreground">Projects</strong> section of my portfolio to see my work, technical approach, and the technologies I've used.
              </p>
              <p>
                I'm currently seeking opportunities as a <strong className="text-foreground">Software Engineer</strong>, <strong className="text-foreground">Java Full Stack Developer</strong>, or <strong className="text-foreground">Full Stack Developer</strong>, where I can contribute, learn from experienced teams, and build impactful software.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Highlights Stack */}
          <motion.div
            variants={animTextLeftVariants(0.15)}
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-24"
          >
            <h3 className="font-mono text-xs tracking-[0.25em] text-primary uppercase border-b border-border/40 pb-2 mb-4">
              Focus Areas
            </h3>
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="border border-border p-4 bg-card/10 space-y-2 hover:border-primary/20 transition-colors">
                  <h4 className="font-serif font-bold text-base text-foreground leading-tight">{h.title}</h4>
                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="border-t border-border/40 pt-16 space-y-12"
        >
          <motion.div
            variants={animTextLeftVariants(0)}
            className="max-w-xl"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground block uppercase">
              EDUCATION
            </span>
            <h3 className="text-2xl font-serif text-foreground font-bold mt-2">Academic Milestones</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={idx % 2 === 0 ? animTextLeftVariants(idx * 0.1) : animTextRightVariants(idx * 0.1)}
                className="border border-border p-6 bg-card/15 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] text-muted-foreground uppercase">{edu.duration}</span>
                    {edu.status === "current" && (
                      <span className="border border-primary text-primary px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest bg-primary/5">
                        Completed
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-foreground leading-tight">{edu.degree}</h4>
                  <p className="font-mono text-xs text-primary">{edu.field}</p>
                  <p className="font-mono text-[11px] text-muted-foreground flex gap-1.5 items-center">
                    <MapPin size={12} className="text-primary" />
                    {edu.institution} — {edu.location}
                  </p>
                  <ul className="space-y-1 text-muted-foreground font-mono text-[11px] list-disc list-inside">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/40 pt-4 mt-4 font-mono text-xs text-foreground font-semibold">
                  {edu.grade}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
