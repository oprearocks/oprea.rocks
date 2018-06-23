import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './relatedarticles.scss'

const RelatedArticles = ({ articles }) => (
  <section className="sidebar-section related-articles">
    <h2 data-drip-attribute="headline" className="section-title separator-below">Related articles</h2>
    <section className="section-content">
      <p data-drip-attribute="description">
        Here are a couple of related articles you might enjoy reading.
      </p>
      {/* <ul> */}
        {articles.map(({ node }) => <p key={node.id}><a className="custom-link" href={node.permalink}>{node.title}</a></p>)}
      {/* </ul> */}
    </section>
  </section>
)

export default RelatedArticles
