"use client"

import { motion, AnimatePresence } from "framer-motion"

interface Props {
    condition?: boolean
    children: JSX.Element|JSX.Element[]
}

export default function If({ condition, children }: Props) {
    const fade = {
        hidden: {
            opacity: 0,
            transition: {
                duration: .5,
            }
        },
        show: {
            opacity: 1,
            transition: {
                duration: .5,
            }
        },
        out: {
            opacity: 0,
            transition: {
                duration: .5,
            }
        },
    }
    return (
        <AnimatePresence>
            { condition &&
                <motion.div 
                    initial="hidden"
                    animate="show"
                    exit="out"
                    variants={fade}
                >
                    {children}
                </motion.div>
            }
        </AnimatePresence>
    )
}