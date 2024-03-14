import { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div className='parallax' ref={ref} style={{ background: type === "service" ? "linear-gradient(180deg, #14213d, #0e182f)" : "linear-gradient(180deg, #0e182f, #14213d)" }}>
            <motion.h2 style={{ y: yText }}>{type === "service" ? "What I Do?" : "What I Did?"}</motion.h2>
            <motion.div className="mountaines"></motion.div>
            <motion.div style={{ y: yPlanets }} className="planets"></motion.div>
            <motion.div style={{ x: yStars }} className="stars"></motion.div>
        </div>
    )
}

export default Parallax