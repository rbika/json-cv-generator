/** @jsxImportSource @emotion/react */

import Button from 'react-bootstrap/Button'

import { useCv } from '../../contexts/CvContext'

type UploadCvButtonProps = {
  label: string
  onUpload?: () => void
}

function UploadCvButton({ label, onUpload }: UploadCvButtonProps): JSX.Element {
  const { setCv } = useCv()

  function handleCvLoad(event: any) {
    const file = event.target.files[0]
    const fileReader = new FileReader()

    fileReader.onload = () => {
      try {
        setCv(JSON.parse(fileReader.result as string))

        if (onUpload) {
          onUpload()
        }
      } catch (e) {
        console.log('Please, choose a valid JSON file.', e)
      }
    }

    fileReader.onerror = (e) => {
      console.log('Error while reading the file. Please try again.', e)
      fileReader.abort()
    }

    fileReader.readAsText(file)
  }

  return (
    <Button
      as="label"
      htmlFor="cv-file-input"
      size="sm"
      css={{ margin: '0 1rem 0 0' }}
    >
      {label}
      <input
        type="file"
        id="cv-file-input"
        onChange={handleCvLoad}
        css={{ display: 'none' }}
      />
    </Button>
  )
}

export default UploadCvButton
