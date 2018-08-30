import React from 'react'
import PropTypes from 'prop-types'

const Redirect = props => {
  window.location.href = window.location.pathname
}

Redirect.propTypes = {}

export default Redirect
