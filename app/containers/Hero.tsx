'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import CustomButton from "../components/CusomButton";

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col w-full h-full items-start justify-center sm:gap-8 gap-4"
        >
            <div
                className="flex flex-col sm:gap-4 gap-2"
            >
                <h3 className="text-primary-custom font-mono">Hello there 👋, my name is</h3>
                <h3 className="md:text-[4rem] sm:text-5xl text-3xl font-bold">Kyle Bolo.</h3>
                <h3 className="md:text-[4rem] sm:text-5xl text-3xl font-bold opacity-50">Welcome to my world.</h3>
                <h3 className="opacity-50 md:w-[60%]">
                A passionate coder, designer, and engineer. I thrive on creating innovative solutions, crafting beautiful designs, and engineering robust systems. Let’s build something amazing together!
                </h3>
            </div>
            <CustomButton
                href="#About"
                content={
                    <div className="flex flex-row gap-2 items-center justify-center p-2">
                        <h3>Explore</h3>
                        <FaArrowDown className="animate-bounce text-xs" />
                    </div>
                }
                className="sm:w-auto w-full"
            />
        </motion.div>
    )
}