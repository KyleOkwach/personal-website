import { FaBuffer } from "react-icons/fa";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section>
            <div className="flex flex-col gap-8 w-full">
                <Heading icon={<FaBuffer />}> Projects</Heading>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                    <ProjectCard data={{}} />
                    <ProjectCard data={{}} />
                    <ProjectCard data={{}} />
                    <ProjectCard data={{}} />
                    <ProjectCard data={{}} />
                </div>
            </div>
        </section>
    )
}