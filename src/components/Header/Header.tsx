/** @jsxImportSource @emotion/react */

import Navbar, { NavbarProps } from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

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
      </Container>
    </Navbar>
  )
}
