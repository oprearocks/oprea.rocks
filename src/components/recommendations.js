import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './recommendations.scss'

const itemPropTypes = {
  recommendation: PropTypes.object.isRequired,
}

const Recommendation = ({recommendation}) => (
  <article className="c-recommendation">
    <header>
        <h1>
          <Link to={`/recommendations/${recommendation.permalink}`}>
            {recommendation.title}
          </Link>
        </h1>
        <span className="c-recommendation__kind">Type: {recommendation.type}</span>
    </header>
    <section>
      <div>
        <img src={recommendation.image.resolutions.src} />
      </div>
      <p>{recommendation.description.childMarkdownRemark.excerpt}</p>
    </section>
    <footer>
      <Link to={`/recommendations/${recommendation.permalink}`}>Read review</Link>
      <a href={recommendation.url}>I want this!</a>
    </footer>
  </article>
)

Recommendation.propTypes = itemPropTypes

const listPropTypes = {
  recommendations: PropTypes.array.isRequired,
}

const Recommendations = ({ recommendations, className }) => (
  <section className={`c-recommendations ${className}`}>
    <h2 className="c-section__heading">Recommendations</h2>

    <section>
      {
        recommendations.map(({ node }) => (
          <Recommendation recommendation={node} key={node.id} />
        ))
      }
    </section>
    <footer>
      <Link to="/recommendations">View all</Link>
    </footer>
  </section>
)

Recommendations.propTypes = listPropTypes

export default Recommendations
