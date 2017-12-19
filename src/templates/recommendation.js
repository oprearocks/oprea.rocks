import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ReviewTemplate extends Component {
  render() {
    const recommendation = this.props.data.contentfulRecommendation
    const {
      title,
      type,
      keywords,
      description,
      image,
      url
    } = recommendation
    return (
      <article>

        <Helmet
          title={`${title} | The blog of Adrian Oprea | Full Stack JavaScript Consultant`}
          meta={[
            { name: 'description', content: description.childMarkdownRemark.excerpt },
            { name: 'keywords', content: keywords },
          ]}
        />

        <header>
          <h1>{title}</h1>
          <Img
            resolutions={image.resolutions}
            title={`Image of ${title} ${type}`}
            alt={`${title} ${type}`}
          />
        </header>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
        </section>
        <footer>Review footer</footer>
      </article>
    )
  }
}

ReviewTemplate.propTypes = propTypes

export default ReviewTemplate

export const pageQuery = graphql`
  query recommendationQuery($id: String!) {
    contentfulRecommendation(id: { eq: $id }) {
      title
      keywords
      description {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 300)
        }
      }
      url
      image {
        resolutions(width: 500) {
          ...GatsbyContentfulResolutions
        }
      }
    }
  }
`
