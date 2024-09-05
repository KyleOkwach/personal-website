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


export default function About({ info, technologies }: { info: SanityDocument, technologies: SanityDocument[] }) {
    const targetDiv = useRef(null)
    const { scrollYProgress } = useScroll({ target: targetDiv });
    const transformLeft = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"])
    const transformight = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])

    const profileImageUrl = info.profileImage? urlFor(info.profileImage)?.url(): null;
    const resumeFileUrl = info.resumeFile
    
    return (
        <motion.div
            className="w-full h-full flex flex-col items-center justify-center gap-4"
        >
            <div className="flex lg:flex-row flex-col items-center justify-center gap-16 w-full">
                <div className="relative group md:min-w-[360px] md:min-h-[360px] min-w-64 min-h-64">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 rounded-lg translate-y-2 bg-primary-custom group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    {/* <span className="absolute inset-0 w-full h-full bg-background-custom border-2 border-primary-custom group-hover:bg-primary-custom rounded-lg"></span> */}
                    <span className="relative md:min-w-[360px] md:h-[360px] w-64 h-64">
                        <span className="w-full h-full bg-primary-custom/25 group-hover:bg-primary-custom/0 z-10 absolute top-0 rounded-lg"></span>
                        <Image src={profileImageUrl || 'placeholder-profile.jpg'} width={400} height={400} className="rounded-lg" alt="profile picture" />
                    </span>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h3 className="sm:text-5xl text-3xl font-mono">About Me</h3>
                    <span className="w-full h-1 bg-primary-custom"></span>
                    <h3 className="opacity-70 w-full">
                        <BlockRenderer block={info.aboutMe} className="justify-center" />
                    </h3>
                </div>
            </div>
        </motion.div>
    )
}