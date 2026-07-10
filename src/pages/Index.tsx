import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContactFormModal from "@/components/ContactFormModal";
import { useResumeConfig } from "@/hooks/useResumeConfig";
import { useProjects } from "@/hooks/useProjects";
import { useSkills } from "@/hooks/useSkills";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Scale from "@/components/Scale";
import AiProfile from "@/components/AiProfile";
import Contact from "@/components/Contact";
import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  useSeo(); // Initialize dynamic titles and meta descriptions based on viewport scroll
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [resumeFilename, setResumeFilename] = useState<string>("Resume.pdf");
  const [profileImageUrl, setProfileImageUrl] = useState<string>("/images/manish.jpg");
  const [loadingResume, setLoadingResume] = useState(true);
  
  const { getConfig } = useResumeConfig();
  const { projects: dbProjects } = useProjects();
  const { skills: dbSkills } = useSkills();

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const config = await getConfig();
        if (config) {
          setResumeUrl(config.resume_url);
          setResumeFilename(config.resume_filename);
          if (config.profile_image_url) {
            setProfileImageUrl(config.profile_image_url);
          }
        } else {
          setResumeUrl("/Manish_kumar_Resume.pdf");
          setResumeFilename("Manish_kumar_Resume.pdf");
        }
      } catch (error) {
        setResumeUrl("/Manish_kumar_Resume.pdf");
        setResumeFilename("Manish_kumar_Resume.pdf");
      } finally {
        setLoadingResume(false);
      }
    };

    fetchResume();
  }, [getConfig]);

  const handleDownloadResume = () => {
    if (!resumeUrl) return;
    window.open(resumeUrl, "_blank");
  };

  // Original education details from About.tsx
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "Technocrats Institute of Technology",
      location: "Bhopal, Madhya Pradesh",
      duration: "2022 - 2026",
      grade: "CGPA: 8.10/10",
      status: "completed",
      highlights: [
        "Focus on Backend Development & Databases",
        "Active participation in coding competitions",
        "Project-based learning approach",
      ],
    },
    {
      degree: "Senior Secondary (XII)",
      field: "Science Stream",
      institution: "Ramdhari Singh Dinkar High School",
      location: "Bihar",
      duration: "2020 - 2022",
      grade: "Completed",
      status: "completed",
      highlights: ["Physics, Chemistry, Mathematics", "Strong foundation in analytics"],
    },
    {
      degree: "Secondary (X)",
      field: "General Education",
      institution: "P.C. High School",
      location: "Bihar",
      duration: "2019 - 2020",
      grade: "Completed",
      status: "completed",
      highlights: ["Academic excellence", "Developed interest in technology"],
    },
  ];

  // Original highlights details from About.tsx
  const highlights = [
    {
      title: "Backend Development",
      description: "Expert in Java, Spring Boot, and building robust REST APIs",
    },
    {
      title: "Database Management",
      description: "Proficient with MySQL, Oracle DBMS, and query optimization",
    },
    {
      title: "Cloud Technologies",
      description: "Azure certified (AZ-900) with AWS deployment experience",
    },
    {
      title: "AI/ML Knowledge",
      description: "Hands-on with Python, Scikit-learn, and data analysis",
    },
  ];

  // Original achievements details from About.tsx
  const achievements = [
    {
      title: "Microsoft Azure Certified",
      subtitle: "Azure Fundamentals (AZ-900)",
      badge: "Certified",
      description: "Certified in cloud computing fundamentals, Azure services, security, and compliance.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "1000+ Problems Solved",
      subtitle: "Competitive Programming",
      badge: "Elite",
      description: "Solved over 1000 coding problems across LeetCode, HackerRank, and CodeForces.",
      color: "from-teal-500 to-primary",
    },
    {
      title: "Global Rank 1650",
      subtitle: "LeetCode Weekly Contest",
      badge: "Top 2%",
      description: "Achieved a global ranking of 1650 in LeetCode Weekly Contest among thousands of participants.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "HackerRank Java Certified",
      subtitle: "Problem Solving & Java",
      badge: "Certified",
      description: "Earned Java certification demonstrating proficiency in core Java concepts and problem-solving.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  // Raw project list exactly matching the user's content
  const projects = [
    {
      id: "rail-irctc",
      title: "Rail-IRCTC",
      category: "Full Stack // Java",
      description: "Built a full-stack IRCTC-style Railway Reservation System using Spring Boot, Java, React.js, and MySQL. Implemented JWT authentication, seat availability management, booking workflow, passenger handling, payment integration, and live train status APIs. Designed using layered architecture and REST APIs with production-ready configuration and Docker deployment.",
      tech_stack: ["Java", "Spring Boot", "React.js", "MySQL", "JWT"],
      metrics: "Secure authentication using JWT",
      highlights: [
        "Secure authentication using JWT",
        "Dynamic seat availability management with transactional handling",
        "View all 6 highlights"
      ],
      image_url: "/images/project_rail_irctc.png",
      github_url: "https://github.com/manishkumar0002/Rail-IRCTC-Frontend",
      live_url: "https://rail-irctc-frontend.vercel.app/home"
    },
    {
      id: "neurofit-ai",
      title: "NeuroFit-AI",
      category: "Spring Boot Microservices // Private",
      description: "Production-oriented Spring Boot microservices system featuring API Gateway (Spring Cloud Gateway), Eureka Service Discovery, Config Server, and core business services (UserService, ActivityService, AIService). Integrates Keycloak JWT authentication and a React + Vite frontend dashboard.",
      tech_stack: ["Spring Boot", "Spring Cloud Gateway", "Eureka Discovery", "Config Server", "Keycloak", "React.js", "Vite"],
      metrics: "Microservices Architecture",
      highlights: [
        "API Gateway routing with rate limiting via Redis",
        "Discovery-based service communication via LoadBalanced WebClient",
        "Keycloak-integrated security with centralized token validation",
        "Hybrid local/cloud deployment support with Docker Compose"
      ],
      github_url: "https://github.com/manishkumar0002/NeuroFit-AI",
      live_url: "https://neurofitai-dusky.vercel.app/",
      image_url: "/images/atelier/server_room.png"
    },
    {
      id: "hirenixa",
      title: "HIRENIXA",
      category: "Full Stack Marketplace // Production",
      description: "AI-powered marketplace platform connecting students and professionals with freelancers, services, and career opportunities. Features a Jobs Board, professional Services catalog, mock interviews, and automated research assist tools.",
      tech_stack: ["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "TanStack Query", "Zod"],
      metrics: "Freelance & Digital Services Marketplace",
      highlights: [
        "Live site: https://hirenixa.vercel.app/",
        "Structured Job Board and Services catalog with role-based dashboard",
        "Placement Assistance (interview prep, company-wise guidelines)",
        "Research assistance with layout formatting and plagiarism scanner"
      ],
      github_url: "https://github.com/manishkumar0002/HIRENIXA",
      live_url: "https://hirenixa.vercel.app/",
      image_url: "/images/project_hirenixa.png"
    },
    {
      id: "evalyze-ai",
      title: "Evalyze-AI",
      category: "Student Assessment SaaS // Production",
      description: "Assessment SaaS engine featuring a role-based SaaS dashboard (Student, Parent, Admin). Evaluates student performance using a Python Flask ML prediction engine and automated document question parsing workflows.",
      tech_stack: ["React", "TypeScript", "Vite", "Spring Boot", "Spring Security", "Flask", "PostgreSQL"],
      metrics: "AI Student Assessment Engine",
      highlights: [
        "Live Client URL: https://evalyze-ai-three.vercel.app/login",
        "ML inference client using Flask with circuit breaker retry and fallback logic",
        "Admin analytics dashboard showing weak-subject analysis and KPIs",
        "Parent-child linkage system with unlink safety locks"
      ],
      github_url: "https://github.com/manishkumar0002/Evalyze-AI",
      live_url: "https://evalyze-ai-three.vercel.app/login",
      image_url: "/images/project_evalyze_ai.png"
    },
    {
      id: "hungry-hub-mess",
      title: "Hungry Hub- Mess Management",
      category: "Mess Management // Featured",
      description: "A comprehensive backend system for managing mess operations including meal booking, feedback collection, and user authentication with JWT.",
      tech_stack: ["Spring Boot", "MySQL", "JWT", "REST API", "AWS EC2"],
      metrics: "30% improvement in response time through optimized queries",
      highlights: [
        "30% improvement in response time through optimized queries",
        "JWT-based authentication for secure access",
        "View all 4 highlights"
      ],
      image_url: "/images/atelier/hungry_hub.png",
      github_url: "https://github.com/manishkumar0002/Hungry_Hub",
      live_url: ""
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      category: "React // Portfolio",
      description: "A modern, fully responsive personal portfolio built with React, Tailwind CSS, and Framer Motion. Designed to showcase projects, skills, achievements, and contact details with smooth animations and an interactive UI.",
      tech_stack: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
      metrics: "Responsive multi-page layout",
      highlights: [
        "Responsive multi-page layout with smooth transitions and micro-interactions",
        "Advanced project cards with image previews, video modals, and feature popups",
        "View all 5 highlights"
      ],
      image_url: "/images/placeholder.svg",
      github_url: "https://github.com/manishkumar0002/Personal_Portfolio",
      live_url: ""
    },
    {
      id: "yumxpress-food",
      title: "YumXpress - Food Delivery App",
      category: "Food Delivery // Desktop",
      description: "A full-featured food delivery application supporting multiple user roles including sellers, delivery staff, and customers with real-time order tracking.",
      tech_stack: ["Java", "Oracle DBMS", "JDBC", "Swing UI"],
      metrics: "Desktop Application using Java Swing",
      highlights: [
        "Based on Desktop Application using Java Swing",
        "Multi-role operations with role-based access control",
        "View all 5 highlights"
      ],
      image_url: "/images/atelier/hungry_hub.png",
      github_url: "https://github.com/manishkumar0002/YumXpress",
      live_url: ""
    },
    {
      id: "student-mania",
      title: "Student Mania- Student Performance Predictor",
      category: "AI/ML // Predictor",
      description: "An AI/ML project that predicts student academic performance using logistic regression, featuring interactive visualizations and a Streamlit dashboard.",
      tech_stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
      metrics: "85% prediction accuracy on 10K+ records",
      highlights: [
        "85% prediction accuracy on 10K+ records",
        "Confusion matrix and ROC curve analysis",
        "View all 4 highlights"
      ],
      image_url: "/images/atelier/yumxp.png",
      github_url: "https://github.com/manishkumar0002/Student_Mania",
      live_url: ""
    },
    {
      id: "vyapaarsetu",
      title: "VyapaarSetu",
      category: "Spring Microservices // Design",
      description: "Distributed microservices platform refactored from monolith, targeting retail B2B operations. Divided into distinct domains: User, Shop, Product Catalog, Order processing, and Khata/Credit management with a database-per-service isolation model.",
      tech_stack: ["Spring Cloud Gateway", "Spring Security", "Eureka", "Redis", "RabbitMQ", "Kafka", "PostgreSQL"],
      metrics: "Retail Microservices Architecture",
      highlights: [
        "Shared-nothing architecture with separate database instances per service",
        "Token propagation and internal service verification via API Gateway",
        "Asynchronous inter-service transaction synchronizations using RabbitMQ/Kafka",
        "Autonomous Khata/Credit ledger entries triggered via OrderCreated events"
      ],
      github_url: "https://github.com/manishkumar0002/VyapaarSetu",
      live_url: "",
      image_url: "/images/atelier/rail_irctc.png"
    },
    {
      id: "novaledger",
      title: "NovaLedger",
      category: "FinTech // Blockchain // AI",
      description: "Enterprise-grade Voucher & Expense Management Platform integrating mobile UI, Spring Boot API services, Python FastAPI OCR fraud detection, and a Hyperledger Fabric ledger audit trail.",
      tech_stack: ["Spring Boot", "FastAPI", "React Native", "Hyperledger Fabric", "PostgreSQL", "EasyOCR", "Docker"],
      metrics: "Tamper-Proof Expense Ledger",
      highlights: [
        "FastAPI AI verification service with EasyOCR, OpenCV, and isolation forests",
        "Tamper-proof smart contracts (chaincode) logging voucher and transaction audits",
        "Axios API client built with automatic JWT token refresh interceptors",
        "Razorpay payment gateway integration for merchant settlements"
      ],
      github_url: "https://github.com/manishkumar0002/NovaLedger",
      live_url: "",
      image_url: "/images/atelier/hungry_hub.png"
    }
  ];

  // Raw list of skills from old code
  const technicalSkills = [
    { name: "Java", icon: "☕", color: "#f89820" },
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "Spring Boot", icon: "🍃", color: "#6db33f" },
    { name: "Hibernate", icon: "🗄️", color: "#b5b5b5" },
    { name: "MySQL", icon: "🐬", color: "#00758f" },
    { name: "Oracle DB", icon: "🔴", color: "#f80000" },
    { name: "Docker", icon: "🐳", color: "#2496ed" },
    { name: "AWS", icon: "☁️", color: "#ff9900" },
    { name: "Azure", icon: "🔷", color: "#0089d6" },
    { name: "Git", icon: "📦", color: "#f05032" },
    { name: "REST APIs", icon: "🔗", color: "#00a3e0" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" }
  ];

  const aiMlSkills = [
    { name: "NumPy" },
    { name: "Pandas" },
    { name: "Scikit-learn" },
    { name: "Matplotlib" },
    { name: "Streamlit" }
  ];

  const coreCS = [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Low-Level Design",
    "Supervised Learning",
    "Unsupervised Learning"
  ];

  const tools = [
    { name: "Postman" },
    { name: "VS Code" },
    { name: "IntelliJ IDEA" },
    { name: "MySQL Workbench" },
    { name: "Git Bash" }
  ];

  // Handle hash scrolling on page load/mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 200);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden selection:bg-primary/30 selection:text-white transition-colors duration-300">
      {/* Shell Layout: Top Nav */}
      <Navigation />

      {/* Main Content Area */}
      <main className="relative z-10 pt-20">
        
        <Hero profileImageUrl={profileImageUrl} handleDownloadResume={handleDownloadResume} />

        <About highlights={highlights} education={education} handleDownloadResume={handleDownloadResume} />

        <Projects projects={projects} setIsContactOpen={setIsContactOpen} />

        <Skills technicalSkills={technicalSkills} coreCS={coreCS} aiMlSkills={aiMlSkills} tools={tools} />

        <Achievements achievements={achievements} />

        <Scale />

        <AiProfile />

        <Contact setIsContactOpen={setIsContactOpen} />

        {/* FOOTER */}
        <footer className="py-16 px-6 md:px-12 border-t border-border/20 bg-background/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-[11px] text-muted-foreground">
            
            {/* Left Info */}
            <div className="space-y-2">
              <h3 className="serif-display text-xl font-bold text-foreground tracking-widest uppercase">
                Manish Kumar
              </h3>
              <p className="text-[10px] text-muted-foreground/60">
                © {new Date().getFullYear()} MANISH KUMAR — ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Mid Channels */}
            <div className="flex gap-6 flex-wrap">
              <a
                href="https://github.com/manishkumar0002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/manishkumar022"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:kumamanish2083@gmail.com"
                className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]"
              >
                EMAIL
              </a>
            </div>



          </div>
        </footer>

      </main>

      {/* Connection Popup Dialog */}
      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Index;
