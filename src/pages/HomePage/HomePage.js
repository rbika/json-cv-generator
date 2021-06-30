/** @jsxImportSource @emotion/react */

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Instructions from '../../components/Instructions/Instructions'

export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <div>
            <h2 css={{ fontWeight: 300 }}>Professional CVs from JSON</h2>
            <Instructions />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
