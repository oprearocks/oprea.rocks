import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const propTypes = {
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
    <main>
      <p>{node.description.childMarkdownRemark.excerpt}</p>
      <Link to={`/recommendations/${node.permalink}`}>Full review</Link>
      <a href={node.url}>I want this!</a>
    </main>
    <footer>Recommendation footer</footer>
  </article>
)

Recommendation.propTypes = propTypes

export default Recommendation
