import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="flex flex-col w-full h-full items-start justify-center sm:gap-8 gap-4">
            <motion.div
                 
                className="flex flex-col sm:gap-4 gap-2"
            >
                <h3 className="text-primary-custom font-mono">Hello, my name is</h3>
                <h3 className="md:text-[4rem] sm:text-5xl text-3xl font-bold">Kyle Bolo.</h3>
                <h3 className="md:text-[4rem] sm:text-5xl text-3xl font-bold opacity-50">Welcome to my world.</h3>
                <h3 className="opacity-50 md:w-[60%]">
                A passionate coder, designer, and engineer. I thrive on creating innovative solutions, crafting beautiful designs, and engineering robust systems. Let’s build something amazing together!
                </h3>
            </motion.div>
            <Link href='#About' className="w-full sm:w-auto">
                <div className="flex flex-row items-center gap-2 text-mono justify-center border-solid border-[1px] w-full py-4 px-8 border-primary-custom text-primary-custom rounded-sm">
                    <h3>Explore</h3>
                    <FaArrowDown className="animate-bounce" />
                </div>
            </Link>
        </div>
    )
}