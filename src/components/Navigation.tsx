import React from 'react';
import {Nav, Navbar, Container} from './bootstrap';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/contoso.jpg';

const Logo = styled.img`
  width: 20px;
  height: auto;
`;

function Navigation() {
  let location = useLocation();

  function render() {
    let pathName = location.pathname;

    return (
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand>
            <Logo src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link as={Link} href="/" to="/" active={pathName === '/'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/about" to="/about" active={pathName === '/about'}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  return render();
}

export default Navigation;
