/** @jsxImportSource @emotion/react */

import * as React from 'react'

import Spinner from 'react-bootstrap/Spinner'
import { useAlert } from '../../contexts/AlertContext'

import { useCv } from '../../contexts/CvContext'
import { sleep } from '../../utils'
import * as S from './UploadCvButton.styles'

type UploadCvButtonProps = {
  label: string
  onUpload?: () => void
}

function UploadCvButton({ label, onUpload }: UploadCvButtonProps): JSX.Element {
  const { setCv } = useCv()
  const { setAlert } = useAlert()
  const [loading, setLoading] = React.useState(false)

  function handleError(message: string, error: unknown) {
    setAlert({
      variant: 'danger',
      text: message,
    })
    console.error(message, error)
  }

  function handleCvLoad(event: any) {
    const file = event.target.files[0]
    const fileReader = new FileReader()
    setAlert(null)

    fileReader.onload = async function () {
      try {
        setLoading(true)
        await sleep(500)

        setCv(JSON.parse(fileReader.result as string))

        if (onUpload) {
          await sleep(500)
          setLoading(false)

          onUpload()
        }
      } catch (e) {
        event.target.value = null
        setLoading(false)
        handleError('Invalid JSON file. Please, try again', e)
      }
    }

    fileReader.onerror = (e) => {
      event.target.value = null
      fileReader.abort()
      handleError('Error while reading the file. Please try again.', e)
    }

    fileReader.readAsText(file)
  }

  return (
    <S.UploadButton
      as="label"
      htmlFor="cv-file-input"
      size="sm"
      loading={loading}
    >
      {loading && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          css={{ marginRight: '0.5rem' }}
        />
      )}
      {label}
      <input
        type="file"
        id="cv-file-input"
        onChange={handleCvLoad}
        css={{ display: 'none' }}
      />
    </S.UploadButton>
  )
}

export default UploadCvButton
