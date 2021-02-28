import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props: any) {
  return (
    <Nav.Item>
      <Nav.Link as={NavLink} to={props.path} className="nav-link">
        {props.linkText}
      </Nav.Link>
    </Nav.Item>
  );
}
