import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import { useAlert } from '../../contexts/AlertContext'

export default function CustomAlert() {
  const { alert, setAlert } = useAlert()

  return alert?.text ? (
    <Container>
      <Alert dismissible variant={alert.variant} onClose={() => setAlert(null)}>
        {alert.text}
      </Alert>
    </Container>
  ) : null
}
