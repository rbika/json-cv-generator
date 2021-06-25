/** @jsxImportSource @emotion/react */

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      css={{ marginBottom: '1.5rem' }}
    >
      <Container>
        <Navbar.Brand href="/">
          CV <b>Generator</b>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
