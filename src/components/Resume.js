import { Container, Row, Col } from "react-bootstrap"
import resume from "../assets/images/resume_screenshot.png"

const Resume = (() => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <span className="tagline">Skills</span>
                            <p>Applications: MongoDB, MySQL, GitHub</p>
                            <p>Languages: HTML5, CSS3, JavaScript ES6+, SQL, NoSQL, GraphQL</p>
                            <p>Tools: React, Expreess, Node, Bootstrap, Sequelize, Mongoose, Apollo, jQuery, Handlebars</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div>
                            <img src={resume} alt="Resume Screenshot" id="resumeScreenshot" />
                            <p>Download my <a href="./cody_saal_resume.pdf" download="cody_saal_resume">resume</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
})

export default Resume
