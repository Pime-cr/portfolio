import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect} from 'react';



export const NavBar = ()=>{
    const [activeLink,setActiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY>50){
                setScrolled(true);
            } else 
                setScrolled(false);
            }
        window.addEventListener("scroll",onScroll)
        return window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }

    return(
    <Navbar bg="dark" variant="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "Home" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === "link" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("link")}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}