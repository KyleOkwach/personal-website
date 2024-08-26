'use client'

import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
        >
            About
        </motion.div>
    )
}