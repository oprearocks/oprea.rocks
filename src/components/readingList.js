import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Issue from './issue'

import './readingList.scss'

const listPropTypes = {
  issues: PropTypes.array.isRequired,
}

const ReadingList = ({ issues }) => (
  <section className="sidebar-section reading-list">
    <h2 className="section-title separator-below">Reading List</h2>

    <ol className="reading-list-content">
      {
        issues.map(({ node }) => (
          <li key={node.id}>
            <Issue issue={node} />
          </li>
        ))
      }
    </ol>
    <footer>
      <Link className="custom-link accent-color arrow-after" to="/reading">All issues</Link>
    </footer>
  </section>
)

ReadingList.propTypes = listPropTypes

export default ReadingList
