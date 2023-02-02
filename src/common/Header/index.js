import { Navbar, Container, Nav } from 'react-bootstrap';
import { StyledNavLink, StyledNavBrand, StyledNavbar, StyledNavToggle, Image } from "./styled";

const Header = () => (
    <StyledNavbar
      as={Navbar}
      collapseOnSelect
    >
      <Container>
        <StyledNavBrand
          as={Navbar.Brand}
          href="#"
        >
          <Image />{' '} Klaudia Kępka
        </StyledNavBrand>
        <StyledNavToggle
          as={Navbar.Toggle}
        />
        <Navbar.Collapse
          className="justify-content-end"
        >
          <Nav
            className="ml-auto"
          >
            <Nav.Link
              as={StyledNavLink}
              eventKey="1"
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={StyledNavLink}
              eventKey="2"
              to="/projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={StyledNavLink}
              eventKey="3"
              to="/about">
              About
            </Nav.Link>
            <Nav.Link
              as={StyledNavLink}
              eventKey="4"
              to="/gallery"
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={StyledNavLink}
              eventKey="5"
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );

export default Header;