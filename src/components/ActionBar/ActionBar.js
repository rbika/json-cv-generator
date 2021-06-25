/** @jsxImportSource @emotion/react */

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ActionBar({ onFontChange }) {
  return (
    <Row
      css={{
        marginBottom: '2rem',
        '@media print': {
          display: 'none',
        },
      }}
    >
      <Col xs={3}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFont">
            <Form.Label>Font</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              onChange={(e) => onFontChange(e.target.value)}
            >
              <option value="Roboto">Roboto</option>
              <option value="Inconsolata">Inconsolata</option>
            </Form.Control>
          </Form.Group>
          {/* <Form.Group as={Col} controlId="formGridTemplate">
              <Form.Label>Template</Form.Label>
              <Form.Control as="select" size="sm">
                <option>Basic</option>
              </Form.Control>
            </Form.Group> */}
        </Form.Row>
      </Col>
      <Col
        xs={9}
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginBottom: '1rem',
        }}
      >
        {/* <Button size="sm" css={{ marginRight: '1rem' }}>
          Upload new file
        </Button>*/}
        <Button size="sm" onClick={() => window.print()}>
          Save as PDF
        </Button>
      </Col>
    </Row>
  )
}
