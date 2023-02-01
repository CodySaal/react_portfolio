import { Container, Row, Col } from "react-bootstrap"

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
                                </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
})

export default Resume
