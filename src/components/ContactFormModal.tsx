import React, { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { logger } from "@/lib/logger";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("EmailJS credentials not configured");
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Manish Kumar",
          to_email: "kumamanish2083@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    } catch (error) {
      logger.error("ContactFormModal", "Email send failed", error);
      // Fallback log to screen
      toast.info("Sending failed (local dev). Message printed in logs.");
      logger.info("ContactFormModal", "Simulated Message content", formData);
      toast.success("Message logged successfully (mock delivery)!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-card border border-border w-full max-w-lg p-8 crosshair-box neon-glow-cyan"
          >
            {/* Crosshair child element for corner styles */}
            <div className="crosshair-box-child pointer-events-none absolute inset-0" />

            {/* Header */}
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div>
                <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">SYSTEM_LINK</span>
                <h3 className="text-2xl font-serif text-foreground mt-1">Initiate Connection</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:text-primary transition-colors cursor-pointer text-muted-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <label className="block text-[10px] font-mono text-muted-foreground uppercase mb-1">
                  Ident / Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., John Doe"
                  className="w-full bg-background border border-border px-4 py-2 text-sm text-foreground font-mono focus:outline-none focus:border-primary/50 transition-colors"
                />
                {formErrors.name && (
                  <span className="text-[10px] font-mono text-destructive mt-1 block">{formErrors.name}</span>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-mono text-muted-foreground uppercase mb-1">
                  Routing / Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g., john@example.com"
                  className="w-full bg-background border border-border px-4 py-2 text-sm text-foreground font-mono focus:outline-none focus:border-primary/50 transition-colors"
                />
                {formErrors.email && (
                  <span className="text-[10px] font-mono text-destructive mt-1 block">{formErrors.email}</span>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-mono text-muted-foreground uppercase mb-1">
                  Header / Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry / Connection Request"
                  className="w-full bg-background border border-border px-4 py-2 text-sm text-foreground font-mono focus:outline-none focus:border-primary/50 transition-colors"
                />
                {formErrors.subject && (
                  <span className="text-[10px] font-mono text-destructive mt-1 block">{formErrors.subject}</span>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-mono text-muted-foreground uppercase mb-1">
                  Payload / Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message payload here..."
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-2 text-sm text-foreground font-mono focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                {formErrors.message && (
                  <span className="text-[10px] font-mono text-destructive mt-1 block">{formErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-mono uppercase text-xs tracking-wider py-3 mt-2 hover:bg-primary/90 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send size={14} />
                {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default ContactFormModal;
