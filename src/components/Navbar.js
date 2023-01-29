import { Navbar, Nav, Container } from "react-bootstrap"
import { useEffect, useState } from "react"

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
                <Navbar.Brand href="#aboutme">Cody Saal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutme" className={activeLink === "aboutme" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("aboutme")}>About Me</Nav.Link>
                        <Nav.Link href="#Portfolio" className={activeLink === "Portfolio" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("Portfolio")}>Portfolio</Nav.Link>
                        <Nav.Link href="#Contact" className={activeLink === "Contact" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("Contact")}>Contact</Nav.Link>
                        <Nav.Link href="#Resume" className={activeLink === "Resume" ? "active navbar-link": "navbar-link"} onClick={() => ontimeupdateActiveLink("Resume")}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar