import { motion } from "framer-motion"

const Test = () => {
    return (
        <div className='test'>
            <motion.div className="box" initial={{ opacity: 0.5, scale: 0.5 }} whileHover={{ opacity: 1, scale: 1.2 }} transition={{ duration: 1, type: "spring", stiffness: 150 }}></motion.div>
        </div>
    )
}

export default Test