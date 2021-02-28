import "./Navigation.scss";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={NavLink} to="/">
        m.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "28%" }} fill className="ml-auto">
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/about" linkText="About" />
          <a href="#projects-section" className="nav-link">
            Projects
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
