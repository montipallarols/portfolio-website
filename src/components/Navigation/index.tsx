import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Navigation() {
  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand as={NavLink} to="/">
        M.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "40%" }} fill className="ml-auto">
          <NavbarItem path="/home" linkText="Home" />
          <NavbarItem path="/about" linkText="About" />
          <NavbarItem path="/projects" linkText="Projects" />
          <NavbarItem path="/contact" linkText="Contact" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
