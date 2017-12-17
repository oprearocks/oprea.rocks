import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Recommendation from '../components/recommendation'
import Sidebar from '../components/sidebar'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class RecommendationsPage extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges;
    const issueEdges = this.props.data.issues.edges
    const author = this.props.data.author

    return (
      <section className="page cf">
        <Helmet
          title="Recommended books, courses, audiobooks and tutorials | The blog of Adrian Oprea | Full Stack JavaScript Consultant"
          meta={[
            { name: 'description', content: "Get a list of resources personally reviewed by me. Audiobooks from my Audible account, books I read as well as various online courses I watched in order to develop myself as a softwrae development consultant." },
            { name: 'keywords', content: "book recommendations, online course reviews, audiobook reviews, recommended study material, software development book reviews, software development course recommendations" },
          ]}
        />
        <section className="main-content">
          {
            recommendationEdges.map(({ node }) => (
              <Recommendation recommendation={node} key={node.id} />
            ))
          }
        </section>
        <Sidebar
          author={author}
          issues={issueEdges}
        />
      </section>
    )
  }
}


RecommendationsPage.propTypes = propTypes

export default RecommendationsPage

export const pageQuery = graphql`
  query ReccomendationsPageQuery {
    recommendations: allContentfulRecommendation(
      limit: 5
    ) {
      edges {
        node {
          id
          title
          type
          url
          permalink
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 300)
              timeToRead
            }
          }

          image {
            resolutions(width: 500) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
    author: contentfulAuthor {
      name
      about {
        childMarkdownRemark {
          html
        }
      }
    }

    issues: allContentfulIssue(
      limit: 5
    ) {
      edges {
        node {
          id
          title
          permalink
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
