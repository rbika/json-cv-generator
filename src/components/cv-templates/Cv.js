import React from 'react'
import { useCv } from '../../contexts/cv-context'
import BasicTemplate from './BasicTemplate'
import PropTypes from 'prop-types'

const propTypes = {
  font: PropTypes.string,
}

function Cv(props) {
  const { cv } = useCv()

  return cv ? <BasicTemplate cv={cv} {...props} /> : null
}

Cv.propTypes = propTypes

export default Cv
