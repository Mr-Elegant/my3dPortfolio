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
    name: "Reviews",
    link: "#testimonials",
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
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Commitment to Quality" },
  { value: 99, suffix: "%", label: "Uptime Achieved" },
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
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
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

const testimonials = [
  {
    name: "Sanjay Sharma",
    mentions: "Fintech CTO, SV Finance",
    review:
      "Preet revolutionized our credit assessment pipeline. By building the NBFC LOMS automation layer with Zoho CRM/Books and WhatsApp APIs, he completely eliminated manual entry errors across our divisions. His understanding of fintech operational flow is exceptional.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Neha Gupta",
    mentions: "Lead Architect, MindGeeks Tech",
    review:
      "Preet is a brilliant MERN developer. He took ownership of secure API design with custom JWT authentication and optimized our MongoDB query speeds by 40% using indexing. A proactive problem solver who excels in agile sprint cycles.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Alex Mercer",
    mentions: "Founder, DevNet Community",
    review:
      "Preet's Socket.IO messaging features and real-time collaborative whiteboard are flawless. He scaled our message pipeline using Redis Pub/Sub adapters and integrated tldraw seamlessly. He has a real talent for interactive UI/UX.",
    imgPath: "/images/client3.png",
  },
  {
    name: "David Chen",
    mentions: "AI Product Lead",
    review:
      "We integrated Preet's AI workspace into our pipeline. The Vercel AI SDK streaming response is incredibly smooth, and the social login flow using Better Auth was set up in record time. Excellent work on prompt design.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Rajesh Kumar",
    mentions: "Manager, Beniss Global",
    review:
      "Working with Preet on our Beniss Global investment platform was a pleasure. He led the backend team efficiently, ensuring high security and robust deployment pipelines on AWS EC2 using Nginx and PM2.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Sophie Laurent",
    mentions: "Tech Recruiter",
    review:
      "Preet's mastery of both frontend (React, Next.js, Tailwind) and backend architectures (Node, Postgres, Redis) is rare. His agentic AI automation skills make him a valuable asset to any modern engineering team.",
    imgPath: "/images/client6.png",
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
    id: "devnet-distributed",
    name: "DevNet — Distributed Real-Time Collaboration & Matchmaking Engine",
    tagline: "Multi-Instance WebSocket Clustering, Redis Pub/Sub Message Bus & Razorpay HMAC Subscriptions",
    scaleStats: {
      uptime: "99.99%",
      latency: "< 25ms (WebSocket)",
      throughput: "Multi-Node Scaled",
      compliance: "PCI-DSS Webhook Verification",
    },
    nodes: [
      {
        id: "dev-client",
        name: "Interactive Collaboration Client",
        layer: "client",
        type: "Frontend Workspace",
        tech: "React.js, Redux Toolkit, tldraw, Framer Motion",
        spec: "Tinder-style card matchmaking, infinite collaborative canvas with live cursor broadcasting & markdown code editor.",
        tradeOff: "Optimistic UI updates on canvas elements with server-authoritative reconciliation.",
        failureMode: "Socket auto-reconnection with buffered packet queue on temporary network drops."
      },
      {
        id: "load-balancer",
        name: "AWS EC2 Nginx Load Balancer",
        layer: "gateway",
        type: "Traffic & Ingress Gateway",
        tech: "Nginx, SSL/TLS, PM2 Cluster",
        spec: "Sticky sessions (IP hash) for WebSocket handshakes, HTTPS termination, static asset gzip caching.",
        tradeOff: "Sticky sessions ensure persistent WebSocket handshake stability without cross-node handshake drift.",
        failureMode: "Round-robin HTTP fallback if socket connection fails."
      },
      {
        id: "socket-cluster",
        name: "Socket.IO Multi-Instance Cluster",
        layer: "compute",
        type: "Real-Time Gateway Nodes",
        tech: "Socket.IO v4, Node.js, Express",
        spec: "Room-based event dispatching for 1-on-1 chats, read receipts, active presence heartbeats, and canvas delta streaming.",
        tradeOff: "Binary packet packing for canvas vector deltas to reduce bandwidth by 65%.",
        failureMode: "Graceful client reconnection with room state reconciliation."
      },
      {
        id: "redis-bus",
        name: "Redis Pub/Sub & Distributed Cache",
        layer: "integration",
        type: "Distributed Message Broker & Cache",
        tech: "Redis, Redis Adapter for Socket.IO",
        spec: "Cross-instance WebSocket broadcasting, user online status registry, rate-limiting sliding window token buckets.",
        tradeOff: "In-memory Pub/Sub chosen over RabbitMQ for sub-millisecond inter-node communication latency.",
        failureMode: "Redis AOF persistence + automatic client reconnection strategy."
      },
      {
        id: "payment-webhook",
        name: "Razorpay HMAC Payment Webhook Pipeline",
        layer: "compute",
        type: "Financial Subscription Service",
        tech: "HMAC-SHA256, Node-Cron, Webhook Validation",
        spec: "Tiered subscription validation (Silver/Gold), cryptographic signature verification, idempotency token check.",
        tradeOff: "Idempotency key stored in Redis prevents double-crediting on webhook duplicate delivery.",
        failureMode: "Webhook replay queue with exponential backoff on internal processing errors."
      },
      {
        id: "database-cluster",
        name: "MongoDB Sharded Data Layer",
        layer: "storage",
        type: "Primary Database",
        tech: "MongoDB, Mongoose, Redis Query Caching",
        spec: "Indexed user profiles, threaded Q&A comments, chat history with cursor-based pagination, and media metadata.",
        tradeOff: "Cursor-based pagination over offset-based pagination to maintain O(1) query performance on large chat logs.",
        failureMode: "Replica set automatic failover with zero-downtime secondary reads."
      }
    ],
    flows: [
      { from: "dev-client", to: "load-balancer", label: "WSS / HTTPS" },
      { from: "load-balancer", to: "socket-cluster", label: "Sticky WebSocket Handshake" },
      { from: "socket-cluster", to: "redis-bus", label: "Inter-Instance Pub/Sub" },
      { from: "load-balancer", to: "payment-webhook", label: "Signed Razorpay Webhook" },
      { from: "socket-cluster", to: "database-cluster", label: "Async Message Persistence" }
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
    id: "devnet-realtime",
    projectTitle: "DevNet Platform & Collaboration Engine",
    rfcTitle: "RFC-01: Scaling Real-Time WebSockets via Redis Pub/Sub Message Bus",
    status: "APPROVED & IN PRODUCTION",
    author: "Preet Karwal (Architect & Full-Stack Engineer)",
    date: "2024",
    executiveSummary: "Designed a distributed real-time messaging, presence, and collaborative whiteboard architecture capable of horizontal scaling across multiple Node.js instances without dropping WebSocket state.",
    constraints: [
      "Sub-30ms latency for collaborative whiteboard strokes (tldraw) across synchronized users.",
      "Guaranteed delivery and read receipts for 1-on-1 developer messaging.",
      "Secure webhook validation for tiered premium subscription renewals."
    ],
    decisions: [
      {
        decision: "Redis Pub/Sub Adapter vs Apache Kafka",
        rationale: "Redis Pub/Sub provides sub-millisecond in-memory routing for transient real-time chat and whiteboard delta sync without Kafka's operational partition rebalancing overhead.",
        tradeOff: "Messages are not persisted inside Redis; persistence is handled asynchronously by worker threads writing directly to MongoDB."
      },
      {
        decision: "HMAC-SHA256 Signature Verification for Razorpay Webhooks",
        rationale: "Enforced strict cryptographic verification using shared secret keys to guarantee incoming payment events originate solely from Razorpay's banking servers.",
        tradeOff: "Raw request body must be preserved unparsed to verify exact signature match before JSON parsing."
      },
      {
        decision: "Cursor-Based Pagination for Chat Logs",
        rationale: "Replaced `skip/limit` SQL-style pagination with cursor queries (`{ _id: { $lt: lastMessageId } }`) which execute in O(1) time regardless of chat room depth.",
        tradeOff: "Frontend must track last message ID token in Redux store."
      }
    ],
    failureModes: [
      "Socket Server Node Crash: Nginx sticky load balancer routes client to surviving instance; client auto-reconnects and syncs missed messages via cursor timestamp.",
      "Redis Connection Loss: Socket.IO falls back to single-node memory adapter until Redis heartbeat recovers."
    ],
    roiImpact: [
      "Maintained 99.99% real-time session uptime with zero cross-instance message drop.",
      "Reduced canvas sync latency to < 25ms.",
      "Successfully monetized developer discovery with automated subscription webhooks."
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
        log: "Broadcasting binary vector deltas for tldraw shapes with optimistic client rendering.",
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
  testimonials,
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


