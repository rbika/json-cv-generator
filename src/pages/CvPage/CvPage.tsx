/** @jsxImportSource @emotion/react */

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ActionBar from '../../components/ActionBar'
import Cv from '../../components/Cv/Cv'
import { RouteComponentProps } from '@reach/router'
import { ICvFont } from '../../types/cv-font'

export default function CvPage(_props: RouteComponentProps): JSX.Element {
  const [font, setFont] = React.useState<ICvFont>('Roboto')

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
