import { motion } from "framer-motion"

const Links = () => {
    const items = [
        "Home",
        "Services",
        "Portfolio",
        "About",
        "Contact",
    ]

    const variants = {
        close: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.1,
            }
        }
    }
    const itemVariants = {
        close: {
            x: -50,
            opacity: 0,
        },
        open: {
            x: -0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },
        onHover: {
            color: "#fca311",
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
            }
        },
        onTap: {
            color: "#fca311",
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
            }
        }
    }

    return (
        <motion.div className='links' variants={variants}>
            {
                items.map((item) => (
                    <motion.a href={`#${item}`} whileHover="onHover" whileTap="onTap" variants={itemVariants}>
                        {item}
                    </motion.a>
                ))
            }
        </motion.div>
    )
}

export default Links