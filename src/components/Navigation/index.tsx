import "./Navigation.scss";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import { NavHashLink } from "react-router-hash-link";

export default function Navigation() {
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={NavLink} to="/" className="logo">
        m.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill className="ml-auto">
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/about" linkText="About" />
          <NavHashLink exact to="/#projects" className="nav-link">
            Projects
          </NavHashLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
