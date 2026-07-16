const navLinks = [
  {
    name: "Work",
    link: "#work",
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
    name: "Testimonials",
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
  { value: 3, suffix: "+", label: "Years of Experience" },
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
    date: "May 2025 - Apr 2026",
    logoPath: "/images/logos/shree-vishnu-logo.png",
    responsibilities: [
      "Architected and delivered a full-cycle Loan Origination & Management System (LOMS) — covering application intake, automated credit assessment workflows, loan sanction, disbursement management, and EMI repayment tracking, fully aligned with RBI-compliant NBFC operational standards.",
      "Designed and deployed an agentic automation layer using function/tool calling and workflow orchestration — enabling LOMS to autonomously trigger Zoho CRM updates, Zoho Books ledger entries, and WhatsApp borrower notifications based on loan lifecycle events, eliminating manual data entry across departments.",
      "Built a WhatsApp Business API automation pipeline integrated with Zoho CRM to trigger contextual borrower notifications, EMI payment reminders, and lead nurturing sequences — reducing operational overhead significantly.",
      "Deployed and configured production server infrastructure on Linux using Nginx (reverse proxy) and PM2 (process management); delivered three full-stack company platforms: shreevishnufinance.com, benissglobal.com, benissfoundation.org.",
      "Led the backend development team for the Beniss Global investment platform — overseeing code reviews, sprint planning, and deployment pipelines.",
      "Leveraged AI-assisted development (GitHub Copilot, Claude, Cursor IDE) to accelerate feature delivery by ~35%, improve code review cycles, and auto-generate boilerplate for LOMS modules."
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "MindGeeks Tech LLP",
    date: "Mar 2022 - Aug 2024",
    logoPath: "/images/logos/mindgeeks-logo.jpg",
    responsibilities: [
      "Developed and maintained 5+ scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), serving production traffic with high availability.",
      "Designed and implemented secure RESTful APIs with JWT-based access/refresh token authentication, role-based access control (RBAC), and bcrypt password hashing.",
      "Improved API response times and MongoDB query performance through indexing strategies, aggregation pipeline optimization, and efficient Mongoose schema design.",
      "Collaborated in Agile/Scrum sprint cycles — contributing to system architecture decisions, technical documentation, and feature planning across cross-functional teams."
    ],
  },
  {
    title: "Software Developer Intern",
    company: "AMS Web Solutions Pvt. Ltd.",
    date: "Jan 2021 - Jun 2021",
    logoPath: "/images/logos/ams-logo.png",
    responsibilities: [
      "Built dynamic, data-driven web applications in PHP (OOP/MVC architecture) with input validation, SQL injection prevention, and session management best practices.",
      "Gained hands-on experience with database design, server-side rendering, and client-server communication in a professional environment."
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
    name: "insta",
    imgPath: "/images/insta.png",
    link:"https://www.instagram.com/preet_karwal/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link:"https://www.facebook.com/Preetkarwal365/"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link:"https://x.com/preet365"
  },
  {
    name: "github",
    imgPath: "/images/gith.png", 
    link: "https://github.com/Mr-Elegant"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/preetkarwal/"
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
    { name: "Framer Motion", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
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
    { name: "Git", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ]
};

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
};
