import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

function Menu() {
  const [visible, setVisible] = useState(false);
  function handleDropDownMenu() {
    setVisible(!visible);
  }
  return (
    <header className="w-full bg-white shadow-lg flex flex-row justify-between">
      <nav className="h-8 flex flex-col md:flex-row">
        <label className="cursor-pointer flex w-8 h-8 leading-8 items-center justify-center text-2xl md:hidden">
          <button onClick={handleDropDownMenu}>
            ☰
          </button>
        </label>
        <ul className={`bg-white px-4 ${visible ? '' : 'hidden'} flex-col md:flex md:flex-row md:gap-4`}>
          <li className="h-8 leading-8">
            <NavLink to={`/`} className="nav-link">
              <span className='flex flex-row gap-2 items-center'>
                <FaHome /> Inicial
              </span>
            </NavLink>
          </li>
          <li className="h-8 leading-8">Contato</li>
        </ul>
      </nav>
      <div>
        a
      </div>
    </header>


  );
}

export default Menu;



{/* <Navbar bg="light" expand="lg" className='border-b-2'>
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
    </Navbar> */}