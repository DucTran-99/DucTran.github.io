import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  GreetingsType,
  ProjectType,
  SEODataType,
  SkillBarsType,
  SkillsSectionType,
  SocialLinksType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Tran Trung Duc",
  title: "Hi all, I'm Duc",
  description:
    "I'm a passionate Website Developer dedicated to crafting seamless and engaging digital experiences. With a strong sense of responsibility and an eagerness to learn, I continuously explore new technologies to deliver innovative and efficient solutions that exceed expectations.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "DucTran-99",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "ttduc1011@gmail.com",
  linkedin: "https://www.linkedin.com/in/duc-tran-68903b231/",
  github: "https://github.com/DucTran-99",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Web Development",
      lottieAnimationFile: "/lottie/skills/web.json",
      skills: [
        emoji("⚡ Building service systems using Next.js, React.js"),
        emoji("⚡ Building responsive Web app, Single-Page-Apps (SPA)"),
        emoji("⚡ Building RESTful APIs in Node.js, Nest.js Framework"),
        emoji("⚡ Use library UI to build components quickly!"),
      ],
      softwareSkills: [
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "vscode-icons:file-type-node",
        },
        {
          skillName: "Nestjs",
          iconifyTag: "material-icon-theme:nest",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "GitLab",
          iconifyTag: "logos:gitlab",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "Recoil",
          iconifyTag: "logos:recoil",
        }
      ],
      library: [
        {
          libraryName: "MUI",
          iconifyTag: "devicon:materialui",
        },
        {
          libraryName: "Tailwind",
          iconifyTag: "vscode-icons:file-type-tailwind",
        },
        {
          libraryName: "Bootstrap",
          iconifyTag: "logos-bootstrap",
        },
        {
          libraryName: "Chakra UI",
          iconifyTag: "devicon:chakraui",
        },
        {
          libraryName: "Ant Design",
          iconifyTag: "ant-design:ant-design-outlined",
        },
        {
          libraryName: "Sass",
          iconifyTag: "logos:sass",
        },
        {
          libraryName: "Radix UI",
          iconifyTag: "simple-icons:radixui",
        },
        {
          libraryName: "Shadcn UI",
          iconifyTag: "simple-icons:shadcnui",
        },
        {
          libraryName: "Refine",
          iconifyTag: "simple-icons:refine",
        },
        {
          libraryName: "Remix",
          iconifyTag: "material-icon-theme:remix",
        }
      ]
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Science HCM",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "August 2017 - March 2021",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    id: '1',
    role: "FrontEnd Developer",
    company: "Tech JDI",
    companyLogo: "/img/icons/common/jdi.png",
    date: "Mar 2025 - May 2025",
    desc: "Develop a portal to manage and aggregate the company's services using AI, such as: facial recognition, real estate suggestions, financial reporting and analysis",
    descBullets: [
      "In addition, also participate in developing the company's service introduction website",
    ],
    technologies: ["Reactjs", "Nextjs", "Nodejs", "ec2 AWS", "Docker", "Payload cms", "Mongo DB","Figma"]
  },
  {
    id: '2',
    role: "FrontEnd Developer",
    company: "SOLIDBYTES SOLUTIONS LTD",
    companyLogo: "/img/icons/common/solidbytes.svg",
    date: "Feb 2022 - Mar 2025",
    desc: "I played a key role in developing, optimizing, and maintaining a recruitment ecosystem that connects thousands of job seekers and employers. My contributions span across major platforms:",
    descBullets: [
      "The interface design allows users (for candidates)",
      "Develop an interactive dashboard for employers",
      "Develop Recruiter CRM, Admin and Sales System",
      "Other projects: Persect, Salus Admin, Volta Charging, Amaze Seller Center"
    ],
    otherProjects: [
      {
        name: "Persect - Real Estate Application with Map Integration",
        desc: [
          "Developed an advanced real estate listing platform that integrates interactive maps, providing a seamless experience for users searching for properties across Vietnam.",
          "The main interface allow user to: view a map to location properties (display information, price, rates and comment with other users ), integrate feng shui viewing for real estate, view age (real-time processing for each feature)",
          "Develop a admin panel for managing property data, ensuring easy updates and modifications."
        ],
        technologies: ["Reactjs", "Redux", "Sass", "React query", "Ant Design", "Github", "MapBoxGl", "GoogleMap", "React Router", "Chart", "Figma"],
        github: "",
        link: "",
      },
      {
        logo: "/img/icons/common/salus.svg",
        name: "Salus Admin Project – Insurance registration user data management system",
        desc: [
          "Designed and developed an admin dashboard for managing user data related to insurance registration and policy tracking. This system enables administrators to efficiently handle user registrations, verify policy details, and monitor transaction history in real time.",
          "Handling large volumes of user registration data securely and efficiently.",
          "Implementing a structured data management system to track policy statuses and claim histories.",
          "Ensuring intuitive user experience for administrators to quickly access and manage customer information."
        ],
        technologies: ["Reactjs", "Ant Design", "HTML5", "Chart", "Css"],
      },
      {
        logo: "/img/icons/common/volta.png",
        name: "Volta Charging – Electricity Consumption Dashboard (U.S. Market)",
        desc: [
          "A web-based dashboard for tracking electricity consumption at EV charging stations across the U.S."
        ],
        other:[
          {
            name: "Ev charging stations Portal",
            desc: [
              "Track electricity consumption at EV charging stations across the US.",
              "Integrated data visualization tools (Chart.js) to provide actionable insights."
            ]
          },
          {
            name: "Monitor population dashboard",
            desc: [
              "Developed an interactive map displaying energy usage statistics across different states."
            ]
          }
        ],
        technologies: ["Reactjs", "Redux", "Sass", "Material UI", "Github", "MapBoxGl", "React Router", "Chart", "Figma", "Jira"],
      },
      {
        logo: "/img/icons/common/amaze.png",
        name: "Amaze Seller Center - KOL & Store Product Management System",
        desc: [
          "Built a comprehensive platform that helps businesses manage KOLs, products, and advertising campaigns effectively.",
        ],
        other: [
          {
            name: "Admin Panel",
            desc: [
              "Designed to manage and analyze user data, KOL activities, products, store, package usage history,....",
              "Integrated real-time data visualization for tracking sales performance and ad efficiency."
            ]
          },
          {
            name: "Amaze Center",
            desc: [
              "Allows users to create products, design advertising banners, set up stores, track inventory, and monitor shopping campaigns, affiliate analysis, ...",
              "Deploy store data tracking and campaign insights to make better decisions."
            ]
          }
        ],
        technologies: ["Reactjs", "Redux", "Tailwindcss", "Ant Design", "GitLab", "React Router", "Chart", "Figma"],
      }
    ],
    technologies: ["Reactjs", "Nextjs", "Redux", "Tailwindcss", "Sass", "React query", "Ant Design", "GitLab", "MapBoxGl", "React Router", "Chart", "Figma"]
  },
  {
    id: '3',
    role: "FrontEnd Developer",
    company: "SpaceFinTech",
    companyLogo: "/img/icons/common/spacefintech.png",
    date: "Oct 2021 - Feb 2022",
    desc: "A secure online platform for buying, selling, transferring, and storing cryptocurrencies and NFTs, supporting multiple blockchain networks.",
    technologies: ["Reactjs", "Bootstrap", "Redux", "React Router", "Styled-components", "Web3-React", "Mui"]
  },
  {
    id: '4',
    role: "FrontEnd Developer & Designer",
    company: "VietUnion Online Services Corporation (Payoo) - Internship",
    companyLogo: "/img/icons/common/payoo.png",
    date: "Mar 2020 - Jul 2021",
    desc: "The website design project synthesizes all payoo services and integrates some new services",
    technologies: ["Reactjs", "Bootstrap", "Redux", "React Router", "Figma"]
  },
];

export const projects: ProjectType[] = [
  {
    id: "1",
    name: "Agent Admin Portal",
    desc: "Admin portal web application for managing users, prompts, tasks, facial recognition, email history, reports, and Telegram chat boxes.",
    link: "#"
  },
  {
    id: "2",
    name: "JobFi - Employer Portal",
    desc: "A dashboard for employers to manage job postings, track applications, buy packages, trade CV, post job (with AI integration), introduce candidates to employers, candidate filtering systems, and more.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://drive.google.com/file/d/1NfdX03QYFVO6_uTmXBJBURkrrWU2kj4M/view?usp=sharing",
  },
  {
    id: "3",
    name: "JobFi - Job Seeker",
    desc: "The interface design allows users (for candidates): create profiles, apply for jobs easily (with AI integration for apply by PDF), optimize profile with AI, built advanced job filtering by industry, location, and salary for a seamless job search experience and more.",
    link: "https://drive.google.com/file/d/112If27IFZzNebH2VKthbcGiZRGHOw6Sp/view?usp=sharing",
  },
  {
    id: "4",
    name: "JobFi - Admin Portal",
    desc: "Develop a system to manage the entire system's user list, list of posts, handle activities such as providing points, approving user profiles, limiting posts, and entering CVs into the system.",
    link: "https://drive.google.com/file/d/16cz0AmKaBgDj5YbmuekZPNuaz-_K6eDc/view?usp=sharing",
  },
  {
    id: "5",
    name: "JobFi - CRM Portal",
    desc: "Design a recruitment information board to manage the list of users who purchase points packages and approve package purchases.",
    link: "https://drive.google.com/file/d/1GQ2USi-DrFJEo-TeQJHYGiEqXDGhKTXM/view?usp=sharing",
  },
  {
    id: "6",
    name: "JobFi - Sales Portal",
    desc: "Build an interface to manage recruiters, view point usage and CV purchase activities, assign permissions to sales and send automatic emails.",
    link: "https://drive.google.com/file/d/1rX6gw9rSPoVVGaTmy2k_fESPlXZpL6zE/view?usp=sharing",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Tran Trung Duc",
  description: greetings.description,
  author: "Tran Trung Duc",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "",
  keywords: [
    "DucTran-99",
    "Portfolio",
    "Tran Trung Duc Portfolio",
  ],
};