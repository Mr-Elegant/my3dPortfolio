const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Architecture",
    link: "#architecture",
  },
  {
    name: "Live Sandbox",
    link: "#sandbox",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "GitHub",
    link: "#github",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concept", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concept", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience", accent: "#00f0ff", tag: "SYS_EXP" },
  { value: 50, suffix: "+", label: "Projects Completed", accent: "#00ff88", tag: "PROD_SHIPPED" },
  { value: 100, suffix: "%", label: "Commitment to Quality", accent: "#f72585", tag: "CODE_QUALITY" },
  { value: 99, suffix: "%", label: "Uptime Achieved", accent: "#9d4edd", tag: "HIGH_AVAIL" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
    accent: "#00f0ff",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
    accent: "#00ff88",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    accent: "#9d4edd",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    desc: "Building interactive, high-performance, and pixel-perfect interfaces with React, Next.js, and modern state managers."
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    desc: "Designing secure, production-grade REST/Websocket APIs and microservices using Node.js, Express, and databases."
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
    desc: "Crafting immersive 3D graphics and responsive experiences on the web using Three.js, React Three Fiber, and GSAP."
  },
  {
    name: "AI & Agentic Developer",
    abstractType: "ai",
    scale: 1,
    rotation: [0, 0, 0],
    desc: "Orchestrating agentic LLM workflows, autonomous tool calling, and multi-agent pipelines via Vercel AI SDK and OpenRouter."
  },
];

const expCards = [
  {
    title: "Software Engineer",
    company: "Shree Vishnupriya Finance and Leasing Limited",
    date: "May 2025 – Apr 2026",
    logoPath: "/images/logos/shree-vishnu-logo.png",
    badge: "FULL-TIME",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2", "LLM Tooling", "Zoho API"],
    responsibilities: [
      "Architected and delivered an end-to-end Loan Origination & Management System (LOMS) featuring a React frontend and modular Node.js/Express services, managing automated EMI calculation, credit scoring, and disbursement workflows compliant with RBI NBFC guidelines.",
      "Engineered high-throughput REST APIs and custom Express middleware for JWT authentication, role-based access control (RBAC), rate-limiting, and structured error handling for reliable request processing.",
      "Implemented an automated LLM tool-calling layer to orchestrate real-time data sync with Zoho CRM/Books and dispatch automated WhatsApp borrower notifications across loan lifecycles, optimizing token usage via structured prompt templates.",
      "Maintained database integrity across MongoDB and relational stores, deployed high-availability infrastructure on AWS Linux (Nginx, PM2) for three platforms, and accelerated feature delivery cycles utilizing modern AI development tooling (Google Antigravity, Cursor, GitHub Copilot)."
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "MindGeeks Tech LLP",
    date: "Mar 2022 – Dec 2024",
    logoPath: "/images/logos/mindgeeks-logo.jpg",
    badge: "FULL-TIME",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "Jest", "CI/CD"],
    responsibilities: [
      "Developed and maintained 15+ production MERN applications (React, Node.js/Express, MongoDB) serving high-concurrency traffic with high availability.",
      "Implemented secure authentication flows using JWT access/refresh tokens, RBAC permissions, and bcrypt password encryption; authored automated Jest test suites for critical business logic.",
      "Optimized MongoDB queries via indexing and aggregation pipelines, executed schema design across SQL and NoSQL databases, and collaborated in Agile sprint cycles with CI/CD deployment pipelines."
    ],
  },
  {
    title: "Software Developer Intern",
    company: "AMS Web Solutions Pvt. Ltd.",
    date: "Jan 2021 – Jun 2021",
    logoPath: "/images/logos/ams-logo.png",
    badge: "INTERNSHIP",
    techStack: ["PHP OOP", "MySQL", "JavaScript", "MVC", "Security Auditing"],
    responsibilities: [
      "Built data-driven PHP (OOP/MVC) web applications with strict input validation, parameterized queries, and SQL injection prevention mechanisms."
    ],
  }
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/preetkarwal/"
  },
  {
    name: "github",
    imgPath: "/images/gith.png", 
    link: "https://github.com/Mr-Elegant"
  },
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link:"https://www.instagram.com/preet_karwal/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link:"https://www.facebook.com/Preetkarwal365/"
  }
];

const techSkillsList = {
  frontend: [
    { name: "React", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Redux", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "TanStack Query", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "HTML5", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
  ],
  backend: [
    { name: "Node.js", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Redis", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Socket.IO", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
    { name: "AWS", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Git", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ]
};

const systemTopologies = [
  {
    id: "interview-lab-topology",
    name: "Full Stack Engineering Interview Lab — Senior Systems Simulator",
    tagline: "Next.js 16, PostgreSQL (Neon/Prisma), PGlite WebAssembly, Better Auth, Isolated Worker Sandboxes & Gemini AI",
    scaleStats: {
      uptime: "99.99%",
      latency: "< 12ms (Client WASM)",
      throughput: "65 Labs / 8 Incidents / 120 SQL",
      compliance: "Zero-Trust Worker Sandbox / Better Auth",
    },
    nodes: [
      {
        id: "lab-ui",
        name: "Next.js 16 App Router & Monaco Editor",
        layer: "client",
        type: "Candidate IDE & Responsive Workspace",
        tech: "Next.js 16, React 19, Monaco Editor, Tailwind CSS, Redux Toolkit",
        spec: "Full-height Monaco editor, real-time telemetry playback, multi-track tabs, on-demand closable test runners, and account-scoped local drafts.",
        tradeOff: "Monaco client-side compilation allows instantaneous linting and code completion without server compilation latency.",
        failureMode: "Offline draft preservation in localStorage with automatic reconnection sync retry notice."
      },
      {
        id: "worker-sandbox",
        name: "Isolated Worker Execution Engine",
        layer: "compute",
        type: "Client-Side Code Sandbox Barrier",
        tech: "Opaque-origin Iframe, Web Workers, MessageChannel, Strict CSP",
        spec: "Executes untrusted candidate solutions in disposable Web Workers with 1,500ms execution timeout, 100k character limits, and deep structural equality verification.",
        tradeOff: "Browser-side worker execution eliminates backend compute hosting cost while guaranteeing complete candidate code isolation.",
        failureMode: "Watchdog timer terminates runaway infinite loops and revokes MessageChannel without freezing UI thread."
      },
      {
        id: "sql-wasm",
        name: "PGlite WASM & AlaSQL Engines",
        layer: "compute",
        type: "In-Browser PostgreSQL Engine",
        tech: "PGlite 0.5 (PostgreSQL compiled to WebAssembly), AlaSQL",
        spec: "Executes real PostgreSQL queries inside browser memory against seeded transactional datasets across 120 SQL interview challenges without hitting production DB.",
        tradeOff: "Full PostgreSQL dialect fidelity (window functions, CTEs, EXPLAIN) in pure WASM with zero server DB load.",
        failureMode: "Automatic query timeout and memory sandbox reset on memory-intensive join queries."
      },
      {
        id: "auth-progress",
        name: "Better Auth & Transactional Progress Service",
        layer: "gateway",
        type: "Session Gateway & Sync Service",
        tech: "Better Auth 1.7, Signed HTTP-Only Cookies, Zod 4",
        spec: "Session-derived ownership verification, CSRF mitigation, rate-limited AI quotas, and transactional per-user row locking on attempt sync.",
        tradeOff: "Server-derived session ownership prevents ID spoofing and serializes progress merges safely.",
        failureMode: "Idempotent attempt deduplication and client-attempt uniqueness keys prevent duplicate syncs."
      },
      {
        id: "postgres-db",
        name: "PostgreSQL & Prisma Durable History",
        layer: "storage",
        type: "Relational Persistence Layer",
        tech: "PostgreSQL, Prisma ORM 6, Neon Cloud",
        spec: "Stores candidate attempts, rubric scores, bookmarks, user notes, and incident journals with strict cascading referential integrity.",
        tradeOff: "ACID transactions with row-level locks prevent race conditions during anonymous-to-authenticated history migrations.",
        failureMode: "Prisma connection pooling with automatic backoff retry on transient DB connection drops."
      },
      {
        id: "gemini-interviewer",
        name: "Google Gemini 2.0 AI Interviewer",
        layer: "ai",
        type: "Contextual Technical Interviewer",
        tech: "Google GenAI SDK, Gemini 2.0 Flash, Deterministic Fallback Engine",
        spec: "Conducts multi-turn technical interviews, dynamically generates follow-up architecture questions, and issues rubric scorecards with deterministic offline fallback.",
        tradeOff: "Streaming server-side execution hides API credentials and enforces per-user rate limits.",
        failureMode: "Transparent fallback to deterministic rubric evaluator if Gemini API is unconfigured or throttled."
      }
    ],
    flows: [
      { from: "lab-ui", to: "worker-sandbox", label: "PostMessage / Private Channel" },
      { from: "lab-ui", to: "sql-wasm", label: "In-Memory SQL Execution" },
      { from: "lab-ui", to: "auth-progress", label: "Authenticated Progress Sync" },
      { from: "auth-progress", to: "postgres-db", label: "Row-Locked Transactional Merge" },
      { from: "auth-progress", to: "gemini-interviewer", label: "Rate-Limited AI Assessment" }
    ]
  },
  {
    id: "muhurat-ai-topology",
    name: "Muhurat AI — Autonomous Calendar Intelligence & Vedic Time Engine",
    tagline: "Google Gemini 3.6 Flash, Mastra AI Agent Memory, Descope Outbound OAuth Vault & MCP Server",
    scaleStats: {
      uptime: "99.98%",
      latency: "< 18ms (SSE Streaming)",
      throughput: "Multi-Tool Orchestration",
      compliance: "Descope AES-256 Vault / Google API",
    },
    nodes: [
      {
        id: "muhurat-client",
        name: "Next.js 16 Midnight Glass Frontend",
        layer: "client",
        type: "Frontend Workspace & Visual Calendar",
        tech: "Next.js 16, React 19, Tailwind CSS v4, Lucide, @descope/nextjs-sdk",
        spec: "Dual-Theme (Midnight Glass / Frosted Pearl), interactive 7x6 month grid, 8AM-8PM week timeline, popovers, Google Meet join buttons & reactive refresh.",
        tradeOff: "OKLCH color space with hardware-accelerated 24px backdrop blur for high-fidelity glassmorphism across dark/light modes.",
        failureMode: "Silent optimistic UI rendering with auto-retry on failed event mutations."
      },
      {
        id: "descope-vault",
        name: "Descope Identity & Outbound App Vault",
        layer: "gateway",
        type: "Auth & OAuth2 Token Vault",
        tech: "Descope SDK, Passkeys, OAuth 2.0 PKCE, AES-256 Vault",
        spec: "Manages session JWTs, handles Google Calendar OAuth consent, and securely vaults refresh/access tokens without exposing them to client code.",
        tradeOff: "Delegating third-party OAuth token vaulting to Descope eliminates server-side plaintext token storage liabilities.",
        failureMode: "Automatic OAuth refresh token rotation with Descope session re-authentication fallback."
      },
      {
        id: "backend-orchestrator",
        name: "Express.js Backend & MCP Mount",
        layer: "compute",
        type: "API Gateway & SSE Stream Server",
        tech: "Express.js, TypeScript, Server-Sent Events (SSE), MCP Endpoint",
        spec: "SSE streaming for token/reasoning generation, Descope JWT verification middleware, database pooling, and standard /mcp IDE endpoint.",
        tradeOff: "SSE streaming provides backpressure control and native HTTP/2 multiplexing without WebSocket connection state overhead.",
        failureMode: "Client stream recovery with AbortController upstream cancellation on connection drop."
      },
      {
        id: "agent-engine",
        name: "Mastra AI Core & Gemini 3.6 Flash",
        layer: "ai",
        type: "Agentic Reasoning & Function Calling Engine",
        tech: "Google Gemini 3.6 Flash, Mastra AI Framework, Zod Schemas",
        spec: "Temporal grounding, deterministic Zod function calling (createMeeting, checkFreeBusy, reschedule, cancel), and multi-provider fallback (OpenRouter, OpenAI).",
        tradeOff: "Gemini 3.6 Flash provides ultra-fast tool-calling latency with high schema adherence at low token cost.",
        failureMode: "Multi-provider cascading to OpenRouter/OpenAI fallback on upstream rate limits (HTTP 429)."
      },
      {
        id: "mastra-memory",
        name: "PostgreSQL Working Memory & Thread Store",
        layer: "storage",
        type: "Relational Database & Context Store",
        tech: "PostgreSQL 16+, Neon Cloud / Supabase, pg Connection Pool",
        spec: "Stores thread histories, user scheduling habits, preferred working hours, and favorite collaborators across conversations.",
        tradeOff: "PostgreSQL relational schemas ensure strict foreign-key cascading and ACID transactional consistency for thread deletions.",
        failureMode: "Connection pooling via PgBouncer with automatic reconnect on transient cloud timeouts."
      },
      {
        id: "google-calendar-service",
        name: "Google Calendar API v3 & Meet Engine",
        layer: "integration",
        type: "Calendar Sync & Video Conferencing",
        tech: "Google Calendar API v3, Free/Busy Query, hangoutsMeet API",
        spec: "Real-time free/busy matrix conflict detection, automated Google Meet conference link generation, and bi-directional event mutations.",
        tradeOff: "Direct Free/Busy matrix scanning prevents double-booking before committing create/reschedule mutations.",
        failureMode: "Exponential backoff retry with jitter on Google Cloud API rate limits."
      }
    ],
    flows: [
      { from: "muhurat-client", to: "descope-vault", label: "Session Auth & OAuth Consent" },
      { from: "muhurat-client", to: "backend-orchestrator", label: "SSE Prompt Stream & /mcp" },
      { from: "backend-orchestrator", to: "agent-engine", label: "Agent Invocation & Tool Execution" },
      { from: "agent-engine", to: "mastra-memory", label: "User Habit & Context Retrieval" },
      { from: "agent-engine", to: "google-calendar-service", label: "Free/Busy Check & Event Mutation" },
      { from: "descope-vault", to: "google-calendar-service", label: "Outbound Bearer Token Exchange" }
    ]
  },
  {
    id: "devnet-distributed",
    name: "DevNet — Distributed Real-Time Collaboration & Matchmaking Engine",
    tagline: "React 19, Custom GPU Vector Whiteboard, AI Architect (OpenRouter), Socket.IO Cluster & Vercel/Render Cloud",
    scaleStats: {
      uptime: "99.99%",
      latency: "< 25ms (WebSocket)",
      throughput: "~70% Bundle Drop (>2.5MB)",
      compliance: "Zero-Cost Cloud Topology",
    },
    nodes: [
      {
        id: "dev-client",
        name: "Interactive Scrollytelling & Collaboration Client",
        layer: "client",
        type: "React 19 SPA Workspace",
        tech: "React 19, Vite 6, Tailwind v4, Redux Toolkit, Custom Vector Canvas, Framer Motion",
        spec: "Interactive 4-act scrollytelling journey (/story), Tinder swipe matchmaking, custom HTML5 vector canvas (saving ~70% bundle size / >2.5MB), AI Architect diagramming & markdown code editor.",
        tradeOff: "Custom lightweight vector engine chosen over heavy third-party libraries (tldraw) to eliminate >2.5MB bundle bloat while ensuring sub-25ms multi-user cursor sync.",
        failureMode: "Socket auto-reconnection with buffered packet queue on temporary network drops; local draft caching."
      },
      {
        id: "load-balancer",
        name: "Cloudflare DNS & Vercel Edge CDN",
        layer: "gateway",
        type: "Edge Ingress & CDN",
        tech: "Cloudflare DNS, Vercel Global Edge CDN, SSL/TLS Full Strict",
        spec: "Anycast global edge caching for Vite SPA bundle, DNS-only CNAME routing for devnet-gilt.vercel.app, automatic Brotli compression.",
        tradeOff: "Decoupled edge frontend hosting on Vercel allows zero-cost instant deploys separate from Node compute tiers.",
        failureMode: "Automatic Cloudflare edge failover and CDN stale-while-revalidate serving."
      },
      {
        id: "socket-cluster",
        name: "Render Web Service & Socket.IO Engine",
        layer: "compute",
        type: "Real-Time Gateway & REST API",
        tech: "Express 5, Socket.IO v4, Node.js, Keep-Alive Worker",
        spec: "Sub-millisecond room-based event dispatching for 1-on-1 chats, read receipts (sent/delivered/seen), live presence, whiteboard shape broadcasting & collaborator cursors.",
        tradeOff: "Binary delta packet packing for vector shape updates to minimize real-time network payload.",
        failureMode: "Self-pinging keep-alive worker queries /health every 12 min to prevent free-tier instances from idling."
      },
      {
        id: "ai-architect",
        name: "AI Architect Diagram Generation Engine",
        layer: "ai",
        type: "LLM System Design Synthesizer",
        tech: "OpenRouter Free Models (Llama 3.3 70B, Gemini 2.0 Flash, Qwen 2.5 72B)",
        spec: "Natural language text-to-architecture diagram generator. Automatically creates structured 2D component layouts, DB cylinders, service boxes, and directional flow arrows from developer prompts.",
        tradeOff: "Automated multi-model fallback cascade ensures 100% free uptime even when specific free-tier LLMs encounter rate limits.",
        failureMode: "Falls back to instant pre-baked system design templates (URL Shortener, E-Commerce, Chat, Event Analytics)."
      },
      {
        id: "payment-webhook",
        name: "Razorpay HMAC Payment Webhook Pipeline",
        layer: "compute",
        type: "Financial Subscription Service",
        tech: "HMAC-SHA256, Node-Cron, Webhook Validation",
        spec: "Tiered subscription validation (Silver/Gold), cryptographic signature verification, idempotency token check.",
        tradeOff: "Idempotency key prevents double-crediting on duplicate webhook deliveries.",
        failureMode: "Webhook replay queue with exponential backoff on internal processing errors."
      },
      {
        id: "database-cluster",
        name: "MongoDB Atlas M0 & Cloudinary Media Layer",
        layer: "storage",
        type: "Cloud Database & Media Storage",
        tech: "MongoDB Atlas, Mongoose ODM, Cloudinary API",
        spec: "Indexed user profiles, threaded Q&A comments with accepted answer checkmarks, chat history with cursor pagination, and in-memory media streaming.",
        tradeOff: "Cursor-based pagination over offset pagination ensures O(1) query performance across growing chat archives.",
        failureMode: "MongoDB Atlas replica set automatic failover with zero-downtime secondary reads."
      }
    ],
    flows: [
      { from: "dev-client", to: "load-balancer", label: "HTTPS Edge Delivery" },
      { from: "dev-client", to: "socket-cluster", label: "WSS Sub-25ms Real-Time" },
      { from: "socket-cluster", to: "ai-architect", label: "OpenRouter LLM Synthesis" },
      { from: "load-balancer", to: "payment-webhook", label: "Signed Razorpay Webhook" },
      { from: "socket-cluster", to: "database-cluster", label: "Async Message & Media Persistence" }
    ]
  },
  {
    id: "devnet-ai-chat",
    name: "DevNet Chat — Multi-Model AI Streaming & Session Engine",
    tagline: "Vercel AI SDK Edge Streaming, Better Auth Social Sessions & PostgreSQL Dynamic Threading",
    scaleStats: {
      uptime: "99.95%",
      latency: "< 15ms (TTFB Streaming)",
      throughput: "Multi-Model Dynamic Routing",
      compliance: "SOC2-Compliant Session Auth",
    },
    nodes: [
      {
        id: "ai-client",
        name: "Next.js 16 Client & UI Workspace",
        layer: "client",
        type: "Full-Stack Web App",
        tech: "Next.js 16, React 19, TypeScript, shadcn/ui, Motion",
        spec: "Optimistic chat history deletion, streaming message renderer with markdown & syntax highlighting, model selection bar.",
        tradeOff: "Next.js App Router for hybrid server-component rendering and low client JS payload.",
        failureMode: "Client stream recovery on dropped TCP connection."
      },
      {
        id: "auth-gateway",
        name: "Better Auth Social Session Layer",
        layer: "gateway",
        type: "OAuth 2.0 & Session Gateway",
        tech: "Better Auth, GitHub & Google OAuth, JWT",
        spec: "CSRF token validation, encrypted cookie sessions, role-based route middleware protection.",
        tradeOff: "Stateless signed cookie sessions to eliminate DB lookup latency on static asset edge requests.",
        failureMode: "Auto refresh token rotation on token expiry."
      },
      {
        id: "ai-engine",
        name: "Vercel AI SDK & OpenRouter Engine",
        layer: "compute",
        type: "AI Gateway & Stream Router",
        tech: "Vercel AI SDK, OpenRouter, Streaming API",
        spec: "Backpressure-controlled SSE (Server-Sent Events) streaming, dynamic multi-model prompt orchestration, temperature control.",
        tradeOff: "OpenRouter multi-model aggregation enables dynamic fallback across Claude, GPT-4o, and DeepSeek.",
        failureMode: "Fallback model cascading if primary LLM provider hits rate limit (HTTP 429)."
      },
      {
        id: "postgres-store",
        name: "PostgreSQL & Prisma Persistence Layer",
        layer: "storage",
        type: "Relational Data Store",
        tech: "PostgreSQL, Prisma ORM, Neon Serverless",
        spec: "Relational chat threads, message cascades, user profiles, foreign key referential integrity.",
        tradeOff: "PostgreSQL chosen for strict relational schema integrity on multi-user chat threads vs NoSQL document store.",
        failureMode: "Connection pooling via Prisma Accelerate / PgBouncer to prevent connection exhaustion."
      }
    ],
    flows: [
      { from: "ai-client", to: "auth-gateway", label: "OAuth 2.0 Handshake" },
      { from: "ai-client", to: "ai-engine", label: "SSE Streaming Request" },
      { from: "ai-engine", to: "postgres-store", label: "Async Thread Persistence" }
    ]
  }
];

const architectureADRs = [
  {
    id: "interview-lab-adr",
    projectTitle: "Full Stack Engineering Interview Lab",
    rfcTitle: "RFC-04: Isolated Browser Code Execution, Resilient Incident Replay & Account-Scoped Progress Synchronization",
    status: "APPROVED & IN PRODUCTION",
    author: "Preet Karwal (Principal Systems Architect)",
    date: "2026",
    executiveSummary: "Architected a full-stack engineering interview practice platform engineered for correctness under failure. Features an isolated client-side Web Worker execution sandbox, pure state-replay incident engines, browser-based PostgreSQL (PGlite WASM), and transactional account-scoped progress persistence.",
    constraints: [
      "Zero server vulnerability to untrusted candidate code execution (no remote code execution liabilities).",
      "Full PostgreSQL dialect support (CTEs, window functions) without risking production database integrity.",
      "Deterministic incident simulation replay without state drift or client tampering.",
      "Resilient progress sync with transactional conflict resolution and zero data loss on network failure."
    ],
    decisions: [
      {
        decision: "Opaque-Origin Iframe & Disposable Web Worker Sandbox",
        rationale: "Candidate solutions execute within an opaque-origin iframe connected via private MessageChannel, spawning a fresh Web Worker per test case with a strict 1,500ms watchdog timeout and CSP that disables network access.",
        tradeOff: "Provides complete browser-side isolation for JavaScript evaluation without requiring dedicated multi-tenant backend container infrastructure."
      },
      {
        decision: "Pure State-Replay Engine for Evolving Incidents",
        rationale: "Rather than mutating complex runtime state trees, incident runs store an immutable decision journal and elapsed timestamp. All telemetry, alerts, and consequences are deterministically recomputed via pure functional transitions.",
        tradeOff: "Guarantees 100% reproducible test verification and prevents candidates from forging progress or skipping incident deadlines."
      },
      {
        decision: "Client-Side PostgreSQL via PGlite WebAssembly",
        rationale: "Compiles genuine PostgreSQL into WebAssembly (PGlite), allowing candidates to execute complex queries and EXPLAIN plans locally against seeded database fixtures.",
        tradeOff: "Eliminates server database load and connection limits while providing authentic PostgreSQL semantics."
      },
      {
        decision: "Account-Scoped Session Ownership & Transactional Row Locking",
        rationale: "Session user IDs are strictly derived from verified Better Auth cookies on the server. Progress imports lock the user row to serialize concurrent writes and deduplicate attempts via unique clientAttemptId keys.",
        tradeOff: "Ensures atomic progress merges without race conditions or ghost overwrites during multi-device synchronization."
      }
    ],
    failureModes: [
      "Infinite Loop in Candidate Code: Watchdog timer forcibly terminates the active Web Worker after 1,500ms, clearing message listeners and safely surfacing a TIMEOUT error to the candidate.",
      "Network Disconnect During Sync: Local device cache retains all completed attempts and drafts, surfacing an unobtrusive offline badge with automatic retry upon network restoration.",
      "Gemini API Quota Exceeded: Automatically engages deterministic offline rubric fallback, ensuring uninterrupted interview practice even under upstream API outages."
    ],
    roiImpact: [
      "Zero cloud compute cost for code execution by offloading 100% of test runs to client-side isolated Web Workers and WASM.",
      "Sub-15ms query execution latency with genuine PostgreSQL engine running directly in browser memory.",
      "203 automated unit tests and 34 verified end-to-end browser user journeys with 100% pass rate."
    ]
  },
  {
    id: "muhurat-calendar-adr",
    projectTitle: "Muhurat AI — Autonomous Calendar Intelligence",
    rfcTitle: "RFC-03: Autonomous Multi-Tool Calendar Scheduling & Outbound OAuth Token Vaulting",
    status: "APPROVED & IN PRODUCTION",
    author: "Preet Karwal (AI Systems Architect)",
    date: "2026",
    executiveSummary: "Engineered an autonomous AI calendar assistant combining Google Gemini 3.6 Flash, Mastra AI persistent working memory, Descope Outbound OAuth Vaulting, and a bidirectional reactive visual calendar with Model Context Protocol (MCP) tool integration.",
    constraints: [
      "Sub-20ms Time to First Byte (TTFB) on SSE token and reasoning streaming.",
      "Zero double-booking guarantee via Free/Busy matrix scanning prior to event mutations.",
      "Zero-trust OAuth token security: Google OAuth refresh tokens must never touch client code or plaintext storage.",
      "Deterministic tool schema execution without LLM argument hallucination."
    ],
    decisions: [
      {
        decision: "Descope Outbound Application Vault vs Traditional Server Token Encryption",
        rationale: "Descope's Outbound Application Vault offloads encrypted token rotation, consent lifecycle, and OAuth token exchanges to an isolated, SOC2-compliant hardware security layer, keeping application servers stateless.",
        tradeOff: "Requires backend to route calendar API requests using scoped Descope outbound bearer token exchanges."
      },
      {
        decision: "Zod-Enforced Deterministic Tool Schemas in Mastra AI Core",
        rationale: "All calendar tools (createMeeting, checkFreeBusy, reschedule, cancel) are enforced via strict Zod schemas with ISO-8601 validation to prevent malformed API mutations.",
        tradeOff: "Requires upfront schema definition and temporal parsing in prompt system instructions."
      },
      {
        decision: "Bidirectional Reactive Calendar Sync (SSE Chat to Visual Grid)",
        rationale: "When Muhurat AI confirms a booking in chat, it dispatches an event trigger that instructs the visual Month/Week timeline to silently refetch live Google Calendar metadata and render interactive Meet badges.",
        tradeOff: "Client maintains a lightweight state trigger rather than an active high-frequency polling loop."
      },
      {
        decision: "Model Context Protocol (MCP) Standard Server Mount",
        rationale: "Exposes POST /mcp endpoint enabling external developer environments (Antigravity IDE, Cursor, Claude Desktop) to invoke calendar tools natively.",
        tradeOff: "Requires session authentication verification middleware on the MCP endpoint."
      }
    ],
    failureModes: [
      "Google API Rate Limiting: Backoff retry with jitter; agent informs user and proposes cached available slots.",
      "Calendar Slot Conflict: Agent automatically scans surrounding time window and proposes 2-3 optimal alternative slots.",
      "Provider Rate Limit: Dynamic cascading fallback from Gemini 3.6 Flash to OpenRouter/OpenAI."
    ],
    roiImpact: [
      "Eliminated 100% of calendar scheduling conflicts via automated Free/Busy pre-flight queries.",
      "Sub-18ms SSE response streaming with instant Google Meet link generation.",
      "Seamless multi-environment scheduling across Web UI, Visual Calendar, and IDE MCP tools."
    ]
  },
  {
    id: "devnet-realtime",
    projectTitle: "DevNet Platform & Collaboration Engine",
    rfcTitle: "RFC-01: Zero-Cost Distributed Real-Time Collaboration & Custom Vector Engine",
    status: "APPROVED & IN PRODUCTION",
    author: "Preet Karwal (Architect & Full-Stack Engineer)",
    date: "2024 - 2025",
    executiveSummary: "Architected a decoupled, zero-cost developer pairing ecosystem featuring custom GPU-accelerated HTML5 vector whiteboard collaboration, multi-model AI Architect diagramming, and Socket.IO real-time communication across Vercel Edge and Render services.",
    constraints: [
      "Sub-25ms latency for collaborative whiteboard vector events & live cursor presence across synchronized developers.",
      "Eliminate heavy third-party whiteboard bundle (>2.5MB) to achieve sub-second initial load on web and mobile.",
      "Guaranteed message delivery with 3-state read receipts (sent, delivered, seen) for 1-on-1 developer messaging.",
      "100% free forever cloud deployment footprint with 24/7 uptime using automated keep-alive background workers."
    ],
    decisions: [
      {
        decision: "Custom GPU-Accelerated Vector Canvas vs Proprietary Canvas (tldraw)",
        rationale: "Replaced heavy third-party canvas dependencies with a custom lightweight HTML5 vector engine containing system design primitives (Service Box, DB Cylinder, Worker Node, Flow Arrow, Sticky Note). Slashed frontend production bundle size by ~70% (saving >2.5 MB) for instant sub-second page loads.",
        tradeOff: "Required writing custom geometry collision detection, mouse-wheel zoom centering, and quadratic-bezier stroke smoothing in vanilla Canvas API."
      },
      {
        decision: "AI Architect via Free OpenRouter LLMs with Model Cascade",
        rationale: "Integrated free OpenRouter LLMs (Llama 3.3 70B, Gemini 2.0 Flash, Qwen 2.5 72B) to generate structured 2D architecture diagrams from natural language prompts with zero API cost and automatic fallback.",
        tradeOff: "LLM responses require strict JSON schema validation and layout coordinate normalization before rendering onto the canvas."
      },
      {
        decision: "Zero-Cost Cloud Topology & 12-Minute Keep-Alive Heartbeat",
        rationale: "Decoupled frontend onto Vercel Global Edge CDN and backend onto Render Web Services. Implemented an internal Node scheduler that self-pings the public /health endpoint every 12 minutes to prevent free-tier instances from sleeping.",
        tradeOff: "Self-pinging worker runs inside the application process rather than requiring external paid synthetic monitors."
      },
      {
        decision: "Cursor-Based Pagination & Atomic MongoDB Operations",
        rationale: "Replaced offset-based pagination with cursor queries ({ _id: { $lt: lastMessageId } }) for O(1) chat history loading. Utilized atomic $pull operators for tamper-proof message deletions.",
        tradeOff: "Client Redux store must track message cursor tokens during infinite scroll."
      }
    ],
    failureModes: [
      "Render Free-Tier Spin-Down: Prevented by 12-minute keep-alive self-pinging background worker querying /health endpoint.",
      "OpenRouter Rate Limiting: Automatically cascades across free models (Llama 3.3 -> Gemini 2.0 Flash -> Qwen 2.5) with instant fallback to pre-baked system design templates.",
      "WebSocket Connection Drop: Client automatically buffers outgoing vector strokes and chat messages with optimistic UI feedback, re-syncing upon reconnection."
    ],
    roiImpact: [
      "~70% frontend production bundle reduction (>2.5 MB saved) delivering instant sub-second initial load.",
      "Maintained 99.99% real-time session uptime with sub-25ms vector sync across collaborative whiteboard sessions.",
      "100% zero cloud hosting footprint across Vercel, Render, Cloudflare, MongoDB Atlas, and OpenRouter."
    ]
  },
  {
    id: "devnet-ai-chat-adr",
    projectTitle: "DevNet Chat — AI Streaming Engine",
    rfcTitle: "RFC-02: Resilient Multi-Model Streaming & Relational Session Management",
    status: "APPROVED & IN PRODUCTION",
    author: "Preet Karwal",
    date: "2025",
    executiveSummary: "Engineered an enterprise AI chat workspace leveraging Next.js 16, Vercel AI SDK, OpenRouter multi-model aggregation, and PostgreSQL session persistence.",
    constraints: [
      "Sub-20ms Time to First Byte (TTFB) for streaming AI tokens.",
      "Zero data loss on thread history with optimistic UI interactions.",
      "Support for multi-provider fallback (Claude, GPT-4o, DeepSeek) on rate limits."
    ],
    decisions: [
      {
        decision: "Server-Sent Events (SSE) Streaming vs WebSockets",
        rationale: "SSE works over standard HTTP/2, leverages native browser backpressure, and traverses corporate firewalls effortlessly without socket upgrade handshakes.",
        tradeOff: "Unidirectional server-to-client streaming, which is ideal for AI completion responses."
      },
      {
        decision: "PostgreSQL with Prisma vs MongoDB for AI Conversations",
        rationale: "Relational foreign-key constraints ensure clean cascading deletions when a user deletes a thread or account without orphaned message artifacts.",
        tradeOff: "Requires Prisma migrations during schema alterations."
      }
    ],
    failureModes: [
      "Provider Rate Limit (HTTP 429): OpenRouter gateway cascades request to fallback secondary LLM with matched temperature.",
      "Client Disconnect during Stream: Server aborts upstream generation via AbortController to conserve API token costs."
    ],
    roiImpact: [
      "Delivered instant response streaming across 5+ LLM models.",
      "100% data integrity with optimistic client deletion states."
    ]
  }
];

const agenticScenarios = [
  {
    id: "scenario-incident-concurrency",
    title: "Production Incident: Connection Storm & Optimistic Lock Failure",
    triggerEvent: "Critical Alert: 500 Internal Server Error spike on /api/applications/checkout under concurrent loan reservation load",
    steps: [
      {
        step: 1,
        title: "Connection Pool Exhaustion Telemetry Trigger",
        node: "Telemetry & Sentry Monitor",
        action: "Detect PostgreSQL connection spikes (>98% pool capacity) and identify blocked transaction queues.",
        payload: { alertId: "ALT_CONN_STORM_941", dbActiveConnections: 198, poolMax: 200, status: "CRITICAL" }
      },
      {
        step: 2,
        title: "Worker Sandbox Isolation & Infinite Loop Guard",
        node: "Disposable WebWorker Barrier",
        action: "Enforce 1,500ms watchdog execution boundary, terminating runaway candidate script and revoking MessageChannel.",
        payload: { workerId: "wrk_sandbox_88", executionDurationMs: 1500, action: "TERMINATED_SAFE" }
      },
      {
        step: 3,
        title: "Optimistic Lock Rollback & Idempotency Gate",
        node: "Transaction Engine (Prisma/Neon)",
        action: "Trigger transactional row rollback and reject concurrent stale-state mutations using versioned idempotency keys.",
        payload: { transactionId: "tx_loan_opt_4491", rollbackStatus: "COMMITTED_ROLLBACK", dataIntegrity: "100%" }
      },
      {
        step: 4,
        title: "Client-Side PGlite WASM Failover Routing",
        node: "Client Edge WASM Tier",
        action: "Divert practice query traffic to local in-memory PostgreSQL WebAssembly engine, reducing server pool pressure to 0.",
        payload: { engine: "PGlite_v0.5_WASM", localQueryLatencyMs: 8, serverPoolRelief: "42%" }
      },
      {
        step: 5,
        title: "Incident Resolved & Verified Zero Data Loss",
        node: "Better Auth & Status Gate",
        action: "Verify 100% test suite pass rate across 41 regression cases; acknowledge incident resolution and update audit journal.",
        payload: { incidentStatus: "RESOLVED", testsPassed: "41/41", auditLogId: "aud_inc_storm_resolved" }
      }
    ]
  },
  {
    id: "scenario-muhurat-calendar",
    title: "Autonomous Calendar Scheduling & Conflict Detection",
    triggerEvent: "User prompt: 'Schedule a 45-min strategy sync with alex@corp.com tomorrow at 11 AM'",
    steps: [
      {
        step: 1,
        title: "Session Verification & Outbound OAuth Vault",
        node: "Descope Auth & Outbound Vault",
        status: "success",
        log: "Verified JWT session token. Retrieved encrypted Google Calendar OAuth access token from Descope Outbound App Vault.",
        payload: { userId: "usr_descope_8819", provider: "google-calendar", vaultStatus: "VAULTED_AES256" }
      },
      {
        step: 2,
        title: "Temporal Grounding & Mastra Memory Load",
        node: "Mastra AI Engine / Gemini 3.6 Flash",
        status: "success",
        log: "Resolved 'tomorrow 11 AM' to 2026-09-03T11:00:00+05:30. Loaded user habits from PostgreSQL (Timezone: IST, Duration: 45m).",
        payload: { startTime: "2026-09-03T11:00:00+05:30", endTime: "2026-09-03T11:45:00+05:30", attendee: "alex@corp.com" }
      },
      {
        step: 3,
        title: "Free/Busy Matrix Conflict Query",
        node: "Google Calendar API (checkCalendarBusyTool)",
        status: "success",
        log: "Executed calendar.freebusy.query over [11:00 AM - 11:45 AM]. Found 0 overlapping busy slots.",
        payload: { busySlots: 0, status: "CONFLICT_FREE", auspiciousSlot: true }
      },
      {
        step: 4,
        title: "Meeting Creation & Google Meet Generation",
        node: "Google Calendar API (createMeetingTool)",
        status: "success",
        log: "Created calendar event with conferenceDataVersion=1. Generated Google Meet room 'meet.google.com/qxr-mkpv-yzt'.",
        payload: { eventId: "evt_muhurat_994", meetUrl: "https://meet.google.com/qxr-mkpv-yzt", status: "CONFIRMED" }
      },
      {
        step: 5,
        title: "Reactive Visual Calendar Synchronize",
        node: "Next.js 16 Midnight Glass UI",
        status: "success",
        log: "Dispatched calendarRefreshTrigger. Visual Month & Week grid silently updated with new Google Meet meeting pill.",
        payload: { refreshTrigger: 1, viewMode: "SplitView", toast: "Event booked successfully" }
      }
    ]
  },
  {
    id: "scenario-realtime-whiteboard",
    title: "Real-Time Collaborative Whiteboard Invite & Sync",
    triggerEvent: "Developer 'Alex M.' initiated live whiteboard pairing room #ROOM-DEV-882",
    steps: [
      {
        step: 1,
        title: "Room Allocation & Sticky Session Bind",
        node: "Nginx Load Balancer",
        status: "success",
        log: "Allocated WebSocket room 'ROOM-DEV-882' to Socket Instance #2 via IP-hash sticky routing.",
        payload: { roomId: "ROOM-DEV-882", nodeTarget: "worker-node-02" }
      },
      {
        step: 2,
        title: "Redis Pub/Sub Channel Subscription",
        node: "Redis Pub/Sub Bus",
        status: "success",
        log: "Bound room channel 'room:dev:882:stream' across 4 cluster nodes for cross-instance broadcast.",
        payload: { channel: "room:dev:882:stream", subscriberCount: 2, latency: "1.2ms" }
      },
      {
        step: 3,
        title: "Vector Delta Broadcast & Cursor Sync",
        node: "Socket.IO Multi-Instance Gateway",
        status: "success",
        log: "Broadcasting vector shape deltas for custom vector canvas with optimistic client rendering and live cursor presence.",
        payload: { vectorCount: 42, fps: 60, packetLoss: "0.00%" }
      },
      {
        step: 4,
        title: "Async Snapshot Persistence",
        node: "MongoDB Data Layer",
        status: "success",
        log: "Debounced canvas snapshot (interval 5s) persisted to MongoDB without blocking real-time thread.",
        payload: { snapshotSize: "14.2 KB", status: "SAVED" }
      }
    ]
  },
  {
    id: "scenario-ai-streaming",
    title: "Multi-Model AI Token Streaming & Tool Calling",
    triggerEvent: "User query: 'Analyze system topology and suggest indexing strategy for 10M chat records'",
    steps: [
      {
        step: 1,
        title: "Auth Token & Session Verification",
        node: "Better Auth Gateway",
        status: "success",
        log: "Validated signed JWT session token. User verified: 'preetkarwal'.",
        payload: { userId: "usr_9918", tier: "PRO_DEVELOPER" }
      },
      {
        step: 2,
        title: "Multi-Model Routing & Stream Initiation",
        node: "Vercel AI SDK / OpenRouter",
        status: "success",
        log: "Dispatched prompt to primary provider. Initiated Server-Sent Events (SSE) stream (TTFB: 18ms).",
        payload: { model: "anthropic/claude-3.7-sonnet", streamType: "SSE", temperature: 0.2 }
      },
      {
        step: 3,
        title: "Backpressure Stream & Client Syntax Rendering",
        node: "Next.js 16 Edge Runtime",
        status: "success",
        log: "Piping chunks to client with markdown syntax highlighting and code block formatting.",
        payload: { tokensPerSecond: 64, totalTokens: 480, status: "STREAMING" }
      },
      {
        step: 4,
        title: "Thread Finalization & PostgreSQL Persistence",
        node: "Prisma / PostgreSQL",
        status: "success",
        log: "Persisted prompt, response, and metadata in relational database with thread cascade.",
        payload: { threadId: "th_88102", messageId: "msg_904", duration: "1.4s" }
      }
    ]
  }
];

const systemStandardsData = [
  {
    pillar: "Distributed Scalability & High Throughput",
    icon: "⚡",
    color: "#4cc9f0",
    metrics: "Sub-30ms p99 Latency | Horizontal Clustering",
    principles: [
      "Horizontal Node.js process clustering managed via PM2 with automatic CPU core distribution.",
      "Redis Pub/Sub message broker integration for cross-instance WebSocket synchronization.",
      "Compound database indexing and cursor-based pagination maintaining O(1) query performance at scale.",
      "Connection pooling and debounce caching preventing database connection exhaustion during traffic spikes."
    ]
  },
  {
    pillar: "Zero-Trust Security & Webhook Verification",
    icon: "🛡️",
    color: "#7209b7",
    metrics: "HMAC-SHA256 Signatures | RBAC Enforcement",
    principles: [
      "Cryptographic HMAC-SHA256 signature verification for all payment (Razorpay) and messaging webhooks.",
      "Stateless JWT authentication paired with Redis token blacklisting for immediate token invalidation on logout.",
      "Strict Role-Based Access Control (RBAC) middleware protecting sensitive API endpoints.",
      "Immutable audit log records guaranteeing non-repudiation in multi-user web workflows."
    ]
  },
  {
    pillar: "Autonomous Agentic AI & Automation",
    icon: "🤖",
    color: "#00f0ff",
    metrics: "Deterministic JSON Schemas | Multi-Agent Pipelines",
    principles: [
      "Deterministic structured JSON Schema enforcement on LLM tool outputs to prevent hallucinations.",
      "Multi-model fallback routing (Claude, GPT-4o, DeepSeek) ensuring zero downtime on upstream LLM rate limits.",
      "Server-Sent Events (SSE) streaming with client backpressure control for instant UI feedback.",
      "Function and tool-calling orchestration with automated error recovery pipelines."
    ]
  },
  {
    pillar: "Resilient Cloud Infrastructure & CI/CD",
    icon: "☁️",
    color: "#00ff88",
    metrics: "Linux SysAdmin | 99.98% Uptime SLA",
    principles: [
      "Linux server administration on AWS EC2 with Nginx reverse proxying, SSL termination, and rate limiting.",
      "Automated PM2 process monitoring with zero-downtime rolling reload deployments.",
      "Redis Dead Letter Queues (DLQ) with exponential backoff and jitter for resilient 3rd-party API retries.",
      "Automated database snapshots and automated replica set failover protecting against catastrophic data loss."
    ]
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  techSkillsList,
  systemTopologies,
  architectureADRs,
  agenticScenarios,
  systemStandardsData,
};


