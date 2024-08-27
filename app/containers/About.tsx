'use client'

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Tools from "../components/Tools";
import BlockRenderer from "../components/BlockRenderer";
import { urlFor } from "@/sanity/lib/image";
import CustomButton from "../components/CustomButton";
export default function About({ info }: { info: SanityDocument }) {
    const profileImageUrl = info.profileImage
    ? urlFor(info.profileImage)?.url()
    : null;
    const resumeFileUrl = info.resumeFile
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col w-full h-full items-start justify-center sm:gap-8 gap-4"
        >
            <div className="flex flex-row justify-center items-center gap-4 text-primary-custom w-full">
                <span className="flex-grow h-[1px] bg-primary-custom/50"></span>
                <div className="flex flex-row gap-4 items-center justify-center">
                    <FiUser className="text-xl" />
                    <h3 className="text-2xl">About Me</h3>
                </div>
                <span className="flex-grow h-[1px] bg-primary-custom/50"></span>
            </div>
            <div className="flex md:flex-row flex-col-reverse md:justify-between items-center gap-4">
                <div className="md:w-2/3 w-full text-text-custom/70">
                    <BlockRenderer block={info.aboutMe} className="justify-start" />
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="flex items-center justify-center relative group">
                        <span className="absolute w-full h-ful group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform ease-in duration-150">
                            <span className="absolute w-full h-full bg-primary-custom opacity-0 group-hover:opacity-0s"></span>
                            <Image src={profileImageUrl || 'vercel.svg'} alt="Profile Picture" width={208} height={208} />
                        </span>
                        <span className="w-52 h-52 bg-primary-custom"></span>
                    </div>
                    <a href={resumeFileUrl} target="_blank">
                        <CustomButton
                            content="Download Resume"
                            className="sm:w-auto w-full"
                        />
                    </a>
                </div>
            </div>
            <Tools />
        </motion.div>
    )
}