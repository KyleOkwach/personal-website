'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Tools from "../components/Tools";
import BlockRenderer from "../components/BlockRenderer";
import { urlFor } from "@/sanity/lib/image";
import CustomButton from "../components/CustomButton";
import { useRef } from "react";
import Heading from "../components/Heading";


export default function About({ info, technologies }: { info: SanityDocument, technologies: SanityDocument[] }) {
    const targetDiv = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetDiv });

    const profileImageUrl = info.profileImage? urlFor(info.profileImage)?.url(): null;
    const resumeFileUrl = info.resumeFile
    
    return (
        <motion.div
            className="w-full h-full flex flex-col items-center justify-center gap-4"
        >
            <div className="flex lg:flex-row flex-col items-center justify-center gap-16 w-full">
                <div className="relative group size-32 md:min-w-80 md:h-80">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-4 rounded-sm translate-y-4 border-dashed border-[1px] border-primary-custom/70 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="relative w-full h-full">
                        <span className="w-full h-full bg-primary-custom/25 group-hover:bg-primary-custom/0 z-10 absolute top-0 rounded-sm"></span>
                        <Image src={profileImageUrl || 'placeholder-profile.jpg'} width={320} height={320} className="rounded-sm" alt="profile picture" />
                    </span>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <Heading icon={<FiUser />}> About Me</Heading>
                    <h3 className="opacity-70 w-full">
                        <BlockRenderer block={info.aboutMe} className="justify-center" />
                    </h3>
                    <h3>
                        <a href={'#resume'} download className="text-primary-custom">Download my resume</a>
                    </h3>
                </div>
            </div>
        </motion.div>
    )
}