import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { animTextLeftVariants } from "@/lib/animations";

interface ContactProps {
  setIsContactOpen: (open: boolean) => void;
}

export const Contact = ({ setIsContactOpen }: ContactProps) => {
  return (
    <section id="contact" className="relative border-b border-border overflow-hidden min-h-[420px] flex items-center">
      {/* Layout background Server Room */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/atelier/server_room.png"
          alt="Server Room Blueprint backdrop"
          className="w-full h-full object-cover grayscale opacity-20 contrast-125"
        />
        {/* Cyan gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0A] via-[#090A0A]/90 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-8 items-center py-16"
      >
        {/* Left Text */}
        <motion.div
          variants={animTextLeftVariants(0)}
          className="lg:col-span-8 space-y-6"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-primary block uppercase">
           
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight serif-display uppercase text-foreground">
            Contact
          </h2>
          <p className="text-sm font-mono text-muted-foreground max-w-xl">
            Ready to amplify your technical stack? Reach out directly and let's coordinate.
          </p>

          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs tracking-widest uppercase px-8 py-4 flex items-center gap-3 transition-colors cursor-pointer"
          >
            INITIATE CONNECTION
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
