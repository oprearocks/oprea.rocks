import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './relatedarticles.scss'

const RelatedArticles = ({ articles }) => (
  <section className="sidebar-section">
    <h2 className="section-title separator-below">Read next</h2>
    <section className="section-content">
      <p>
        Here are a couple of related articles you will enjoy reading.
      </p>
      {/* <ul> */}
        {articles.map((article) => <p key={article.id || article.node.id}><Link className="custom-link" to={`/blog/${article.permalink || article.node.permalink}`}>{article.title || article.node.title}</Link></p>)}
      {/* </ul> */}
    </section>
  </section>
)

export default RelatedArticles
