import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const propTypes = {
  author: PropTypes.object.isRequired,
}

const About = ({ author }) => (
  <section>
    <h2>About</h2>
    <article>
      <header>
        <h2>
          {author.name}
        </h2>
      </header>
      <section
        dangerouslySetInnerHTML={{
          __html: author.about.childMarkdownRemark.html
        }}
      />
      <footer>Article footer</footer>
    </article>
  </section>
)

About.propTypes = propTypes

export default About
