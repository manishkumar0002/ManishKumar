import { useEffect } from "react";

interface SectionMeta {
  title: string;
  description: string;
}

const sectionMetaMap: Record<string, SectionMeta> = {
  hero: {
    title: "Manish Kumar | Java Full Stack Developer & Software Engineer Portfolio",
    description: "Explore the portfolio of Manish Kumar, a Java Full Stack Developer and Software Engineer. Certified in Microsoft Azure (AZ-900) and skilled in Spring Boot & React."
  },
  about: {
    title: "About Manish Kumar | Java Full Stack Developer Profile",
    description: "Learn about Manish Kumar's background as an Information Technology graduate, his internship experience at Ramraj Technology Solutions, and focus areas."
  },
  skills: {
    title: "Skills & Tech Stack | Manish Kumar - Software Engineer",
    description: "Technical skills and technologies specialized by Manish Kumar: Java, Spring Boot, Hibernate, React.js, MySQL, PostgreSQL, Docker, AWS, Azure, Git."
  },
  projects: {
    title: "Projects Portfolio | Manish Kumar - Full Stack Developer",
    description: "Review software applications built by Manish Kumar, including Rail-IRCTC Railway System, NeuroFit-AI Microservices, and Hirenixa Marketplace."
  },
  achievements: {
    title: "Achievements & Certifications | Manish Kumar",
    description: "Microsoft Azure (AZ-900) Certification, HackerRank Java Certification, and Competitive Programming stats (1000+ problems solved, top 2% LeetCode rank)."
  },
  "ai-profile": {
    title: "AI Profile & Developer FAQ | Manish Kumar System Profile",
    description: "An entity-rich profile optimized for generative AI systems (GEO) and search engines. Includes an SEO-friendly developer FAQ and structural specifications."
  },
  contact: {
    title: "Contact Manish Kumar | Full Stack Developer Opportunities",
    description: "Initiate connection, request source code or demos, or message Manish Kumar directly regarding software engineer and Java developer roles."
  }
};

export const useSeo = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section covers central viewport area
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const meta = sectionMetaMap[id];
          
          if (meta) {
            // Update Title
            document.title = meta.title;
            
            // Update Meta Description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
              metaDescription.setAttribute("content", meta.description);
            }
            
            // Update URL Hash silently (without adding to back button history)
            const currentHash = window.location.hash;
            const newHash = `#${id}`;
            if (currentHash !== newHash) {
              window.history.replaceState(null, "", newHash);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Select sections to observe
    const sections = ["hero", "about", "skills", "projects", "achievements", "ai-profile", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useSeo;
