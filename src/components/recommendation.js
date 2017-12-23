import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const itemPropTypes = {
  recommendation: PropTypes.object.isRequired,
}

const Recommendation = ({ recommendation }) => (
  <article className="recommendation" itemprop="blogPost" itemscope itemtype="https://schema.org/Review">
    <header>
        <div className="recommendation-details cf">
          <Img
            className="article-image" resolutions={recommendation.image.resolutions}
            title={`Image of ${recommendation.title} ${recommendation.type}`}
            alt={`${recommendation.title} ${recommendation.type}`}
          />
          <div className="article-meta">
          <span>
            December 15 2017
            <span className="accent-color"> / </span>
            <span>Type: {recommendation.type}</span>
          </span>
        </div>
          <h3 className="article-title" itemprop="reviewBody">
            <Link to={`/recommendations/${recommendation.permalink}`}>
              {recommendation.title}
            </Link>
          </h3>
        </div>
    </header>
    <footer className="article-footer">
      <Link className="recommendation-link" to={`/recommendations/${recommendation.permalink}`}>Read full review</Link>
      <span className="accent-color text-bold"> / </span>
      <a className="recommendation-link" href={recommendation.url} target="_blank">Get it</a>
    </footer>
  </article>
)

Recommendation.propTypes = itemPropTypes

export default Recommendation
