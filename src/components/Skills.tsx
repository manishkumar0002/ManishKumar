import { motion } from "framer-motion";
import { animTextLeftVariants, animTextRightVariants } from "@/lib/animations";

interface SkillItem {
  name: string;
  icon?: string;
}

interface SkillsProps {
  technicalSkills: SkillItem[];
  coreCS: string[];
  aiMlSkills: SkillItem[];
  tools: SkillItem[];
}

export const Skills = ({ technicalSkills, coreCS, aiMlSkills, tools }: SkillsProps) => {
  return (
    <section id="skills" className="border-b border-border relative px-6 md:px-12 py-24 bg-card/20 backdrop-blur-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* Header */}
        <motion.div
          variants={animTextLeftVariants(0)}
          className="pb-8 border-b border-border/40"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-none serif-display uppercase text-foreground">Skills</h2>
          </div>
          <div className="h-0.5 bg-primary/80 mt-4 w-32 shadow-[0_0_8px_#00F5FF]" />
        </motion.div>

        {/* Core Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {technicalSkills.map((s, idx) => (
            <motion.div
              key={idx}
              variants={idx % 2 === 0 ? animTextLeftVariants(idx * 0.05) : animTextRightVariants(idx * 0.05)}
              className="border border-border p-4 bg-card/25 flex flex-col items-center gap-3 hover:border-primary/30 transition-colors duration-300"
            >
              <span className="text-3xl">{s.icon}</span>
              <span className="font-mono text-xs text-foreground font-semibold text-center">{s.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Core CS Concepts and Tools */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-border/40 pt-16">
          {/* CS Concepts */}
          <motion.div
            variants={animTextLeftVariants(0.15)}
            className="space-y-6 md:col-span-2"
          >
            <h4 className="text-lg font-serif font-bold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Core CS Concepts
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {coreCS.map((concept, idx) => (
                <div key={idx} className="border border-border p-3 bg-card/5 font-mono text-[11px] text-muted-foreground">
                  {concept}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & AI-ML */}
          <motion.div
            variants={animTextRightVariants(0.2)}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-serif font-bold text-foreground flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                AI & Machine Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {aiMlSkills.map((skill, idx) => (
                  <span key={idx} className="border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h4 className="text-lg font-serif font-bold text-foreground flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Tools & Environment
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span key={idx} className="border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
