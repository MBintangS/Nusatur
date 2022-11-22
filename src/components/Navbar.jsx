import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ABOUT, DESTINATION, GALLERY, HOME, TRAVELBLOG } from "../routes";
import Logo from "../img/Logo.png";


const Navs = () => {
  return (
    <>
      <Navbar  variant="dark" expand="lg" className="fixed-top" style={{backgroundColor:"#121212"}} >
        <Container>
          <NavLink to={HOME} className="navbar-brand">
            <img src={Logo} alt="logo" style={{ width: "150px" }}></img>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ gap:"90px"}}>
              <NavLink to={HOME} className="nav-link " style={{fontSize: "20px", fontWeight:"400"}}>
                Home
                <div className="red-line"></div>
              </NavLink>
              <NavLink to={DESTINATION} className="nav-link" style={{fontSize: "20px", fontWeight:"400"}}>
                Destination
              </NavLink>
              <NavLink to={GALLERY} className="nav-link" style={{fontSize: "20px", fontWeight:"400"}}>
                Gallery
              </NavLink>
              <NavLink to={TRAVELBLOG} className="nav-link" style={{fontSize: "20px", fontWeight:"400"}}>
                Travel Blog
              </NavLink>
              <NavLink to={ABOUT} className="nav-link" style={{fontSize: "20px", fontWeight:"400"}}>
                About Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
