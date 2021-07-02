import styled from '@emotion/styled'
import Button from 'react-bootstrap/Button'

type UploadButtonProps = {
  busy?: boolean
}
export const UploadButton = styled(Button)<UploadButtonProps>(({ busy }) => ({
  margin: '0 1rem 0 0',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  opacity: busy ? '0.65' : '1',
  pointerEvents: busy ? 'none' : 'all',
}))
