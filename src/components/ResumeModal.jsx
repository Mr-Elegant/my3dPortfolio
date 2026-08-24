import { useEffect, useState } from "react";

const ResumeModal = ({ onClose }) => {
  const [copiedText, setCopiedText] = useState("");

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const skillsData = {
    "AI & LLM Architecture": ["OpenRouter (Claude, GPT, DeepSeek)", "Ollama (Local LLMs)", "Vercel AI SDK", "Token Optimization", "Tool Calling"],
    "Agentic Dev Tools": ["Google Antigravity", "Cursor IDE", "GitHub Copilot", "Codex", "Prompt Engineering", "Agentic Workflows"],
    Frontend: ["React.js", "Next.js (App Router)", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "shadcn/ui", "Responsive UI"],
    Backend: ["Node.js (Event Loop, Async/Await)", "Express.js", "REST API Architecture", "Microservices", "Socket.IO"],
    Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
    "Security & Auth": ["JWT", "OAuth 2.0", "RBAC", "Passport.js", "HMAC-SHA256 Webhook Validation", "bcrypt Hashing", "Input Sanitization"],
    "Databases & Caching": ["MongoDB (Aggregation, Indexing)", "PostgreSQL & MySQL (Schema Design, SQL CRUD)", "Redis (Caching, Pub/Sub)"],
    "Cloud & DevOps": ["AWS (EC2, SES)", "Docker", "Kubernetes", "Nginx Reverse Proxy", "PM2", "Git/GitHub CI/CD Pipelines", "Vercel"],
    "CMS & Web SEO": ["WordPress (Custom Themes, Plugins, Elementor, WooCommerce)", "Technical SEO", "Core Web Vitals", "Search Console"],
    "Testing & QA": ["Jest (Unit & Integration Testing)", "Code Reviews", "Debugging & Performance Profiling"]
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "Shree Vishnupriya Finance and Leasing Limited",
      location: "New Delhi",
      date: "May 2025 – Apr 2026",
      tag: "Fintech | NBFC — Full-time",
      bullets: [
        "Architected and delivered an end-to-end Loan Origination & Management System (LOMS) featuring a React frontend and modular Node.js/Express services, managing automated EMI calculation, credit scoring, and disbursement workflows compliant with RBI NBFC guidelines.",
        "Engineered high-throughput REST APIs and custom Express middleware for JWT authentication, role-based access control (RBAC), rate-limiting, and structured error handling for reliable request processing.",
        "Implemented an automated LLM tool-calling layer to orchestrate real-time data sync with Zoho CRM/Books and dispatch automated WhatsApp borrower notifications across loan lifecycles, optimizing token usage via structured prompt templates.",
        "Maintained database integrity across MongoDB and relational stores, deployed high-availability infrastructure on AWS Linux (Nginx, PM2) for three platforms, and accelerated feature delivery cycles utilizing modern AI development tooling (Google Antigravity, Cursor, GitHub Copilot)."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "MindGeeks Tech LLP",
      location: "New Delhi",
      date: "Mar 2022 – Dec 2024",
      tag: "Full-time",
      bullets: [
        "Developed and maintained 15+ production MERN applications (React, Node.js/Express, MongoDB) serving high-concurrency traffic with high availability.",
        "Implemented secure authentication flows using JWT access/refresh tokens, RBAC permissions, and bcrypt password encryption; authored automated Jest test suites for critical business logic.",
        "Optimized MongoDB queries via indexing and aggregation pipelines, executed schema design across SQL and NoSQL databases, and collaborated in Agile sprint cycles with CI/CD deployment pipelines."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "AMS Web Solutions Pvt. Ltd.",
      location: "Rohtak",
      date: "Jan 2021 – Jun 2021",
      tag: "Internship",
      bullets: [
        "Built data-driven PHP (OOP/MVC) web applications with strict input validation, parameterized queries, and SQL injection prevention mechanisms."
      ]
    }
  ];

  const projects = [
    {
      name: "DevNet — Developer Networking Platform",
      linkText: "devnet.co.in",
      link: "https://devnet.co.in",
      github: "https://github.com/Mr-Elegant/DevNet",
      githubText: "GitHub Repo",
      tech: "React, Vite, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB, Socket.IO, Redis, AWS EC2, Nginx, PM2, Razorpay",
      points: [
        "Engineered a full-stack developer community platform in React and Node.js/Express featuring real-time 1-on-1 chat (Socket.IO) with typing indicators, read receipts, and Cloudinary media delivery scaled via Redis Pub/Sub.",
        "Built developer matchmaking integrating GitHub OAuth stats, tiered subscriptions via Razorpay with HMAC-SHA256 webhook validation, and an interactive Markdown community feed."
      ]
    },
    {
      name: "DevNet Chat — Multi-Model AI Workspace",
      linkText: "dev-net-chat.vercel.app",
      link: "https://dev-net-chat.vercel.app",
      github: "https://github.com/Mr-Elegant/DevNet-Chat",
      githubText: "GitHub Repo",
      tech: "Next.js 16, React 19, TypeScript, OpenRouter, Ollama, Vercel AI SDK, Better Auth, Prisma, PostgreSQL, Redis, TanStack Query, shadcn/ui",
      points: [
        "Built a full-stack streaming AI workspace using Next.js 16 (App Router), React 19, and TypeScript with Vercel AI SDK, OpenRouter (Claude 3.5 Sonnet, GPT-4o, DeepSeek), and local Ollama inference fallback.",
        "Engineered token usage optimization, context window pruning, semantic response caching via Redis, persistent chat histories with Prisma ORM + PostgreSQL, and a responsive shadcn/ui interface."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto print:static print:bg-white print:p-0 print:overflow-visible animate-[fadeIn_0.2s_ease-out]">
      {/* Modal Card */}
      <div 
        id="resume-print-area" 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black-100 border border-white-50/10 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col gap-8 print:max-h-none print:overflow-visible print:border-none print:bg-white print:text-black print:p-0 print:shadow-none"
      >
        
        {/* Floating Tool Bar (Hidden on print) */}
        <div className="flex items-center justify-between sticky top-0 bg-black-100 py-3 border-b border-white-50/10 z-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <h2 className="text-xl font-bold font-mono text-[#00f0ff]">PREET_KARWAL_RESUME.PDF</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold font-mono bg-white text-black hover:bg-[#00f0ff] hover:text-black transition-colors rounded-lg cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white-50 hover:text-white bg-black-200 rounded-lg border border-white-50/10 cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copy confirmation toast (Hidden on print) */}
        {copiedText && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-[#00f0ff] to-[#7209b7] text-white text-sm font-semibold rounded-full shadow-lg z-[1000] print:hidden">
            Copied {copiedText} to clipboard!
          </div>
        )}

        {/* RESUME BODY */}
        <div className="flex flex-col gap-6 print:text-black">
          
          {/* Header Section */}
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-end border-b pb-6 border-white-50/15 print:border-black/20">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white print:text-black">PREET KARWAL</h1>
              <p className="text-base md:text-lg font-bold mt-1.5 text-[#00f0ff] print:text-black/80">
                Full-Stack &amp; AI Systems Engineer | React.js • Node.js • TypeScript • LLM Architecture
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 text-sm text-white-50 print:text-black gap-1 w-full md:w-auto font-mono text-xs md:text-sm">
              <span className="text-white-50/90 print:text-black">Sonipat, Haryana</span>
              <button 
                onClick={() => copyToClipboard("+918572874207", "phone number")}
                className="hover:text-[#00f0ff] cursor-pointer transition-colors print:pointer-events-none"
              >
                +91-8572874207
              </button>
              <button 
                onClick={() => copyToClipboard("preetverma365@gmail.com", "email address")}
                className="hover:text-[#00f0ff] cursor-pointer transition-colors print:pointer-events-none"
              >
                preetverma365@gmail.com
              </button>
              <div className="flex flex-wrap gap-x-2 gap-y-1 mt-0.5 print:text-black">
                <a href="https://github.com/Mr-Elegant" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline print:text-black font-semibold">github.com/Mr-Elegant</a>
                <span className="text-white-50/30 print:text-black/20">|</span>
                <a href="https://linkedin.com/in/preetkarwal" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline print:text-black font-semibold">linkedin.com/in/preetkarwal</a>
                <span className="text-white-50/30 print:text-black/20">|</span>
                <a href="https://preetportfol.vercel.app" target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline print:text-black font-semibold">preetportfol.vercel.app</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-sm font-bold font-mono text-[#00f0ff] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="mt-2.5 text-white-50/90 print:text-black text-xs md:text-sm leading-relaxed text-justify">
              Full-Stack &amp; AI Systems Engineer with 4+ years of experience designing, architecting, and deploying scalable React.js and Node.js/TypeScript applications alongside production LLM integrations from requirements to AWS production. Proficient in engineering responsive SPAs with Redux Toolkit, crafting secure Express/REST APIs with JWT/OAuth/RBAC, and optimizing database performance across MongoDB, PostgreSQL, and MySQL. Experienced in AI engineering (OpenRouter model routing, Ollama local inference, token &amp; context optimization, Vercel AI SDK), containerized CI/CD workflows (Docker, Nginx, PM2), and automated testing with Jest.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-bold font-mono text-[#00f0ff] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2.5 print:grid-cols-1 text-xs md:text-sm">
              {Object.entries(skillsData).map(([category, list]) => (
                <div key={category} className="leading-snug">
                  <strong className="text-white print:text-black">{category}: </strong>
                  <span className="text-white-50/80 print:text-black/80">{list.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-sm font-bold font-mono text-[#00f0ff] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">
              PROFESSIONAL EXPERIENCE
            </h3>
            <div className="flex flex-col gap-5 mt-3">
              {experiences.map((exp, i) => (
                <div key={i} className={`flex flex-col gap-1 text-xs md:text-sm ${i === 1 ? "print-page-break" : ""}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-bold text-white print:text-black">
                    <span>{exp.title} <span className="text-white-50 font-normal">| {exp.company}</span></span>
                    <span className="text-xs md:text-sm font-semibold font-mono text-[#00ff88] print:text-black/80">{exp.date}</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1.5 flex flex-col gap-1 text-white-50/90 print:text-black/90 text-xs md:text-sm">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-sm font-bold font-mono text-[#00f0ff] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">
              KEY PROJECTS
            </h3>
            <div className="flex flex-col gap-4 mt-3">
              {projects.map((proj, i) => (
                <div key={i} className="flex flex-col gap-1 text-xs md:text-sm">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-bold text-white print:text-black">
                    <span className="text-sm md:text-base">{proj.name}</span>
                    <div className="flex gap-2 text-xs font-semibold print:text-black font-mono">
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline print:text-black">{proj.linkText}</a>
                      {proj.github && (
                        <>
                          <span className="text-white-50/20">|</span>
                          <a href={proj.github} target="_blank" rel="noreferrer" className="text-[#00f0ff] hover:underline print:text-black">{proj.githubText}</a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-[#839cb5] font-medium print:text-black/75">
                    <strong>Tech:</strong> {proj.tech}
                  </div>
                  <ul className="list-disc pl-5 mt-1 flex flex-col gap-1 text-white-50/90 print:text-black/90 text-xs md:text-sm">
                    {proj.points.map((pt, idx) => (
                      <li key={idx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold font-mono text-[#00f0ff] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">
              EDUCATION
            </h3>
            <div className="flex flex-col gap-2 mt-2.5 text-xs md:text-sm">
              <div className="flex justify-between text-white-50 print:text-black">
                <div>
                  <strong className="text-white print:text-black">Master of Computer Applications (MCA)</strong> • Maharshi Dayanand University (MDU), Rohtak
                </div>
                <span className="font-semibold font-mono text-blue-50/90 print:text-black/80">2019 – 2021</span>
              </div>
              <div className="flex justify-between text-white-50 print:text-black">
                <div>
                  <strong className="text-white print:text-black">Bachelor of Computer Applications (BCA)</strong> • Maharshi Dayanand University (MDU), Rohtak
                </div>
                <span className="font-semibold font-mono text-blue-50/90 print:text-black/80">2017 – 2019</span>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div>
            <h3 className="text-sm font-bold font-mono text-[#00f0ff] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">
              CERTIFICATION
            </h3>
            <div className="text-xs md:text-sm text-white-50 mt-2 print:text-black">
              <strong>Networking Fundamentals &amp; Ethical Hacking</strong> • Hi-Tech Institute, Karol Bagh, New Delhi
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
