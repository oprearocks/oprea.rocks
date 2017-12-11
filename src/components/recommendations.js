import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const itemPropTypes = {
  node: PropTypes.object.isRequired,
}

const Recommendation = ({node}) => (
  <article>
    <header>
      <Link to={`/recommendations/${node.permalink}`}>
        <h1>
          {node.title}
        </h1>
      </Link>
      <div>
        <img src={node.image.resolutions.src} />
      </div>
    </header>
    <section>
      <p>{node.description.childMarkdownRemark.excerpt}</p>
      <Link to={`/recommendations/${node.permalink}`}>Full review</Link>
      <a href={node.url}>I want this!</a>
    </section>
    <footer>Recommendation footer</footer>
  </article>
)

Recommendation.propTypes = itemPropTypes

const listPropTypes = {
  recommendations: PropTypes.array.isRequired,
}

const Recommendations = ({ recommendations }) => (
  <section>
    <h2>Recommendations</h2>
    {
      recommendations.map(({ node }) => (
        <Recommendation node={node} key={node.id} />
      ))
    }
  </section>
)

Recommendations.propTypes = listPropTypes

export default Recommendations
