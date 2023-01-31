import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { ArrowRightCircle } from "react-bootstrap-icons"
import "animate.css"
import TrackVisibility from "react-on-screen"
import headshot from "../assets/images/headshot.jpeg"


const About = (() => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300-Math.random() * 100)
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "High School Teacher" ]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{"Hello, I am Cody Saal "}<span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer","UI/UX Designer"]'><span className="wrap">{text}</span></span></h1>
                                <p>I am a 29 year old physics and math teacher that is looking to make a career in tech. I am passionate about solving problems and making apps that make everyday life easier.</p>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate_animated animate_zoomIn" : ""}>
                                    <img src={headshot} alt="headshot img" />
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
})

export default About
