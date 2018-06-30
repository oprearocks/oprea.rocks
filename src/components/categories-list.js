import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const CategoriesList = ({ categories }) => (
  <section className="sidebar-section">
    <h2 className="section-title separator-below">Categories</h2>
    <section className="section-content">
      <p>
        Looking for a specific topic? This list is the fastest way to get to all the articles covering a specific subject.
      </p>
      <article>
        <ul>
          {
            categories && categories.map(({ node }) => (
              <li key={node.id}>
                <Link className="custom-link accent-color arrow-after" to={`/blog/${node.permalink}`}>{node.title}</Link>
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  </section>
)

export default CategoriesList
