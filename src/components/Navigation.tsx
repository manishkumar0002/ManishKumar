import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { name: "Home", targetId: "hero" },
  { name: "About", targetId: "about" },
  { name: "Skills", targetId: "skills" },
  { name: "Projects", targetId: "projects" },
  { name: "Achievements", targetId: "achievements" },
  { name: "Contact", targetId: "contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (targetId: string) => {
    setIsOpen(false);
    
    // If not on homepage, redirect to homepage first
    if (location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border ${
        scrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="serif-display text-2xl font-bold tracking-wider text-foreground">
            Manish Kumar
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollToSection(item.targetId)}
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer relative py-1 focus:outline-none focus:text-primary"
              aria-label={`Scroll to ${item.name}`}
            >
              {item.name}
            </button>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer border border-border bg-card/20 rounded-full focus:outline-none focus:border-primary/50"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer border border-border bg-card/20 rounded-full focus:outline-none focus:border-primary/50"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-foreground cursor-pointer focus:outline-none focus:text-primary"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[100%] left-0 right-0 border-b border-border bg-background py-6 px-8 flex flex-col gap-4 shadow-lg md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.targetId)}
                className="font-mono text-sm tracking-widest text-muted-foreground hover:text-primary text-left py-2 border-b border-border/40 w-full cursor-pointer flex items-center justify-between focus:outline-none focus:text-primary"
                aria-label={`Scroll to ${item.name}`}
              >
                {item.name}
                <ArrowUpRight size={14} className="text-primary/60" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navigation;
