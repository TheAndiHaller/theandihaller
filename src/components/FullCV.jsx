import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./Navbar.jsx";

export default function FullCV() {
  return (
    <Container>
      <Navbar />
      <h1>Resume</h1>
    </Container>
  );
}
