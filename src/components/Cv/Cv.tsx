import { useCv } from '../../contexts/CvContext'
import BasicTemplate from './BasicTemplate'
import { ICvFont } from '../../types/cv-font'

type CvProps = {
  font: ICvFont
}

function Cv(props: CvProps): JSX.Element {
  const { cv } = useCv()

  return cv ? <BasicTemplate cv={cv} {...props} /> : <></>
}

export default Cv
