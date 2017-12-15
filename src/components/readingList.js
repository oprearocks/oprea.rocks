import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './readingList.scss'

const itemPropTypes = {
  issue: PropTypes.object.isRequired,
}

const Issue = ({ issue }) => (
  <li>
    <Link className="issue" to={`/reading/${issue.permalink}`}>
      {issue.title}
    </Link>
  </li>
)

Issue.propTypes = itemPropTypes

const listPropTypes = {
  issues: PropTypes.array.isRequired,
}

const ReadingList = ({ issues }) => (
  <section className="sidebar-section reading-list">
    <h2 className="section-title">Reading List</h2>

    <ol className="reading-list-content">
      {
        issues.map(({ node }) => (
          <Issue issue={node} key={node.id} />
        ))
      }
    </ol>
    <footer>
      <Link className="button full-width text-center" to="/reading">All issues</Link>
    </footer>
  </section>
)

ReadingList.propTypes = listPropTypes

export default ReadingList
