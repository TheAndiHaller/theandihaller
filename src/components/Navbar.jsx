import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo.png"

export default function Navbar() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src={logo} alt="logo" className="img-navBar" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            HOME
          </Link>
        </li>
        <li
          className="nav-item"
        >
          <Link
            to="/projects"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blog"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            BLOG
          </Link>
        </li>
        <li
          className="nav-item"
        >
          <Link
            to="/resume"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            RESUME
          </Link>
        </li>

      </ul>
    </nav>




  );
}



// <Nav fill bg="dark" variant="dark" defaultActiveKey="/">
// <Nav.Item>
//   <Nav.Link href="/">Home</Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link href="/projects" eventKey="/projects">Projects</Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link href="/blog" eventKey="/blog">Blog</Nav.Link>
// </Nav.Item>
// <Nav.Item>
//   <Nav.Link href="/resume" eventKey="/resume" >Resume</Nav.Link>
// </Nav.Item>
// </Nav>