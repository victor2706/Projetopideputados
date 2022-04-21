import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

<Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Nav className="me-auto">
          <NavDropdown title="Deputados" className="show" id="basic-nav-dropdown">
          <Link className="dropdown-item" to="/deputados">Deputados</Link>
            </NavDropdown>
            <NavDropdown title="Partidos" className="show" id="basic-nav-dropdown">
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

        <br />


    </div>
  )
}

export default Menu