import './hero.scss'
import { motion } from "framer-motion"

const textVartiants = {
    initial: {
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 160,
            damping: 10
        }
    },
    initial2: {
        x: 500,
    },
    animate2: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    },
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="name" variants={textVartiants}>
                    <motion.h2 variants={textVartiants} initial="initial" animate="animate">Rizwan Ahmed</motion.h2>
                </motion.div>
                <motion.div variants={textVartiants} className="stack">
                    <motion.h2 variants={textVartiants} initial="initial2" animate="animate2">MERN <span>Developer</span></motion.h2>
                </motion.div>
                <div className="imgContainer">
                    <img src="/myImgHD2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero