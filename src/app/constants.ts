import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SocialLink } from "@/app/types/global";

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
    { name: "Contact", path: "/contact" },
  ];
  
  export const SOCIAL_LINKS: SocialLink [] = [
    { name: "github", url: "https://github.com/kianlejano", icon: FaGithub },
    { name: "twitter", url: "https://x.com/kianlejano", icon: FaTwitter },
    { name: "linkedin", url: "https://www.linkedin.com/in/lance-kian-lejano-a10029345/", icon: FaLinkedin },
];
  
  export const SITE_METADATA = {
    appName: 'Kiyan',
    title: "My Portfolio",
    description: "A showcase of my web development projects.",
  };

