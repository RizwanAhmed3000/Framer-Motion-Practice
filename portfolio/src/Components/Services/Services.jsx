import ServiceCard from "../ServiceCard/ServiceCard"
import "./services.scss"
import { motion } from "framer-motion"

const cardData = [
    {
        title: "Frontend Development",
        desc: "Creates a responsive and Eye-catching frontend for your website that not just bring business but also grabs attention of the users and esay to use."
    },
    {
        title: "Backend Development",
        desc: "I specialize in crafting robust digital foundations using Python, Node.js, and more. Let's shape the digital frontier together. Welcome to a world of limitless possibilities."
    },
    {
        title: "Full-Stack Development",
        desc: " Unlock the Full Stack Development experience: Seamlessly blend frontend finesse with backend robustness. Let's shape the digital realm together."
    },
    {
        title: "Mobile App Development",
        desc: "Dive into Mobile App Development with React Native. Seamlessly craft apps for iOS and Android platforms. Let's sculpt digital experiences together. "
    },
]

const textVariant = {
    visible: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    },
    hidden: {
        x: 500,
        opacity: 0,
        y: 100,
        transition: {
            duration: 1
        }
    }
}
const titleVariant = {
    visible: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    },
    hidden: {
        x: -500,
        opacity: 0,
        y: 100,
    }
}

const Services = () => {
    return (
        <div className='services'>
            <motion.div className="textContainer" variants={textVariant} initial="hidden" whileInView='visible'>
                <p>
                    I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div variants={titleVariant} initial='hidden' whileInView='visible'>
                <motion.div className="titleContainer" variants={titleVariant} >
                    <div className="title">
                        <h1><motion.span whileHover={{ color: "#fca311" }}>Build</motion.span> Apps</h1>
                    </div>
                    <div className="title">
                        <h1>For Your <motion.span whileHover={{ color: "#fca311" }}>Business</motion.span></h1>
                    </div>
                </motion.div>
                <motion.div variants={titleVariant} className="cardContainer">
                    {
                        cardData.map((item) => (
                            <ServiceCard data={item} />
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Services