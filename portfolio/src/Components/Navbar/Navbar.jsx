import './navbar.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion"


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
        onTap:{
            scale: 0.8,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
            }
        }
    }

    return (
        <div className='navbar'>
            {/* Sidebar */}
            <div className="wrapper">
                <motion.a href='#' className="logo" initial="hidden" whileTap="onTap" animate="visible" variants={variants}>
                    Rizwan <motion.span whileHover={{ color: "#e5e5e5" }} className='logo'>Ahmed</motion.span>
                </motion.a>
                <div className="social">
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><LinkedInIcon /></a>
                    <a href="#"><GitHubIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar