/** @jsxImportSource @emotion/react */

import Navbar, { NavbarProps } from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FaGithub } from 'react-icons/fa'

export default function Header(navProps: NavbarProps): JSX.Element {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      css={{ marginBottom: '1.5rem' }}
      {...navProps}
    >
      <Container>
        <Navbar.Brand href="/">
          CV <b>Generator</b>
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            href="https://github.com/rbika/json-cv-generator"
            css={{ display: 'flex', alignItems: 'center' }}
          >
            View on Github <FaGithub css={{ marginLeft: '0.5rem' }} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
