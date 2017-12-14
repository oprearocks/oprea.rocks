import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const itemPropTypes = {
  recommendation: PropTypes.object.isRequired,
}

const Recommendation = ({ recommendation }) => (
  <article>
    <header>
        <h3>
          <Link to={`/recommendations/${recommendation.permalink}`}>
            {recommendation.title}
          </Link>
        </h3>
        <span>Type: {recommendation.type}</span>
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

const Recommendations = ({ recommendations }) => (
  <section>
    <h2>Recommendations</h2>

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
