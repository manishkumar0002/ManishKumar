import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { animImageRightVariants, animTextLeftVariants, animTextRightVariants } from "@/lib/animations";

interface HeroProps {
  profileImageUrl: string;
  handleDownloadResume: () => void;
}

export const Hero = ({ profileImageUrl, handleDownloadResume }: HeroProps) => {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center border-b border-border relative px-6 md:px-12 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Hero Text */}
        <motion.div
          variants={animTextLeftVariants(0)}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase">
          
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] serif-display">
            ENGINEERED <br />
            FOR <span className="serif-italic font-light text-primary drop-shadow-[0_0_20px_rgba(0,245,255,0.15)]">PRECISION.</span>
          </h1>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="border border-primary text-primary px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-primary/10 transition-all flex items-center gap-3 group cursor-pointer"
            >
              VIEW PROJECTS
             
            </button>

            <button
              onClick={handleDownloadResume}
              className="border border-border bg-card/40 hover:bg-secondary/40 text-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all cursor-pointer"
            >
              DOWNLOAD RESUME
            </button>
          </div>

          {/* Mapping Architecture Description */}
          <div className="border-t border-border/60 pt-8 mt-4 space-y-4 max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground block uppercase">
            
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              Hi, I’m Manish Kumar. Full Stack Java Developer. Skilled in Java, Spring Boot, REST APIs, and building scalable backend systems.
            </p>
          </div>
        </motion.div>

        {/* Right Hero Image Panel */}
        <motion.div
          variants={animImageRightVariants}
          className="lg:col-span-5 flex justify-center relative py-8"
        >
          {/* Rotating wireframe cages */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-primary/10 rounded-full w-[360px] h-[360px] m-auto pointer-events-none hidden md:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-primary/5 rounded-full w-[410px] h-[410px] m-auto pointer-events-none hidden md:block"
          />

          {/* Wireframe tags around image */}
          <div className="absolute right-0 top-10 border border-border bg-card/80 px-2 py-0.5 font-mono text-[9px] text-muted-foreground pointer-events-none select-none z-20">
            JAVA // 1.21
          </div>
          <div className="absolute left-0 bottom-24 border border-border bg-card/80 px-2 py-0.5 font-mono text-[9px] text-muted-foreground pointer-events-none select-none z-20">
            PYTHON_CORE
          </div>
          <div className="absolute right-6 bottom-4 border border-border bg-card/80 px-2 py-0.5 font-mono text-[9px] text-muted-foreground pointer-events-none select-none z-20">
            SPRING BOOT
          </div>
          <div className="absolute left-6 top-6 border border-border bg-card/80 px-2 py-0.5 font-mono text-[9px] text-muted-foreground pointer-events-none select-none z-20">
            AWS CLOUD
          </div>

          {/* Main portrait grid box */}
          <div className="relative crosshair-box p-4 w-[280px] md:w-[320px] h-[340px] md:h-[400px] bg-card/20 backdrop-blur-sm shadow-2xl">
            <div className="crosshair-box-child absolute inset-0 pointer-events-none" />

            <div className="w-full h-full overflow-hidden grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700 relative group">
              <img
                src={profileImageUrl}
                alt="Manish Kumar"
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              {/* Subtle technical scanner line */}
              <div className="absolute inset-x-0 h-px bg-primary/40 top-0 shadow-[0_0_10px_#00F5FF] animate-[scan_6s_infinite_linear]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Hero Metrics */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={animTextRightVariants(0.4)}
        className="absolute bottom-6 right-6 md:right-12 hidden sm:flex items-center gap-8 font-mono text-[10px] text-muted-foreground"
      >
        
      </motion.div>
    </section>
  );
};

export default Hero;
