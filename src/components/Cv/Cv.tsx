/** @jsxImportSource @emotion/react */

import { useCv } from '../../contexts/CvContext'
import BasicTemplate from './BasicTemplate'
import { ICvFont } from '../../types/cv-font'
import { ICvTemplate } from '../../types/cv-template'

type CvProps = {
  font: ICvFont
  template: ICvTemplate
}

function Cv({ font, template }: CvProps) {
  const { cv } = useCv()

  return cv ? (
    <div css={{ fontFamily: font }}>
      {template === 'Basic' && <BasicTemplate cv={cv} />}
    </div>
  ) : (
    null
  )
}

export default Cv
