import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import  Project  from "./Project"
import "animate.css";
import TrackVisibility from "react-on-screen"
import cfb from "../assets/images/cfb_scoreboard.png"
import githubSearch from "../assets/images/github_search.png"
import jateScreenshot from "../assets/images/jatescreenshot.png"
import noteScreenshot from "../assets/images/note_taker_screenshot.png"
import socialScreenshot from "../assets/images/social_network_api.png"
import techScreenshot from "../assets/images/tech_blog_screenshot.png"

const Projects = () => {

    const frontEnd = [
        {
            title:"Note Taker",
            github:"https://github.com/CodySaal/note_taker",
            imgUrl:noteScreenshot,
            link: "https://saal-note-taker.herokuapp.com/",
        },
    ];

    const backEnd = [
        {
            title:"Social Network API",
            github:"https://github.com/CodySaal/social_network_api",
            imgUrl:socialScreenshot,
        },
    ];

    const fullStack = [
        {
            title: "J.A.T.E." ,
            github: "https://github.com/CodySaal/pwa_text-editor",
            imgUrl:jateScreenshot,
            link: "https://dry-island-47595.herokuapp.com/",
        },
        {
            title:"Tech Blog",
            github:"https://github.com/CodySaal/tech_blog",
            imgUrl:techScreenshot,
            link: "https://lit-savannah-08132.herokuapp.com/",
        },
        {
            title:"College Football Pickem",
            github:"https://github.com/Hunter-Mayer/college-football-pickem",
            imgUrl:cfb,
            link: "https://safe-sands-42348.herokuapp.com/",
        },
        {
            title:"Github Repo Search",
            github:"https://github.com/CodySaal/github_repo_search",
            imgUrl:githubSearch,
            link: "https://codysaal.github.io/github_repo_search/",
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate_animated animate_fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>These are the most recent projects that I have worked on.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front-End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back-End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          frontEnd.map((project, index) => {
                            return (
                              <Project
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          backEnd.map((project, index) => {
                            return (
                              <Project
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          fullStack.map((project, index) => {
                            return (
                              <Project
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                        </div>
                        }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects