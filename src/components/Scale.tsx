import { motion } from "framer-motion";
import { animImageLeftVariants, animTextRightVariants } from "@/lib/animations";

export const Scale = () => {
  return (
    <section className="border-b border-border relative px-6 md:px-12 py-24 bg-card/20 backdrop-blur-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Image: Microchip blueprint */}
        <motion.div
          variants={animImageLeftVariants}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="relative crosshair-box p-2 bg-card/10 w-full max-w-md">
            <div className="crosshair-box-child absolute inset-0 pointer-events-none" />
            <div className="grayscale contrast-[1.05] border border-border">
              <img
                src="/images/atelier/microchip_blueprint.png"
                alt="Built for Scale Blueprint"
                className="w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Info: Description */}
        <motion.div
          variants={animTextRightVariants(0)}
          className="lg:col-span-6 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-none serif-display">
            Built for <span className="serif-italic font-light text-primary">Scale.</span>
          </h2>

          <div className="w-16 h-px bg-primary/60" />

          <p className="text-sm text-muted-foreground leading-relaxed font-mono">
            My methodology integrates rigorous architectural standards with fluid adaptive systems. I don't just write code; I engineer environments where data flows with absolute zero friction, optimized for both horizontal and vertical elasticity.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Scale;
