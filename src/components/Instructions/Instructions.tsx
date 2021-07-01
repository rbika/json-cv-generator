/** @jsxImportSource @emotion/react */

import React from 'react'
import { navigate } from '@reach/router'

import UploadCvButton from '../UploadCvButton'
import json from '../../assets/starter.json'

export default function Instructions(
  props: React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const jsonHref = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(json)
  )}`

  return (
    <div {...props}>
      <ol css={{ paddingLeft: '1rem' }}>
        <li>
          <a href={jsonHref} download="starter.json">
            Click here
          </a>{' '}
          to download the starter JSON file.
        </li>
        <li>Update the file with your personal data.</li>
        <li>Click on the button below to upload.</li>
      </ol>

      <UploadCvButton label="Upload file" onUpload={() => navigate('/cv')} />
    </div>
  )
}
