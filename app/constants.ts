
import { FaBuffer, FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiBriefcase, FiGithub, FiLinkedin, FiUser } from "react-icons/fi";
import { LuContact } from "react-icons/lu";
import containers from "./containers"

const { Hero, About, Projects, Experience, Contact } = containers

export const NavItems = [
    {
        name: "Home",
        href: "/",
        icon: FaHome,
        section: Hero,
        showInNavbar: false,
    }, {
        name: "About Me",
        href: "About",
        icon: FiUser,
        section: About,
        showInNavbar: true,
    }, {
        name: "Projects",
        href: "Projects",
        icon: FaBuffer,
        section: Projects,
        showInNavbar: true,
    }, {
        name: "Experience",
        href: "Experience",
        icon: FiBriefcase,
        section: Experience,
        showInNavbar: true,
    }, {
        name: "Contact",
        href: "Contact",
        icon: LuContact,
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