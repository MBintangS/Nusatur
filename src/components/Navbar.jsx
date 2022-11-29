import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { ABOUT, DESTINATION, GALLERY, HOME, TRAVELBLOG } from "../routes";
import Logo from "../img/Logo.png";
import "../styles/navs.css"

const NavsButton = ({ to, title, isShow }) => {
  return (
    <NavLink
      to={to}
      className="nav-link"
      style={{ fontSize: "20px", fontWeight: "500" }}
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
              to={DESTINATION} 
              title="Destinations" 
              isShow={pathname === DESTINATION} 
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
              to={ABOUT} 
              title="About us" 
              isShow={pathname === ABOUT} 
            /> 
          </Nav> 
        </Navbar.Collapse> 
      </Container> 
    </Navbar> 
  ); 
}; 

export default Navs;
