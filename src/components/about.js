import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './about.scss'

const propTypes = {
  author: PropTypes.object.isRequired,
}

const About = ({ author }) => (
  <section className="sidebar-section about">
    <h2 className="section-title">About {author.name}</h2>
    <article className="section-content">
      <section
        className="author-description"
        dangerouslySetInnerHTML={{
          __html: author.about.childMarkdownRemark.html
        }}
      />
      <footer>
        <Link className="button">Read more</Link>
      </footer>
    </article>
  </section>
)

About.propTypes = propTypes

export default About
