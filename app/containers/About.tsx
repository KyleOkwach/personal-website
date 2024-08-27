'use client'

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import Tools from "../components/Tools";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col w-full h-full items-start justify-center sm:gap-8 gap-4"
        >
            <div className="flex flex-row justify-start items-center gap-4 text-primary-custom w-full">
                <FiUser className="text-xl" />
                <h3 className="text-2xl">About Me</h3>
                <span className="w-16 h-[1px] bg-text-custom"></span>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-2/3 text-text-custom/70">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quasi modi quidem vitae, ipsa velit pariatur eos sed ullam sapiente nam ea quis voluptate repellendus quas, exercitationem error numquam hic?
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quasi modi quidem vitae, ipsa velit pariatur eos sed ullam sapiente nam ea quis voluptate repellendus quas, exercitationem error numquam hic?
                    </p>
                </div>
                <div className="flex items-center justify-center relative group">
                    <span className="absolute w-full h-ful group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform ease-in duration-150">
                        <span className="absolute w-full h-full bg-primary-custom opacity-0 group-hover:opacity-0s"></span>
                        <Image src="/placeholder-profile.jpg" alt="Profile Picture" width={208} height={208} />
                    </span>
                    <span className="w-52 h-52 bg-primary-custom"></span>
                </div>
            </div>
            <Tools />
        </motion.div>
    )
}