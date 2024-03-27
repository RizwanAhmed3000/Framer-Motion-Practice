import "./about.scss"

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


const AboutSection = ({ data }) => {
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <h1 className="t1">{data.t1}</h1>
                    <h1 className="t2">{data.t2}</h1>
                    <h1 className="t3">{data.t3}</h1>
                </div>
                <div className="supportingTitle">
                    <hr />
                    <p>
                        Year Of Graduation
                        <br />
                        {data.year}
                    </p>
                </div>
            </div>
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