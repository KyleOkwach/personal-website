import { FaBuffer, FaHome, FaUser } from "react-icons/fa";
import { FaToolbox, FaXTwitter } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";

import containers from "./containers"
import { FiBriefcase, FiGithub, FiLinkedin, FiTool } from "react-icons/fi";

const { Hero, About, Tools, Projects, Experience, Contact } = containers

export const NavItems = [
    {
        name: "Home",
        href: "/",
        icon: FaHome,
        section: Hero,
        showInNavbar: false,
    }, {
        name: "About Me",
        href: "#About",
        icon: FaUser,
        section: About,
        showInNavbar: true,
    }, {
        name: "Tools",
        href: "#Tools",
        icon: FiTool,
        section: Tools,
        showInNavbar: true,
    }, {
        name: "Projects",
        href: "#Projects",
        icon: FaBuffer,
        section: Projects,
        showInNavbar: true,
    }, {
        name: "Experience",
        href: "#Experience",
        icon: FiBriefcase,
        section: Experience,
        showInNavbar: true,
    }, {
        name: "Contact",
        href: "#Contact",
        icon: TiContacts,
        section: Contact,
        showInNavbar: true,
    },
];

export const SocialLinks = [
    {
        name: "Github",
        href: "https://github.com/KyleOkwach",
        icon: FiGithub
    }, {
        name: "X",
        href: "https://x.com/bolo_kyle",
        icon: FaXTwitter
    }, {
        name: "Linkedin",
        href: "http://linkedin.com/in/kyle-bolo-708016277/",
        icon: FiLinkedin
    }
]