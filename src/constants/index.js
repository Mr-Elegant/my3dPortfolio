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
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Preet. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Preet was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Preet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Preet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Preet is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Preet was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Preet’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Preet was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
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
};
