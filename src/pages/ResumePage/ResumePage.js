/** @jsxImportSource @emotion/react */

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BasicTemplate from '../../components/cv-templates/BasicTemplate'
import ActionBar from '../../components/ActionBar'

export default function ResumePage() {
  const [font, setFont] = React.useState('Roboto')

  return (
    <Container>
      <Row>
        <Col>
          <ActionBar onFontChange={(value) => setFont(value)} />
          <BasicTemplate font={font} />
        </Col>
      </Row>
    </Container>
  )
}
