import { FaGithub, FaLinkedin, FaTwitter,  FaDatabase, FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { ProjectType, SocialLink, TechStackType } from "@/app/types/global";

export const SITE_METADATA = {
  appName: 'Kiyan',
  title: "My Portfolio",
  description: "A showcase of my web development projects.",
};

export const PERSONAL_INFO = {
  firstName: 'Lance Kian',
  nickname: 'Kian',
  lastName: 'Lejano',
  fullName: 'Lance Kian Calayag Lejano',
  position: 'Full Stack Developer',
  intro: 'I build fast, scalable, and user-friendly web applications using different frameworks.'
}

export const NAV_MENU = [
  // { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contacts", path: "/contacts" },
  ];
  
export const SOCIAL_LINKS: SocialLink [] = [
  { name: "github", url: "https://github.com/kianlejano", icon: FaGithub },
  { name: "twitter", url: "https://x.com/kianlejano", icon: FaTwitter },
  { name: "linkedin", url: "https://www.linkedin.com/in/lance-kian-lejano-a10029345/", icon: FaLinkedin },
];

export const TECH_STACK: TechStackType[] = [
  {
    title: {
      icon: FaCode,
      description: 'Front-End',
    },
    technologies: [
      {
        name: 'React',
        description: 'A JavaScript library for building dynamic and reusable user interfaces.',
        logo: '/images/logos/react.svg'
      },
      {
        name: 'Vue',
        description: 'A progressive JavaScript framework for building intuitive web UIs.',
        logo: '/images/logos/vue.svg'
      },
      {
        name: 'HTML',
        description: 'The standard markup language for structuring web content.',
        logo: '/images/logos/html.svg'
      },
      {
        name: 'CSS',
        description: 'Stylesheet language for customizing the look and feel of web pages.',
        logo: '/images/logos/css.svg'
      },
      {
        name: 'Tailwind CSS',
        description: 'A utility-first CSS framework for rapidly building modern interfaces.',
        logo: '/images/logos/tailwind-css.svg'
      },
      {
        name: 'Bootstrap',
        description: 'A popular CSS framework for responsive, mobile-first websites.',
        logo: '/images/logos/bootstrap.svg'
      },
      {
        name: 'Ant Design',
        description: 'A design system and React UI library with sleek, enterprise-ready components.',
        logo: '/images/logos/ant-design.svg'
      },
      {
        name: 'DaisyUI',
        description: 'A Tailwind CSS plugin that provides beautiful, pre-styled UI components.',
        logo: '/images/logos/daisyui.svg'
      },
    ]
  },
  {
    title: {
      icon: FaDatabase,
      description: 'Back-end & Database',
    },
    technologies: [
      {
        name: 'NodeJS',
        description: 'A JavaScript runtime that lets you run server-side code using JS.',
        logo: '/images/logos/nodejs.svg'
      },
      {
        name: 'ExpressJs',
        description: 'A minimal and flexible Node.js web application framework.',
        logo: '/images/logos/expressjs.svg'
      },
      {
        name: 'Sequelize',
        description: ' A Node.js ORM for managing SQL databases with JavaScript.',
        logo: '/images/logos/sequelize.svg'
      },
      {
        name: 'PHP',
        description: 'A widely-used open-source scripting language especially suited for web development.',
        logo: '/images/logos/php.svg'
      },
      {
        name: 'MySQL',
        description: 'A widely used open-source relational database management system.',
        logo: '/images/logos/mysql.svg'
      },
      {
        name: 'PostgreSQL',
        description: 'A powerful, open-source object-relational database with advanced features.',
        logo: '/images/logos/postgresql.svg'
      },
      {
        name: 'SQL',
        description: 'A language used to manage and query data in relational databases.',
        logo: '/images/logos/sql.svg'
      },
    ]
  },
  {
    title: {
      icon: CgWebsite,
      description: 'Framework',
    },
    technologies: [
      {
        name: 'NuxtJs',
        description: 'A Vue.js framework for building server-side rendered and static websites.',
        logo: '/images/logos/nuxtjs.svg'
      },
      {
        name: 'NextJs',
        description: 'A powerful React framework for building fast, full-stack web apps.',
        logo: '/images/logos/nextjs.svg'
      },
      {
        name: 'Laravel',
        description: ' A PHP framework offering a full-stack web development experience.',
        logo: '/images/logos/laravel.svg'
      },
      {
        name: 'CodeIgniter',
        description: ' A lightweight PHP framework for building fast and simple web applications.',
        logo: '/images/logos/codeigniter.svg'
      },
    ]
  },
]


export const PROJECTS: ProjectType[] = [
  {
    name: 'NBA Updates',
    pic: '/images/logos/nba-updates.svg',
    description: "This project is a personal Laravel application built to explore REST API integration and modern frontend tools. It fetches NBA data from the Ball Don't Lie API and displays information of players, teams and game schedules. Built with Tailwind CSS and component-based Blade views, and deployed via Docker on Koyeb.",
    createdAt: '2025-03-01',
    link: 'https://nba-updates.koyeb.app/',
    githubRepo: 'https://github.com/kianlejano/nba-updates'
  },
 
]
