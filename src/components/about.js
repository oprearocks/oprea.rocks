import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const propTypes = {
  author: PropTypes.object.isRequired,
}

const About = ({ author }) => (
  <article>
    <header>
      <h2>
        About {author.name}
      </h2>
    </header>
    <section
      dangerouslySetInnerHTML={{
        __html: author.about.childMarkdownRemark.html
      }}
    />
    <footer>Article footer</footer>
  </article>
)

About.propTypes = propTypes

export default About
