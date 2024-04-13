import './navbar.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion"
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {

    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
            }
        },
        hidden: {
            opacity: 0,
            scale: 0.5,
            x: -100
        },
        onTap: {
            scale: 0.5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
            }
        },
        onHover: {
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
            }
        }
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delayChildren: 0.3,
                staggerChildren: 0.2
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
        <div className='navbar'>
            {/* Sidebar */}
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.a href='#' className="logo" initial="hidden" whileTap="onTap" whileHover="onHover" animate="visible" variants={variants}>
                    Rizwan <motion.span whileHover={{ color: "#e5e5e5" }} className='logo'>Ahmed</motion.span>
                </motion.a>
                <motion.div className="social" initial="hidden" animate="visible" variants={container}>
                    <motion.a href="#" variants={container} whileHover="onHover" whileTap="onTap"><FacebookIcon /></motion.a>
                    <motion.a href="#" variants={container} whileHover="onHover" whileTap="onTap"><InstagramIcon /></motion.a>
                    <motion.a href="#" variants={container} whileHover="onHover" whileTap="onTap"><LinkedInIcon /></motion.a>
                    <motion.a href="#" variants={container} whileHover="onHover" whileTap="onTap"><GitHubIcon /></motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar