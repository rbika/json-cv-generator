/** @jsxImportSource @emotion/react */

import Header from '../../components/Header'
import Instructions from '../../components/Instructions'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row css={{ paddingTop: '3rem' }}>
          <Col xs={6}>
            <Instructions />
          </Col>
        </Row>
      </Container>
    </>
  )
}
