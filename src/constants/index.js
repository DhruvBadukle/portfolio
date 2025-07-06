// Image Imports
import MomsKitch from '../assets/projects/momskitch.png';
import Travel from '../assets/projects/travel.png';
import Fruit from '../assets/projects/FruitEcommerce.jpg';
import Dashboard from '../assets/projects/Dashboard.png';
import Education from '../assets/projects/Education.png';
import NGO from '../assets/projects/ngo.png';

// myProjects Array (with imported images)
export const myProjects = [
  {
    id: 1,
    title: "NGO Website",
    description:
      "A modern and responsive NGO website designed to connect with donors, volunteers, and the community, featuring interactive animations and real-time email functionality.",
    subDescription: [
      "Built with React.js for a dynamic and responsive UI.",
      "Used EmailJS to enable direct form submissions without a backend.",
      "Implemented Framer Motion for smooth and engaging animations.",
    ],

    href: "https://udaanousproject.vercel.app/",
    logo: "",
    image: NGO,
    tags: [
      { id: 1, name: "React", path: "/src/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/src/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Git", path: "/src/assets/logos/git.svg" },
      { id: 4, name: "Vite.js", path: "/src/assets/logos/vitejs.svg" },
    ],
     
  },
  {
    
    id: 2,
    title: "Travel Website",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "https://travel-website-zeta-vert.vercel.app/",
    logo: "",
    image: Travel,
    tags: [
      { id: 1, name: "React", path: "/src/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/src/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Git", path: "/src/assets/logos/git.svg" },
     ],
  },
  {
    id: 3,
    title: "Moms Kitchen",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "https://mom-s-kitchen-eight.vercel.app/home",
    logo: "",
    image: MomsKitch,
    tags: [
      { id: 1, name: "React", path: "/src/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/src/assets/logos/tailwindcss.svg" },
      { id: 3, name: "MongoDB", path: "/src/assets/logos/sqlite.svg" },
      { id: 4, name: "Node", path: "/src/assets/logos/nodelogo.png" },
      { id: 5, name: "Vite.js", path: "/src/assets/logos/vitejs.svg" },
    ],
     
  },
  {
    id: 4,
    title: "Dashboard",
    description:
      "A responsive analytics dashboard for innovation finance teams, built for real-time insights and seamless integration.",
    subDescription: [
      "Developed with React and TailwindCSS for a modern, responsive UI.",
      "Visualized key financial metrics using Chart.js.",
      "Integrated invoice tracking and automated reporting tools.",
      "Enabled API-based connections for third-party financial systems."
    ],
    href: "",
    logo: "",
    image: Dashboard,
    tags: [
      { id: 1, name: "NextJs", path: "/src/assets/logos/nextjs.png" },
      { id: 2, name: "TailwindCSS", path: "/src/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Git", path: "/src/assets/logos/git.svg" },

    ],
  },
  {
    id: 5,
    title: "Education Website",
    description:
      "A responsive and user-friendly platform for modern online learning experiences.",
    subDescription: [
      "Built with React and CSS for a sleek, responsive UI.",
      "Designed intuitive layouts for enhanced user engagement.",
      "Optimized for fast load times and mobile performance.",
      "Integrated dynamic course content and interactive features."
    ],
    href: "https://education-tan-gamma.vercel.app/",
    logo: "",
    image: Education,
    tags: [
      { id: 1, name: "React", path: "/src/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/src/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Git", path: "/src/assets/logos/git.svg" },
      { id: 4, name: "Vite.js", path: "/src/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Fruit Ecommerce",
    description:
      "An advanced dashboard built using React, TailwindCSS, and Char",
    subDescription: [
      "Designed a sleek and interactive UI using Tailwind CSS for a smooth shopping experience.",
      "Fetched product data from DummyJSON API and displayed them dynamically using reusable React components.",
      "Implemented a real-time cart system with quantity updates and dynamic pricing.",
      "Added hover effects, zoom-in animations, and responsive design for cross-device compatibility.",
    ],
    href: "",
    logo: "",
    image: Fruit,
    tags: [
      { id: 1, name: "React", path: "/src/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/src/assets/logos/tailwindcss.svg" }
    ],
  },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/",
    icon: "/src/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/dhruv-badukle-254869228/",
    icon: "/src/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dhruv6378/",
    icon: "/src/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
