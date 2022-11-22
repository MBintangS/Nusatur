<<<<<<< HEAD
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
=======
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../img/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { ABOUTUS, DESTINATIONS, GALLERY, HOME, TRAVELBLOG } from "../routes";
import "../styles/stylescompnavbar.css";

const NavsButton = ({ to, title, isShow }) => {
  return (
    <NavLink
      to={to}
      className="nav-link"
      style={{ fontSize: "15px", fontWeight: "400" }}
    >
      <section
        style={{ margin: "auto", display: "flex", flexDirection: "column" }}
      >
        {title}
        {isShow && <div className="garis-bawah-navbar" />}
      </section>
    </NavLink>
  );
};

const Navs = () => {
  const { pathname } = useLocation();

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="fixed-top"
      style={{ backgroundColor: "#121212" }}
    >
      <Container>
        <NavLink to={HOME} className="navbar-brand">
          <img src={Logo} alt="logo" className="navbarlogo"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: "70px" }}>
            <NavsButton to={HOME} title="Home" isShow={pathname === HOME} />
            <NavsButton
              to={DESTINATIONS}
              title="Destinations"
              isShow={pathname === DESTINATIONS}
            />
            <NavsButton
              to={GALLERY}
              title="Gallery"
              isShow={pathname === GALLERY}
            />
            <NavsButton
              to={TRAVELBLOG}
              title="Travel Blog"
              isShow={pathname === TRAVELBLOG}
            />
            <NavsButton
              to={ABOUTUS}
              title="About us"
              isShow={pathname === ABOUTUS}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
>>>>>>> 0d15e8b (rebuild UI)
  );
};

export default Navs;
