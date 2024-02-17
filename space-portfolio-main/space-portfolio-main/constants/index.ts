import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Next.js 14",
  //   image: "next.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Framer Motion",
  //   image: "framer.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/_aka_bhaskr/",
  },
  {
    name: "Try Hack Me",
    icon: FaFacebook,
    link: "https://www.facebook.com/shubham.bhaskr.35",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/ShubhamBhasker6/",
  },
] as const;

export const FRONTEND_SKILL = [
  // {
  //   skill_name: "HTML",
  //   image: "html.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "CSS",
  //   image: "css.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "JavaScript",
  //   image: "js.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   skill_name: "Tailwind CSS",
  //   image: "tailwind.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Material UI",
  //   image: "mui.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React",
  //   image: "react.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Redux",
  //   image: "redux.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "TypeScript",
  //   image: "ts.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Next.js 14",
  //   image: "next.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const BACKEND_SKILL = [
  // {
  //   skill_name: "Node.js",
  //   image: "node.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Express.js",
  //   image: "express.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "MongoDB",
  //   image: "mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  // {
  //   skill_name: "Figma",
  //   image: "figma.png",
  //   width: 50,
  //   height: 50,
  // },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
  // {
  //   skill_name: "Metasploit",
  //   image: "metasploit.png",
  //   width: 60,
  //   height: 60,
  // },
] as const;
export const PROJECTS = [
  {
    title: "Android RAT Project",
    description:
      'Embark on a journey through my professional evolution with the "Android RAT Project" - a dynamic showcase of my skills, experiences, and passion for cybersecurity. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "File Integrity Monitor Development",
    description:
      'Step into the extraordinary world of my professional journey through the "File Integrity Monitor Development" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "GPT Clone Project",
    description:
      'Embark on an interstellar journey with my "GPT Clone Project", a mesmerizing project that invites you to explore the cosmic wonders of cybersecurity. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the cyber realm.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },

  // Add more projects as needed
] as const;



export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
           {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/0xDracarys",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/_aka_bhaskr/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://www.linkedin.com/in/shubham-bhasker-63846a203/",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shubham-bhasker-63846a203/",
      },
    ],
  },
  {
    title: "About",
    data: [
         {
        name: "Contact Me",
        icon: null,
        link: "mailto:ShubhamBhaskr123@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://drive.google.com/file/d/14u5Si3n2Bhx0pAo8KyG4PpRtKEoYLpDB/view?usp=sharing",
};
