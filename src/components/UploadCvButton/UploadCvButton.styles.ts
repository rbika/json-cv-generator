import styled from '@emotion/styled'
import Button from 'react-bootstrap/Button'

export const UploadButton = styled(Button)((props) => ({
  margin: '0 1rem 0 0',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  opacity: props.loading ? '0.65' : '1',
  pointerEvents: props.loading ? 'none' : 'all',
}))
