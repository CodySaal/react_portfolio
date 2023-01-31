import { Container, Row, Col } from "react-bootstrap"
import { Github, Linkedin, StackOverflow } from "react-bootstrap-icons"

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/CodySaal" target="blank"><Github size={35} className="align-center" /></a>
                            <a href="https://www.linkedin.com/in/cody-saal-b07a781a3/" target="blank"><Linkedin size={35} className="align-center"/></a>
                            <a href="https://stackoverflow.com/users/19693165/cody-saal?tab=profile" target="blank"><StackOverflow size={35} className=""/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer