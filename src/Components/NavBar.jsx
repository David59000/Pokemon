import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Etats - States

  // Comportements - Les fonctions

  // Affichages - return
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>Accueil</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/Pokemons"}>Pokemons</Link>
              </Nav.Link>
              <NavDropdown title="Générations" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={"/generations"}> Génération 1</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/generations"}> Génération 2</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/generations"}>Génération 3</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to={"/generations"}> Génération 4</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
