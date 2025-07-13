"use client"

import Button from "@/components/Button"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { fadeDown, fadeUp, staggerText } from "@/utils/animations"
import Link from "next/link"

const Header = () => {

    const text = "Get support. Start your own page. Share your favorite drinks."
    const letters = text.split("")

    return (
        <div className="flex flex-col items-center gap-6">
            <motion.div
                initial={fadeDown.initial}
                animate={fadeDown.animate}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center gap-2 mt-24"
            >
                {[0, 1, 2, 3, 4].map((item) => (
                    <Star
                        key={item}
                        className="text-green-700 fill-green-700 size-4"
                    />
                ))}
                <span className="md:text-lg text-sm text-neutral-700">
                    Loved by 1,000+ creators
                </span>
            </motion.div>

            <motion.h1
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="lg:text-7xl md:text-5xl text-4xl font-semibold text-center"
            >
                Share your <br /> chiya moments
            </motion.h1>

            <div>
                {letters.map((letter, idx) => (
                    <motion.p
                        key={idx}
                        {...staggerText(idx)}
                        className="text-neutral-800 md:text-lg text-sm inline-block"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.p>
                ))}

            </div>

            <motion.div
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
            >
                <Link href={'/signup'}>
                    <Button className="bg-[var(--yellow)] md:text-xl text-lg font-semibold px-9 py-4">
                        Start my page
                    </Button>
                </Link>
            </motion.div>

            <motion.p
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
                className="text-neutral-800 md:text-sm text-xs">
                Quick, easy & free to start!
            </motion.p>
        </div >
    )
}

export default Header