import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="#home">
          CV <b>Generator</b>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
