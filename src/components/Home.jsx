import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar.jsx";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>
          <Link to={"/"}>Home</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/fullcv"}>Full CV</Link>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}
