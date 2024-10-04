import { FaExternalLinkAlt, FaReact } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { SiExpress, SiMongodb } from "react-icons/si"

interface ProjectCardProps {
    className?: string,
    data: any
}

export function Tag({ text }: { text: string }) {
    return (
        <div className="rounded-full p-1 px-4 bg-secondary-custom/40">
            <h3 className="text-xs font-semibold text-text-custom/70">
                {text}
            </h3>
        </div>
    )
}

export default function ProjectCard({ className, data }: ProjectCardProps) {
    return (
        <div
            className={`${className} flex flex-col gap-2 p-8 w-72 h-64 border-solid bg-primary-custom/0 border-[1px] border-text-custom/20 hover:border-primary-custom/90 rounded-sm
            transition-all ease-in duration-300 group justify-between`}
        >
            <div className="flex flex-row justify-start items-center gap-2">
                {/* Tags */}
                <Tag text="Web" />
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold group-hover:text-primary-custom">Web Chatting Application</h3>
                <p className="text-sm text-text-custom/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, consectetur? Sint dicta neque necessitatibus.
                </p>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                    <FaReact className="text-lg text-text-custom/70" />
                    <SiMongodb className="text-lg text-text-custom/70" />
                    <SiExpress className="text-lg text-text-custom/70" />
                </div>
                <div className="flex flex-row gap-2">
                    <a className="text-lg text-text-custom/70 hover:text-primary-custom" href="#git"><FiGithub /></a>
                    <a className="text-lg text-text-custom/70 hover:text-primary-custom" href="#git"><FaExternalLinkAlt /></a>
                </div>
            </div>
        </div>
    )
}