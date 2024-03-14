import ServiceCard from "../ServiceCard/ServiceCard"
import "./services.scss"
import { motion } from "framer-motion"

const Services = () => {
    return (
        <div className='services'>
            <div className="textContainer">
                <p>
                    I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </div>
            <div className="titleContainer">
                <div className="title">
                    <h1><span>Unique</span> Ideas</h1>
                </div>
                <div className="title">
                    <h1>For Your <span>Business</span></h1>
                </div>
            </div>
            <div className="cardContainer">
                <ServiceCard />
            </div>
        </div>
    )
}

export default Services