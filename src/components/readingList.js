import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

// import './readingList.scss'

const itemPropTypes = {
  issue: PropTypes.object.isRequired,
}

const Issue = ({ issue }) => (
  <article className="issue">
    <Link to={`/reading-list/${issue.permalink}`}>
      {issue.title}
    </Link>
  </article>
)

Issue.propTypes = itemPropTypes

const listPropTypes = {
  issues: PropTypes.array.isRequired,
}

const ReadingList = ({ issues }) => (
  <section className="reading-list">
    <h2 className="section-title">Reading List</h2>

    <section>
      {
        issues.map(({ node }) => (
          <Issue issue={node} key={node.id} />
        ))
      }
    </section>
    <footer>
      <Link className="button full-width"to="/reading-list">View all issues</Link>
    </footer>
  </section>
)

ReadingList.propTypes = listPropTypes

export default ReadingList
