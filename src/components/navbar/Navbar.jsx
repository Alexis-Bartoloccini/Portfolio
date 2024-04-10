import { useState } from 'react';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
  const [activeItem,setActiveItem] = useState(null)

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <>
      {/* Navbar para dispositivos móviles  CONTINUAR ARREGLANDO ESTO PARA CELULARES */}
      <Navbar expand="lg" bg="black" className="blockNavbar navbarStyle d-lg-none" style={{width: 'auto'}}>
        <Container >
            <NavDropdown title="MENÚ DE PORTFOLIO" id="basic-nav-dropdown" className='offcanvasStyle' >
            <Nav className="flex-column justify-content-around h-100 offcanvasStyle" >
                  <Nav.Link href="#home" onClick={()=> handleItemClick("link-home")}  className={`nav-item ${activeItem === 'link-home' ? 'active' : ''}`}>Inicio </Nav.Link>

                  <Nav.Link href="#about" onClick={()=> handleItemClick("link-about")} className={`nav-item ${activeItem === 'link-about' ? 'active' : ''}`}>Acerca de mi </Nav.Link>

                  <Nav.Link href="#portfolio" onClick={()=> handleItemClick("link-portfolio")}  className={`nav-item ${activeItem === 'link-portfolio' ? 'active' : ''}`}>Portfolio</Nav.Link>

                  <Nav.Link href="#skills" onClick={()=> handleItemClick("link-skills")}  className={`nav-item ${activeItem === 'link-skills' ? 'active' : ''}`}>Habilidades</Nav.Link>

                  <Nav.Link href="#contact" onClick={()=> handleItemClick("link-contact")}  className={`nav-item ${activeItem === 'link-contact' ? 'active' : ''}`}>Contacto</Nav.Link>
                  </Nav>
            </NavDropdown>
        </Container>
      </Navbar>

      {/* Navbar para dispositivos de escritorio */}
      <Navbar expand="lg" className=" navbarStyle d-none d-lg-block">
        <Container>
      <ul className="navbarList">
        <Nav.Link href="#home" onClick={()=> handleItemClick("link-home")}  className={`nav-item ${activeItem === 'link-home' ? 'active' : ''}`}>Inicio </Nav.Link>

        <Nav.Link href="#about" onClick={()=> handleItemClick("link-about")} className={`nav-item ${activeItem === 'link-about' ? 'active' : ''}`}>Acerca de mi </Nav.Link>

        <Nav.Link href="#portfolio" onClick={()=> handleItemClick("link-portfolio")}  className={`nav-item ${activeItem === 'link-portfolio' ? 'active' : ''}`}>Portfolio</Nav.Link>

        <Nav.Link href="#skills" onClick={()=> handleItemClick("link-skills")}  className={`nav-item ${activeItem === 'link-skills' ? 'active' : ''}`}>Habilidades</Nav.Link>

        <Nav.Link href="#contact" onClick={()=> handleItemClick("link-contact")}  className={`nav-item ${activeItem === 'link-contact' ? 'active' : ''}`}>Contacto</Nav.Link>
        
      </ul>
        </Container>
      </Navbar>
      
    </>
  );
}

