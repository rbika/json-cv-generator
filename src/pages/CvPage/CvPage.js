/** @jsxImportSource @emotion/react */

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ActionBar from '../../components/ActionBar'
import Cv from '../../components/cv-templates/Cv'

export default function CvPage() {
  const [font, setFont] = React.useState('Roboto')

  return (
    <Container>
      <Row>
        <Col>
          <ActionBar onFontChange={(value) => setFont(value)} />
          <Cv font={font} />
        </Col>
      </Row>
    </Container>
  )
}
