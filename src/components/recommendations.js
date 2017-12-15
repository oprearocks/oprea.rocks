import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './recommendations.scss'

const itemPropTypes = {
  recommendation: PropTypes.object.isRequired,
}

const Recommendation = ({ recommendation }) => (
  <article className="recommendation">
    <header>
        <div className="recommendation-details cf">
          <img className="article-image" src={recommendation.image.resolutions.src} />
          <div className="article-meta">
          <span>
            December 15 2017
            <span className="accent-color"> / </span>
            <span>Type: {recommendation.type}</span>
          </span>
        </div>
          <h3 className="article-title">
            <Link to={`/recommendations/${recommendation.permalink}`}>
              {recommendation.title}
            </Link>
          </h3>
        </div>
    </header>
    <footer className="article-footer">
      <Link className="recommendation-link" to={`/recommendations/${recommendation.permalink}`}>Read full review</Link>
      <span className="accent-color"> / </span>
      <a className="recommendation-link" href={recommendation.url}>Get it</a>
    </footer>
  </article>
)

Recommendation.propTypes = itemPropTypes

const listPropTypes = {
  recommendations: PropTypes.array.isRequired,
}

const Recommendations = ({ recommendations }) => (
  <section className="sidebar-section recommendations">
    <h2 className="section-title">Recommendations</h2>

    <section>
      {
        recommendations.map(({ node }) => (
          <Recommendation recommendation={node} key={node.id} />
        ))
      }
    </section>
    <footer>
      <Link className="button full-width text-center" to="/recommendations">All recommendations</Link>
    </footer>
  </section>
)

Recommendations.propTypes = listPropTypes

export default Recommendations
