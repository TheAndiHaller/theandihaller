import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./Navbar.jsx";

export default function Blog() {
  return (
    <Container>
      <Navbar />
      <h1>Blog</h1>
    </Container>
  );
}
