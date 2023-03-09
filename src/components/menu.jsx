import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Menu() {
  return (
    <Navbar bg="light" expand="lg" className='border-b-2'>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Logo IFPE"
            src="img/favicon-32x32.png"
            className="d-inline-block align-top"
          />{' '}
          Jogos IFPE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/`} className="nav-link">
              <span className='flex flex-row gap-2 items-center'>
                <FaHome /> Inicial
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;