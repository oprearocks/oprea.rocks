import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const itemPropTypes = {
  issue: PropTypes.object.isRequired,
}

const Issue = ({ issue }) => (
  <Link className="issue" to={`/reading/${issue.permalink}`}>
    {issue.title}
  </Link>
)

Issue.propTypes = itemPropTypes

export default Issue
