import "./about.scss"
import { motion } from "framer-motion"


const data = [
    {
        id: 1,
        t1: "Undergraduate",
        t2: "Software",
        t3: "Engineer",
        year: "(2021 - 2024)"
    },
    {
        id: 2,
        t1: "MERN",
        t2: "Stack",
        t3: "Developer",
        year: "(2022 - 2023)"
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
        y: -500,
        opacity: 0,
    }
}

const AboutSection = ({ data }) => {
    return (
        <section>
            <motion.div className="container">
                <motion.div variants={titleVariant} initial='hidden' whileInView='visible' className="wrapper">
                    <motion.h1 variants={titleVariant} className="t1" style={{marginLeft: data.t1 === "MERN" ? "180px" : ""}}>{data.t1}</motion.h1>
                    <motion.h1 variants={titleVariant} className="t2">{data.t2}</motion.h1>
                    <motion.h1 variants={titleVariant} className="t3">{data.t3}</motion.h1>
                </motion.div>
                <div className="supportingTitle">
                    <hr />
                    <p>
                        Year Of Graduation
                        <br />
                        {data.year}
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

const About = () => {
    return (
        <div id="about">
            <div className="heading">
                <h1>About Me</h1>
            </div>
            {
                data.map((item) => (
                    <AboutSection key={item.id} data={item} />
                ))
            }
        </div>
    )
}

export default About