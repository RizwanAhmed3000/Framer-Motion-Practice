import './serviceCard.scss'
import { motion } from "framer-motion"

const variant = {
    onHover: {
        scale: 1.05,
        backgroundColor: "#e5e5e5",
        color: "black",
    }
}

const ServiceCard = ({ data }) => {
    // console.log(data)
    return (
        <motion.div className='card' variants={variant} whileHover='onHover'>
            <div className="wrapper">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
        </motion.div>
    )
}

export default ServiceCard