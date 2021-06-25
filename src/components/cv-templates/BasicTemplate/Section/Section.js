/** @jsxImportSource @emotion/react */

import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

function Section({ title, children }) {
  return (
    <div css={{ marginBottom: '1.5rem' }}>
      {title && (
        <h2
          css={{
            borderBottom: '1px solid #bdbdbd',
            fontSize: '1.25rem',
            fontWeight: '400',
            paddingBottom: '0.25rem',
          }}
        >
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  )
}
Section.propTypes = propTypes

export default Section
