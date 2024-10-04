'use client'

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { SanityDocument } from "next-sanity";
import CustomButton from "../components/CustomButton";
import BlockRenderer from "../components/BlockRenderer";
import CustomCursor from "../components/CustomCursor";
import { useState } from "react";



export default function Hero({ info }: { info: SanityDocument }) {
    const [maskSize, setMaskSize] = useState(64);

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col w-full h-full items-start justify-center sm:gap-8 gap-8"
        >
            <div
                className="flex flex-col gap-4 sm:gap-8"
            >
                <h3 className="text-primary-custom font-mono">Hello there 👋,</h3>
                <div className="flex flex-col gap-2 md:text-[5rem] sm:text-5xl text-3xl">
                    <h3 className="font-bold">
                        <div className="flex flex-row relative">
                            <div className="flex flex-row"><p>I'm  { info.fullName }.</p></div>
                            {/* <CustomCursor maskSize={maskSize} setMaskSize={setMaskSize}>
                                <p>
                                    I'm a { info.jobTitle }
                                </p>
                            </CustomCursor> */}
                        </div>
                    </h3>
                    <h3 className="font-bold text-primary-custom opacity-70">{ info.tagLine }</h3>
                </div>
                <h3 className="opacity-70 md:w-[60%]">
                    <BlockRenderer block={info.summary} className="justify-start" />
                </h3>
            </div>
            <CustomButton href="#About" className="sm:w-auto w-full">
                <div className="flex flex-row gap-2 items-center justify-center p-2">
                    <h3>Explore</h3>
                    <FaArrowDown className="animate-bounce text-xs" />
                </div>
            </CustomButton>
        </motion.div>
    )
}