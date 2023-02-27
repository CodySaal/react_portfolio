import { Navbar, Nav, Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    const [activeLink, setActiveLink] = useState("aboutme")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        } 

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const ontimeupdateActiveLink = (value) => {
        setActiveLink(value)
    }
    return (
        <Navbar  expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">Cody Saal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={activeLink === "About Me" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("About Me")}>About Me</NavLink>
                        <NavLink to="/Portfolio" className={activeLink === "Portfolio" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("Portfolio")}>Portfolio</NavLink>
                        <NavLink to="/Contact" className={activeLink === "Contact" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("Contact")}>Contact</NavLink>
                        <NavLink to="/Resume" className={activeLink === "Resume" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("Resume")}>Resume</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar