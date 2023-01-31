import { Col } from "react-bootstrap"

const Project = (({title, github, imgUrl, altText}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={altText}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{github}</span>
                </div>
            </div>
        </Col>
    )
})

export default Project