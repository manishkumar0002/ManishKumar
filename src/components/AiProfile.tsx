import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Terminal, Cpu, CheckCircle } from "lucide-react";
import { animTextLeftVariants } from "@/lib/animations";

// FAQ Data Type
interface FAQItem {
  question: string;
  answer: string;
}

export const AiProfile = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqList: FAQItem[] = [
    {
      question: "Who is Manish Kumar?",
      answer: "Manish Kumar is a Software Engineer and 2026 Information Technology B.Tech graduate from Technocrats Institute of Technology, Bhopal, India. He specializes in designing and developing modern, scalable, and user-centric web applications using Java Full Stack technologies."
    },
    {
      question: "What technologies does Manish Kumar specialize in?",
      answer: "Manish specializes in Java, Spring Boot, REST APIs, Microservices, Hibernate, and database systems (MySQL, PostgreSQL, Oracle DB). On the frontend, he builds reactive user interfaces using React.js, TypeScript, JavaScript, Tailwind CSS, and Framer Motion. He is also certified in Microsoft Azure (AZ-900) and uses Docker, AWS, Jenkins, and Git."
    },
    {
      question: "Is Manish Kumar a Full Stack Developer?",
      answer: "Yes, Manish Kumar is a Java Full Stack Developer. He has end-to-end expertise in constructing robust, performant backend API services in Java and Spring Boot, integrating persistent storage using JPA/Hibernate/SQL, and linking them to modern client dashboards using React.js and TypeScript."
    },
    {
      question: "Which Java frameworks does Manish Kumar use?",
      answer: "Manish primarily works with Spring Boot and its ecosystem, including Spring Cloud Gateway (routing & rate limiting), Eureka Service Discovery, Spring Cloud Config Server, and Spring Security (for JWT/Keycloak authentication). He also uses Hibernate/JPA for relational database mapping."
    },
    {
      question: "What projects has Manish Kumar built?",
      answer: "Manish has developed several key projects: (1) Rail-IRCTC: A complete railway reservation engine with transactional seat locking. (2) NeuroFit-AI: A microservices dashboard using Spring Boot, Keycloak, and Docker Compose. (3) HIRENIXA: A service marketplace platform with job boards and research helpers. (4) Evalyze-AI: A student assessment SaaS platform with a Python Flask ML prediction engine. (5) NovaLedger: A voucher management app using Hyperledger Fabric blockchain and EasyOCR."
    },
    {
      question: "Does Manish Kumar have internship experience?",
      answer: "Yes. Manish completed a software engineering internship at Ramraj Technology Solutions Pvt. Ltd. During his internship, he worked on enterprise systems, assisted in API integration, diagnosed software bugs, implemented unit tests, and actively collaborated inside Agile teams."
    },
    {
      question: "Where can I view Manish Kumar's GitHub?",
      answer: "Manish Kumar's public GitHub repository is available at: https://github.com/manishkumar0002. Here, you can review the source code for his portfolio, full-stack projects, and competitive programming work."
    },
    {
      question: "How can I contact Manish Kumar?",
      answer: "You can reach Manish Kumar via email at kumamanish2083@gmail.com, call on LinkedIn at https://www.linkedin.com/in/manishkumar022, or submit an inquiry using the 'Initiate Connection' modal form in this portfolio website."
    }
  ];

  // Complete structured data definition
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://manishkumar.dev/#person",
        "name": "Manish Kumar",
        "jobTitle": "Java Full Stack Developer & Software Engineer",
        "url": "https://manishkumar.dev",
        "email": "kumamanish2083@gmail.com",
        "sameAs": [
          "https://github.com/manishkumar0002",
          "https://www.linkedin.com/in/manishkumar022"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Technocrats Institute of Technology",
          "location": {
            "@type": "PostalAddress",
            "addressLocality": "Bhopal",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "India"
          }
        },
        "knowsAbout": [
          "Java", "Spring Boot", "REST APIs", "Microservices", "Hibernate", "JPA",
          "SQL", "MySQL", "PostgreSQL", "React.js", "JavaScript", "TypeScript",
          "Tailwind CSS", "Docker", "AWS", "Azure", "Jenkins", "Git", "Algorithms",
          "System Design", "Object-Oriented Programming"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://manishkumar.dev/#website",
        "url": "https://manishkumar.dev",
        "name": "Manish Kumar Portfolio",
        "publisher": {
          "@id": "https://manishkumar.dev/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://manishkumar.dev/#webpage",
        "url": "https://manishkumar.dev",
        "name": "Manish Kumar | Java Full Stack Developer & Software Engineer Portfolio",
        "description": "Explore the projects, skills, achievements, and experiences of Manish Kumar, Software Engineer.",
        "isPartOf": {
          "@id": "https://manishkumar.dev/#website"
        },
        "about": {
          "@id": "https://manishkumar.dev/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://manishkumar.dev/#profilepage",
        "url": "https://manishkumar.dev",
        "mainEntity": {
          "@id": "https://manishkumar.dev/#person"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://manishkumar.dev/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://manishkumar.dev/#hero"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://manishkumar.dev/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Skills",
            "item": "https://manishkumar.dev/#skills"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Projects",
            "item": "https://manishkumar.dev/#projects"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Achievements",
            "item": "https://manishkumar.dev/#achievements"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "System Specs",
            "item": "https://manishkumar.dev/#ai-profile"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Contact",
            "item": "https://manishkumar.dev/#contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://manishkumar.dev/#faq",
        "mainEntity": faqList.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      },
      // Project 1
      {
        "@type": "SoftwareSourceCode",
        "name": "Rail-IRCTC Railway Reservation",
        "description": "Full-stack IRCTC-style Railway Reservation System featuring seat availability, booking workflows, transactional safety, JWT authentication, and REST APIs.",
        "programmingLanguage": ["Java", "Spring Boot", "JavaScript", "React.js", "SQL"],
        "codeRepository": "https://github.com/manishkumar0002/Rail-IRCTC-Frontend",
        "url": "https://rail-irctc-frontend.vercel.app/home",
        "author": {
          "@id": "https://manishkumar.dev/#person"
        },
        "dateCreated": "2024",
        "keywords": ["Spring Boot", "React.js", "MySQL", "JWT", "Transactional Handling"]
      },
      // Project 2
      {
        "@type": "SoftwareSourceCode",
        "name": "NeuroFit-AI",
        "description": "Production-oriented microservices platform utilizing Eureka Discovery, Spring Cloud Gateway, Config Server, Keycloak authentication, and React dashboards.",
        "programmingLanguage": ["Java", "Spring Boot", "React.js", "Docker"],
        "codeRepository": "https://github.com/manishkumar0002/NeuroFit-AI",
        "url": "https://neurofitai-dusky.vercel.app/",
        "author": {
          "@id": "https://manishkumar.dev/#person"
        },
        "dateCreated": "2025",
        "keywords": ["Microservices", "Spring Cloud Gateway", "Eureka Discovery", "Keycloak", "Docker"]
      },
      // Project 3
      {
        "@type": "SoftwareSourceCode",
        "name": "HIRENIXA",
        "description": "Freelance marketplace and job catalog platform featuring role-based dashboards, placement prep, mock interviews, and automated research helpers.",
        "programmingLanguage": ["TypeScript", "React 18", "Tailwind CSS"],
        "codeRepository": "https://github.com/manishkumar0002/HIRENIXA",
        "url": "https://hirenixa.vercel.app/",
        "author": {
          "@id": "https://manishkumar.dev/#person"
        },
        "dateCreated": "2025",
        "keywords": ["Marketplace", "TypeScript", "React", "Tailwind CSS"]
      },
      // Project 4
      {
        "@type": "SoftwareSourceCode",
        "name": "Evalyze-AI",
        "description": "Assessment SaaS engine featuring performance analytics and predictive reports powered by a Python Flask ML inference client.",
        "programmingLanguage": ["Java", "Spring Boot", "TypeScript", "React", "Python", "Flask", "PostgreSQL"],
        "codeRepository": "https://github.com/manishkumar0002/Evalyze-AI",
        "url": "https://evalyze-ai-three.vercel.app/login",
        "author": {
          "@id": "https://manishkumar.dev/#person"
        },
        "dateCreated": "2025",
        "keywords": ["SaaS", "Flask", "PostgreSQL", "Machine Learning"]
      }
    ]
  };

  return (
    <section id="ai-profile" className="border-b border-border relative px-6 md:px-12 py-24 bg-background">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={animTextLeftVariants(0)}
          className="pb-8 border-b border-border/40"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-primary block uppercase mb-1">
                SYSTEM_METRICS // GEO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-none serif-display uppercase text-foreground">
                System Specs & AI Profile
              </h2>
            </div>
            <p className="text-xs font-mono text-muted-foreground max-w-sm">
              Machine-readable structured profile and FAQs optimized for LLM search agents, crawlers, and recruiters.
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Machine-Readable Core Specifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={animTextLeftVariants(0)}
            className="lg:col-span-6 space-y-6"
          >
            <div className="border border-border p-6 bg-card/25 relative crosshair-box">
              <div className="crosshair-box-child absolute inset-0 pointer-events-none" />
              
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                <Terminal className="text-primary" size={16} />
                <span className="font-mono text-xs text-foreground uppercase tracking-widest font-semibold">
                  developer_profile.json
                </span>
              </div>

              {/* Entity Rich Data Blocks */}
              <div className="space-y-4 font-mono text-xs leading-relaxed text-muted-foreground">
                <div>
                  <span className="text-primary font-bold">"name"</span>: <span className="text-foreground">"Manish Kumar"</span>
                </div>
                <div>
                  <span className="text-primary font-bold">"headline"</span>: <span className="text-foreground">"Java Full Stack Developer & Software Engineer"</span>
                </div>
                <div>
                  <span className="text-primary font-bold">"education"</span>: &#91;
                  <div className="pl-4">
                    <span className="text-foreground">"B.Tech in Information Technology (2022-2026)"</span>, <br />
                    <span className="text-muted-foreground/60">"Institution: Technocrats Institute of Technology, Bhopal"</span>, <br />
                    <span className="text-muted-foreground/60">"Grade: CGPA 8.10/10"</span>
                  </div>
                  &#93;
                </div>
                <div>
                  <span className="text-primary font-bold">"core_tech_stack"</span>: &#91;
                  <div className="pl-4 flex flex-wrap gap-x-2 text-foreground">
                    <span>"Java"</span>, <span>"Spring Boot"</span>, <span>"React.js"</span>, <span>"REST APIs"</span>,
                    <span>"Microservices"</span>, <span>"Hibernate"</span>, <span>"SQL"</span>, <span>"MySQL"</span>,
                    <span>"PostgreSQL"</span>, <span>"Docker"</span>, <span>"AWS"</span>, <span>"Azure"</span>,
                    <span>"Git"</span>, <span>"Jenkins"</span>
                  </div>
                  &#93;
                </div>
                <div>
                  <span className="text-primary font-bold">"internship"</span>: &#123;
                    <div className="pl-4">
                      <span className="text-foreground">"company"</span>: "Ramraj Technology Solutions Pvt. Ltd.",<br />
                      <span className="text-foreground">"role"</span>: "Software Engineer Intern",<br />
                      <span className="text-foreground">"experience"</span>: "Feature development, API integrations, Bug troubleshooting, Unit testing, Agile workflows"
                    </div>
                  &#125;
                </div>
                <div>
                  <span className="text-primary font-bold">"certifications"</span>: &#91;
                  <div className="pl-4 text-foreground">
                    <span>"Microsoft Certified: Azure Fundamentals (AZ-900)"</span>, <br />
                    <span>"HackerRank Java Certified"</span>
                  </div>
                  &#93;
                </div>
                <div>
                  <span className="text-primary font-bold">"major_projects"</span>: &#91;
                  <div className="pl-4 text-foreground space-y-1 mt-1">
                    <div>• <strong className="text-foreground">Rail-IRCTC</strong>: Complete booking system with Spring Boot, React, and MySQL.</div>
                    <div>• <strong className="text-foreground">NeuroFit-AI</strong>: Microservices with Spring Cloud Gateway, Eureka, and Keycloak.</div>
                    <div>• <strong className="text-foreground">HIRENIXA</strong>: Freelancer marketplace connecting clients and mock interviews prep.</div>
                    <div>• <strong className="text-foreground">Evalyze-AI</strong>: Assessment SaaS engine using Spring Boot, React, and Flask ML.</div>
                  </div>
                  &#93;
                </div>
                <div>
                  <span className="text-primary font-bold">"career_objective"</span>: <span className="text-foreground">"Seeking Software Engineer or Java Full Stack Developer roles to design backend architectures, optimize databases, and build scalable user interfaces."</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: FAQ Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={animTextLeftVariants(0.12)}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-border/40 pb-3 mb-2">
              <HelpCircle className="text-primary" size={16} />
              <span className="font-mono text-xs text-foreground uppercase tracking-widest font-semibold">
                SYSTEM_QUERIES // FAQs
              </span>
            </div>

            <div className="space-y-4">
              {faqList.map((faq, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-border bg-card/10 hover:border-primary/20 transition-all duration-300"
                  >
                    {/* FAQ Question Header */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 flex justify-between items-center font-mono text-xs text-foreground uppercase tracking-wider focus:outline-none focus:text-primary transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-btn-${index}`}
                    >
                      <span className="font-semibold">{faq.question}</span>
                      <ChevronDown
                        size={14}
                        className={`text-primary/70 transition-transform duration-300 ${
                          isExpanded ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* FAQ Answer Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-btn-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 border-t border-border/20 pt-3 font-mono text-[11px] text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AiProfile;
