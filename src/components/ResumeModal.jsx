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

  const handlePrint = () => {
    window.print();
  };

  const skillsData = {
    Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    Frontend: ["React.js", "Next.js", "Redux Toolkit", "React Router", "TanStack Query", "Vite", "Tailwind CSS", "shadcn/ui", "Bootstrap", "Chakra UI", "Framer Motion", "GSAP", "react-tinder-card", "tldraw"],
    Backend: ["Node.js", "Express.js", "REST API Design", "Socket.IO", "JWT", "OAuth 2.0", "Better Auth", "Passport.js", "bcrypt", "Mongoose ODM", "Prisma ORM", "Microservices Architecture", "RBAC", "Node-Cron"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis (Pub/Sub, Caching)"],
    "Cloud & DevOps": ["AWS EC2", "AWS SES", "Nginx (Reverse Proxy)", "PM2", "Vercel", "Cloudflare DNS/SSL", "Linux Server Admin", "Git", "GitHub"],
    "AI & Agentic Dev": ["LLM Integration", "AI SDK (Vercel)", "OpenRouter", "Streaming AI Responses", "Function/Tool Calling", "Multi-Agent Systems", "AI Workflow Automation", "Prompt Engineering", "Agentic Pipelines", "GitHub Copilot", "Claude (Anthropic)", "Cursor IDE", "ChatGPT", "Gemini"],
    "CRM & Integrations": ["Zoho CRM", "Zoho Books", "Zoho Forms", "Zoho People", "WhatsApp Business API", "Razorpay", "Cloudinary"],
    Concepts: ["Agentic System Design", "Microservices Architecture", "RESTful API Design", "System Design", "Agile/Scrum", "RBAC"]
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "Shree Vishnupriya Finance and Leasing Limited",
      location: "Dwarka-11, New Delhi",
      date: "May 2025 – Apr 2026",
      tag: "Fintech | NBFC — Full-time",
      bullets: [
        "Architected and delivered a full-cycle Loan Origination & Management System (LOMS) — covering application intake, automated credit assessment workflows, loan sanction, disbursement management, and EMI repayment tracking, fully aligned with RBI-compliant NBFC operational standards.",
        "Designed and deployed an agentic automation layer using function/tool calling and workflow orchestration — enabling LOMS to autonomously trigger Zoho CRM updates, Zoho Books ledger entries, and WhatsApp borrower notifications based on loan lifecycle events, eliminating manual data entry across departments.",
        "Built a WhatsApp Business API automation pipeline integrated with Zoho CRM to trigger contextual borrower notifications, EMI payment reminders, and lead nurturing sequences — reducing operational overhead significantly.",
        "Deployed and configured production server infrastructure on Linux using Nginx (reverse proxy) and PM2 (process management); delivered three full-stack company platforms: shreevishnufinance.com, benissglobal.com, benissfoundation.org.",
        "Led the backend development team for the Beniss Global investment platform — overseeing code reviews, sprint planning, and deployment pipelines.",
        "Leveraged AI-assisted development (GitHub Copilot, Claude, Cursor IDE) to accelerate feature delivery by ~35%, improve code review cycles, and auto-generate boilerplate for LOMS modules."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "MindGeeks Tech LLP",
      location: "New Delhi",
      date: "Mar 2022 – Aug 2024",
      tag: "Services — Full-time",
      bullets: [
        "Developed and maintained 5+ scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), serving production traffic with high availability.",
        "Designed and implemented secure RESTful APIs with JWT-based access/refresh token authentication, role-based access control (RBAC), and bcrypt password hashing.",
        "Improved API response times and MongoDB query performance through indexing strategies, aggregation pipeline optimization, and efficient Mongoose schema design.",
        "Collaborated in Agile/Scrum sprint cycles — contributing to system architecture decisions, technical documentation, and feature planning across cross-functional teams."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "AMS Web Solutions Pvt. Ltd.",
      location: "Rohtak, Haryana",
      date: "Jan 2021 – Jun 2021",
      tag: "Services — Full-time",
      bullets: [
        "Built dynamic, data-driven web applications in PHP (OOP/MVC architecture) with input validation, SQL injection prevention, and session management best practices.",
        "Gained hands-on experience with database design, server-side rendering, and client-server communication in a professional environment."
      ]
    }
  ];

  const projects = [
    {
      name: "DevNet — Developer Networking & Collaboration Platform",
      linkText: "devnet.co.in",
      link: "https://devnet.co.in",
      tech: "React.js, Vite, Redux Toolkit, Tailwind CSS, Framer Motion, tldraw | Node.js, Express.js, MongoDB, Socket.IO, Redis | AWS EC2, Nginx, PM2, Cloudinary, Razorpay, AWS SES, Passport.js, Node-Cron",
      points: [
        "Real-time Chat & Presence: Engineered 1-on-1 chat with Socket.IO featuring typing indicators, read receipts, and Cloudinary-based media uploads; scaled to multi-instance deployment using a Redis Pub/Sub adapter.",
        "Collaborative Whiteboard: Integrated tldraw for live collaborative drawing with single-click invite-from-chat, backed by Redis-scaled Socket.IO.",
        "Developer Discovery: Tinder-style swiping (react-tinder-card) with connection request management and auto-fetched GitHub repositories and contribution stats via OAuth 2.0 (Google & GitHub via Passport.js).",
        "Monetisation: Integrated Razorpay for tiered (Silver/Gold) premium subscriptions with HMAC-SHA256 webhook validation; community feed with Markdown, syntax-highlighted code posts, and nested Q&A."
      ]
    },
    {
      name: "DevNet Chat — AI Chat Workspace & Conversation Manager",
      linkText: "dev-net-chat.vercel.app",
      link: "https://dev-net-chat.vercel.app",
      github: "https://github.com/Mr-Elegant/DevNet-Chat",
      githubText: "github.com/Mr-Elegant/DevNet-Chat",
      tech: "Next.js 16, React 19, TypeScript, Better Auth, Prisma, PostgreSQL, AI SDK, OpenRouter, TanStack Query, shadcn/ui, Motion, Tailwind CSS, Sonner",
      points: [
        "AI Chat Experience: Built a full-stack chat application with streaming AI responses using the AI SDK and OpenRouter, including model selection, saved conversations, and polished message rendering.",
        "Authentication & User Sessions: Implemented secure social login with Better Auth, supporting both GitHub and Google sign-in, plus protected routes and session-based access control.",
        "Chat Management: Designed a sidebar-driven conversation system with search, grouped chat history, optimistic delete, and smooth animated transitions for a responsive user experience.",
        "Responsive UI/UX: Created a modern, mobile-friendly interface using shadcn/ui and Tailwind CSS, with a dedicated sign-in page, responsive drawer sidebar, and refined loading/empty states for desktop and mobile.",
        "Data Persistence: Stored users, chats, and messages in PostgreSQL using Prisma, with chat history loaded dynamically per thread and persisted across sessions."
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
          <h2 className="text-xl font-bold text-[#4cc9f0]">Curriculum Vitae</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white text-black hover:bg-[#4cc9f0] hover:text-black transition-colors rounded-lg cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
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
          <div className="fixed top-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-[#4cc9f0] to-[#7209b7] text-white text-sm font-semibold rounded-full shadow-lg z-[1000] print:hidden">
            Copied {copiedText} to clipboard!
          </div>
        )}

        {/* RESUME BODY */}
        <div className="flex flex-col gap-6 print:text-black">
          
          {/* Header Section */}
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-end border-b pb-6 border-white-50/15 print:border-black/20">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white print:text-black">PREET KARWAL</h1>
              <p className="text-lg md:text-xl font-bold mt-2 text-[#4cc9f0] print:text-black/80">Full-Stack & Agentic Software Engineer</p>
              <p className="text-sm text-blue-50/80 mt-1 print:text-black/60">MERN Stack | AI Automation | REST APIs | System Design</p>
            </div>
            <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 text-sm text-white-50 print:text-black gap-1.5 w-full md:w-auto">
              <span className="flex items-center gap-1.5">
                📍 Sonipat, Haryana
              </span>
              <button 
                onClick={() => copyToClipboard("+918572874207", "phone number")}
                className="flex items-center gap-1.5 hover:text-[#4cc9f0] cursor-pointer transition-colors print:pointer-events-none"
              >
                📞 +91-8572874207
              </button>
              <button 
                onClick={() => copyToClipboard("preetverma365@gmail.com", "email address")}
                className="flex items-center gap-1.5 hover:text-[#4cc9f0] cursor-pointer transition-colors print:pointer-events-none"
              >
                ✉️ preetverma365@gmail.com
              </button>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 print:text-black">
                <a href="https://github.com/Mr-Elegant" target="_blank" rel="noreferrer" className="text-[#4cc9f0] hover:underline print:text-black font-semibold">github.com/Mr-Elegant</a>
                <span className="text-white-50/20 print:text-black/20">|</span>
                <a href="https://linkedin.com/in/preetkarwal" target="_blank" rel="noreferrer" className="text-[#4cc9f0] hover:underline print:text-black font-semibold">linkedin.com/in/preetkarwal</a>
                <span className="text-white-50/20 print:text-black/20">|</span>
                <a href="https://preetportfol.vercel.app" target="_blank" rel="noreferrer" className="text-[#4cc9f0] hover:underline print:text-black font-semibold">preetportfol.vercel.app</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-lg font-bold text-[#4cc9f0] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">Professional Summary</h3>
            <p className="mt-3 text-white-50 print:text-black text-sm md:text-base leading-relaxed text-justify">
              Full-Stack & Agentic Software Engineer with 3+ years of experience building scalable MERN stack and Next.js applications, 
              enterprise-grade REST APIs, and AI-powered automation systems. Experienced in designing and deploying agentic workflows — 
              integrating LLMs, function/tool calling, and multi-agent pipelines into production applications to automate complex business 
              operations. Built and shipped a full-cycle Loan Origination & Management System (LOMS) for an NBFC, integrating Zoho CRM, Zoho 
              Books, and WhatsApp Business API. Proficient in leveraging AI-assisted development (GitHub Copilot, Claude, Cursor IDE) to 
              accelerate feature delivery by ~35%. Comfortable owning end-to-end delivery: system design, backend development, cloud 
              deployment on AWS EC2, and cross-team leadership.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-bold text-[#4cc9f0] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 print:grid-cols-1">
              {Object.entries(skillsData).map(([category, list]) => (
                <div key={category} className="text-sm print:text-xs">
                  <strong className="text-white print:text-black">{category}: </strong>
                  <span className="text-white-50/90 print:text-black/90">{list.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold text-[#4cc9f0] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">Professional Experience</h3>
            <div className="flex flex-col gap-6 mt-4">
              {experiences.map((exp, i) => (
                <div key={i} className={`flex flex-col gap-1 text-sm md:text-base ${i === 1 ? "print-page-break" : ""}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-bold text-white print:text-black">
                    <span>{exp.title} <span className="text-white-50 font-normal text-sm md:text-base">| {exp.company}</span></span>
                    <span className="text-sm font-semibold text-blue-50/90 print:text-black/80">{exp.date}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm text-[#4cc9f0]/80 font-medium italic print:text-black/60">
                    <span>{exp.tag}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-white-50/90 print:text-black/90 text-sm">
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
            <h3 className="text-lg font-bold text-[#4cc9f0] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">Key Projects</h3>
            <div className="flex flex-col gap-6 mt-4">
              {projects.map((proj, i) => (
                <div key={i} className="flex flex-col gap-1 text-sm">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-bold text-white print:text-black">
                    <span className="text-sm md:text-base">{proj.name}</span>
                    <div className="flex gap-2 text-xs font-semibold print:text-black">
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-[#4cc9f0] hover:underline print:text-black">{proj.linkText}</a>
                      {proj.github && (
                        <>
                          <span className="text-white-50/20">|</span>
                          <a href={proj.github} target="_blank" rel="noreferrer" className="text-[#4cc9f0] hover:underline print:text-black">{proj.githubText}</a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-[#839cb5] font-medium print:text-black/75">
                    <strong>Tech Stack:</strong> {proj.tech}
                  </div>
                  <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-white-50/90 print:text-black/90 text-xs md:text-sm">
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
            <h3 className="text-lg font-bold text-[#4cc9f0] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">Education</h3>
            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base">
              <div className="flex justify-between text-white-50 print:text-black">
                <div>
                  <strong className="text-white print:text-black">Master of Computer Applications (MCA)</strong> — Maharshi Dayanand University (MDU), Rohtak
                </div>
                <span className="font-semibold text-blue-50/95 print:text-black/80">2019 – 2021</span>
              </div>
              <div className="flex justify-between text-white-50 print:text-black">
                <div>
                  <strong className="text-white print:text-black">Bachelor of Computer Applications (BCA)</strong> — Maharshi Dayanand University (MDU), Rohtak
                </div>
                <span className="font-semibold text-blue-50/95 print:text-black/80">2017 – 2019</span>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div>
            <h3 className="text-lg font-bold text-[#4cc9f0] uppercase tracking-wider print:text-black border-b border-white-50/10 pb-1 print:border-black/20">Certification</h3>
            <div className="text-sm text-white-50 mt-3 print:text-black">
              <strong>Networking Fundamentals & Ethical Hacking</strong> — Hi-Tech Institute, Karol Bagh, New Delhi
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
