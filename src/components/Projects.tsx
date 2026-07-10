import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { animTextLeftVariants } from "@/lib/animations";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech_stack: string[];
  metrics: string;
  highlights: string[];
  image_url: string;
  github_url: string;
  live_url: string;
}

interface ProjectsProps {
  projects: Project[];
  setIsContactOpen: (open: boolean) => void;
}

const ProjectRow = ({
  project,
  index,
  onContactClick
}: {
  project: Project;
  index: number;
  onContactClick: () => void;
}) => {
  const isLeft = index % 2 === 0;

  // Image animations (slides from left if isLeft, otherwise slides from right)
  const imageContainerVariants = {
    hidden: {
      x: isLeft ? -160 : 160,
      opacity: 0,
      scale: 0.94,
      filter: "blur(10px)"
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 14,
        duration: 0.9
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.25 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Text animations
  const textItemVariants = (delay: number) => ({
    hidden: {
      x: isLeft ? 180 : -180,
      y: 10,
      opacity: 0,
      filter: "blur(4px)"
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 14,
        duration: 0.8,
        delay
      }
    }
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      className="grid lg:grid-cols-12 gap-12 items-center group min-h-[480px] py-8 border-b border-border/10 last:border-b-0 relative"
    >
      {/* Project Image Column */}
      <motion.div
        variants={imageContainerVariants}
        className={`lg:col-span-6 relative crosshair-box p-2 bg-card/20 overflow-hidden ${
          isLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="crosshair-box-child absolute inset-0 pointer-events-none" />
        <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 contrast-[1.05] transition-all duration-700 relative">
          <motion.img
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
            src={project.image_url}
            alt={`Screenshot or system preview of ${project.title} - ${project.category}`}
            width="540"
            height="338"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-500 cursor-pointer"
          />
          {/* Moving Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </motion.div>

      {/* Project Info Column */}
      <div
        className={`lg:col-span-6 space-y-6 relative ${
          isLeft ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
        }`}
      >
        {/* Background Watermark Serial Number */}
        <motion.span
          variants={textItemVariants(0)}
          className="absolute -top-16 right-0 font-mono text-[11rem] md:text-[13rem] font-bold text-primary/[0.04] select-none pointer-events-none leading-none z-0"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        <motion.div
          variants={textItemVariants(0)}
          className="flex items-center justify-between border-b border-border/40 pb-2"
        >
          <span className="font-mono text-[10px] text-primary font-medium tracking-widest bg-primary/10 px-2 py-0.5">
            {project.metrics}
          </span>
        </motion.div>

        <motion.h3
          variants={textItemVariants(0.12)}
          className="text-3xl md:text-4xl font-bold serif-display tracking-wide text-foreground uppercase"
        >
          {project.title}
        </motion.h3>

        <motion.p
          variants={textItemVariants(0.24)}
          className="text-sm text-muted-foreground leading-relaxed font-mono"
        >
          {project.description}
        </motion.p>

        {project.tech_stack && project.tech_stack.length > 0 && (
          <motion.div variants={textItemVariants(0.36)} className="flex flex-wrap gap-4 pt-2">
            <div className="flex gap-2">
              <span className="font-mono text-[10px] text-muted-foreground uppercase self-center">STACK:</span>
              <div className="flex gap-1.5 flex-wrap">
                {project.tech_stack.map((t: string, idx: number) => (
                  <span key={idx} className="border border-border/60 bg-secondary px-2 py-0.5 font-mono text-[9px] text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div variants={textItemVariants(0.48)} className="pt-2 border-t border-border/20 space-y-1.5">
          <span className="text-[9px] font-mono text-muted-foreground block uppercase">HIGHLIGHTS:</span>
          <ul className="list-disc list-inside font-mono text-[11px] text-muted-foreground space-y-0.5">
            {project.highlights.map((h: string, i: number) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={textItemVariants(0.6)} className="flex gap-4 pt-2">
          {project.github_url ? (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group/btn border border-border text-foreground hover:text-primary hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:border-primary/50 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer z-10 focus:outline-none focus:border-primary/50"
              aria-label={`View GitHub repository source code for ${project.title}`}
            >
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-2">
                CODE
                <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </span>
            </a>
          ) : (
            <button
              onClick={onContactClick}
              className="relative overflow-hidden group/btn border border-border text-foreground hover:text-primary hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:border-primary/50 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer z-10 focus:outline-none focus:border-primary/50"
              aria-label={`Request GitHub repository source code access for private project ${project.title}`}
            >
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-2">
                REQUEST CODE
                <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>
          )}

          {project.live_url ? (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group/btn border border-border text-foreground hover:text-primary hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:border-primary/50 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer z-10 focus:outline-none focus:border-primary/50"
              aria-label={`View live interactive demo for ${project.title}`}
            >
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-2">
                LIVE DEMO
                <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </span>
            </a>
          ) : (
            <button
              onClick={onContactClick}
              className="relative overflow-hidden group/btn border border-border text-foreground hover:text-primary hover:shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:border-primary/50 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer z-10 focus:outline-none focus:border-primary/50"
              aria-label={`Request a live environment demonstration for ${project.title}`}
            >
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 z-0" />
              <span className="relative z-10 flex items-center gap-2">
                REQUEST DEMO
                <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Projects = ({ projects, setIsContactOpen }: ProjectsProps) => {
  return (
    <section id="projects" className="border-b border-border relative px-6 md:px-12 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.01 }}
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* Heading */}
        <motion.div
          variants={animTextLeftVariants(0)}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/40"
        >
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary block uppercase">
              
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-none serif-display uppercase">
              Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-muted-foreground max-w-sm leading-relaxed">
            A showcase of my backend development work, from full-stack applications to AI/ML projects, demonstrating my technical capabilities.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id || index}
              project={project}
              index={index}
              onContactClick={() => setIsContactOpen(true)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
