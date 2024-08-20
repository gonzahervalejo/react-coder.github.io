import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Cartwidget from "../CartWidget/Cartwidget";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container className="container">
          <Link to="/" className="navbar-brand">
            <h3>Tienda Ziba</h3>
          </Link>
          <Nav className="me-auto">
            <ul className="navbar-nav">
              <li className="menu">
                <Link to="/category/Medias" className="nav-link">
                  Medias
                </Link>
              </li>
              <li className="menu">
                <Link to="/category/Soquetes" className="nav-link">
                  Soquetes
                </Link>
              </li>
            </ul>
          </Nav>
          <Cartwidget className="cartwidget" />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
