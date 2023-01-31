import { Col } from "react-bootstrap"
import { Github } from "react-bootstrap-icons"

const Project = (({title, github, imgUrl, altText, link}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={altText}/>
                <div className="proj-txtx">
                    <h4>
                        <a href={link} target= "blank">{title}</a>
                        <br></br>
                        <a href={github}>
                            <Github className="fab fa-github" />
                        </a>
                    </h4>
                </div>
            </div>
        </Col>
    )
})

export default Project