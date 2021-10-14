import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar className="home-nav" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/Logo.svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link className="px-md-4" href="#pricing">
                Escorts
              </Nav.Link>
              <Nav.Link href="#deets">Privacy policy</Nav.Link>
              <Nav.Link className="px-md-4" href="#pricing">
                FAQs
              </Nav.Link>
              <NavDropdown
                className="ps-4 ps-md-3 mx-md-3"
                title="Account"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
