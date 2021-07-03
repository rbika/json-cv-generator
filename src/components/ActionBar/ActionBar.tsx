// /** @jsxImportSource @emotion/react */

import { RowProps } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UploadCvButton from '../UploadCvButton'
import { ICvFont } from '../../types/cv-font'
import { ICvTemplate } from '../../types/cv-template'

type ActionBarProps = {
  onFontChange: (val: ICvFont) => void
  onTemplateChange: (val: ICvTemplate) => void
} & RowProps

const fontOptions: ICvFont[] = ['Roboto', 'Inconsolata']
const templateOptions: ICvTemplate[] = ['Basic']

export default function ActionBar({
  onFontChange,
  onTemplateChange,
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
      <Col xs={6}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFont">
            <Form.Label>Font</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              onChange={(e) => onFontChange(e.target.value as ICvFont)}
            >
              {fontOptions.map((font: ICvFont) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTemplate">
            <Form.Label>Template</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              onChange={(e) => onTemplateChange(e.target.value as ICvTemplate)}
            >
              {templateOptions.map((template: ICvTemplate) => (
                <option key={template} value={template}>
                  {template}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Col>
      <Col
        xs={6}
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
