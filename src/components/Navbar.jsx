import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <Nav fill bg="dark" variant="dark" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects" eventKey="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/blog" eventKey="/blog">Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/resume" eventKey="/resume" >Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
