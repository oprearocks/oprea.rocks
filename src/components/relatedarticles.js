import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './relatedarticles.scss'

const RelatedArticles = ({ articles }) => (
  <section className="sidebar-section related-articles">
    <h2 className="section-title separator-below">Related articles</h2>
    <section className="section-content">
      <p>
        Here are a couple of related articles you might enjoy reading.
      </p>
      {/* <ul> */}
        {articles.map(({ node }) => <p key={node.id}><Link className="custom-link" to={`/blog/${node.permalink}`}>{node.title}</Link></p>)}
      {/* </ul> */}
    </section>
  </section>
)

export default RelatedArticles
