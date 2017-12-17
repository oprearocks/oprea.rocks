import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/sidebar'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class HireMePage extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const author = this.props.data.author
    return (
      <section className="page cf">
        <Helmet
          title="Reading List - New links added every week | The blog of Adrian Oprea | Full Stack JavaScript Consultant"
          meta={[
            { name: 'description', content: 'Find out what I read each week. This is an archive of my weekly reading lists.' },
            { name: 'keywords', content: 'reading list, newsletter, technical articles, curated reading list, interesting articles, javascript, docker, agile, devops, docker, node.js, golang' },
          ]}
        />
        <section className="main-content">
          Hire Me
        </section>
        <Sidebar
          author={author}
          recommendations={recommendationEdges}
          issues={issueEdges}
        />
      </section>
    )
  }
}


HireMePage.propTypes = propTypes

export default HireMePage

export const pageQuery = graphql`
  query HireMePageQuery {
    issues: allContentfulIssue {
      edges {
        node {
          id
          title
          permalink
          shortDescription {
            childMarkdownRemark {
              html
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    recommendations: allContentfulRecommendation(
      limit: 5
    ) {
      edges {
        node {
          id
          title
          permalink
          type
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 300)
              timeToRead
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
    }

    author: contentfulAuthor {
      name
      about {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
