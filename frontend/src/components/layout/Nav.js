import React from "react";
import '../../styles/components/layout/Nav.css'


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-primary">
      <Container fluid>
        <Navbar.Brand href="/">JACK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/recetas">Recetas</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/novedades">Novedades</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            

            <NavDropdown title="Mas..." id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.instagram.com/p/CpWBi1rPlnV/?hl=es">Nuestras Recetas</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Mas información.
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                -Capitan JACK-
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default NavScrollExample;


