// /** @jsxImportSource @emotion/react */

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UploadCvButton from '../UploadCvButton'
import { ICvFont } from '../../types/cv-font'
import { RowProps } from 'react-bootstrap'

type ActionBarProps = {
  onFontChange: (val: ICvFont) => void
} & RowProps

const fontOptions: ICvFont[] = ['Roboto', 'Inconsolata']

export default function ActionBar({
  onFontChange,
  ...rowProps
}: ActionBarProps): JSX.Element {
  return (
    <Row
      css={{
        marginBottom: '2rem',
        '@media print': {
          display: 'none',
        },
      }}
      {...rowProps}
    >
      <Col xs={3}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFont">
            <Form.Label>Font</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              onChange={(e) => onFontChange(e.target.value as ICvFont)}
            >
              {fontOptions.map((font: ICvFont) => (
                <option value={font}>{font}</option>
              ))}
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
        <UploadCvButton label="Upload new file" />
        <Button size="sm" onClick={() => window.print()}>
          Save as PDF
        </Button>
      </Col>
    </Row>
  )
}
