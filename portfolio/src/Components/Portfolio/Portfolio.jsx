import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Project Title",
        img: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat esse modi ipsam dignissimos repudiandae recusandae, tempora facere eius sunt quas impedit accusantium. Saepe et asperiores nostrum dolorem! Totam, placeat."
    },
    {
        id: 2,
        title: "Project Title 2",
        img: "https://images.unsplash.com/photo-1711139279274-ddff5036591a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat esse modi ipsam dignissimos repudiandae recusandae, tempora facere eius sunt quas impedit accusantium. Saepe et asperiores nostrum dolorem! Totam, placeat."
    },
    {
        id: 3,
        title: "Project Title 3",
        img: "https://images.unsplash.com/photo-1710781404053-dc7ffa39c996?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat esse modi ipsam dignissimos repudiandae recusandae, tempora facere eius sunt quas impedit accusantium. Saepe et asperiores nostrum dolorem! Totam, placeat."
    },
    {
        id: 4,
        title: "Project Title 4",
        img: "https://images.unsplash.com/photo-1711117479067-584465e4466a?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat esse modi ipsam dignissimos repudiandae recusandae, tempora facere eius sunt quas impedit accusantium. Saepe et asperiores nostrum dolorem! Totam, placeat."
    },
]

const SingleSection = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const xImg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
    const xText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section >
            <div className="container" >
                <div className="wrapper" ref={ref}>
                    <motion.div style={{ x: xImg }} className="left">
                        <img src={item.img} alt="" />
                    </motion.div>
                    <motion.div style={{ x: xText }} className="right">
                        <h1>
                            {item.title}
                        </h1>
                        <p>
                            {item.desc}
                        </p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 160,
        damping: 20
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Work</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map((item) => (
                    <SingleSection item={item} key={item.id} />
                ))
            }
        </div>

    )
}

export default Portfolio