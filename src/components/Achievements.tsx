import { motion } from "framer-motion";
import { animTextLeftVariants, animTextRightVariants } from "@/lib/animations";

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements = ({ achievements }: AchievementsProps) => {
  return (
    <section id="achievements" className="border-b border-border relative px-6 md:px-12 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* Header */}
        <motion.div
          variants={animTextLeftVariants(0)}
          className="pb-8 border-b border-border/40 max-w-xl"
        >
          <span className="font-mono text-[9px] tracking-widest text-primary block uppercase mb-2"></span>
          <h2 className="text-4xl md:text-6xl font-bold leading-none serif-display uppercase text-foreground">Achievements</h2>
          <div className="w-20 h-px bg-primary/60 mt-4" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={idx % 2 === 0 ? animTextLeftVariants(idx * 0.1) : animTextRightVariants(idx * 0.1)}
              className="border border-border p-6 bg-card/20 space-y-4 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] text-primary/70 uppercase"></span>
                <span className="border border-border bg-background px-2 py-0.5 font-mono text-[8px] text-foreground uppercase">
                  {ach.badge}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground leading-tight">{ach.title}</h3>
              <p className="font-mono text-[11.5px] text-primary mt-1 font-semibold">{ach.subtitle}</p>
              <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
