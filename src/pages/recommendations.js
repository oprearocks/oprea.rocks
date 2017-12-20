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
    const pageContents = this.props.data.pageContents

    return (
      <section className="page cf">
        <Helmet
          title={pageContents.title}
          meta={[
            { name: 'description', content: pageContents.description },
            { name: 'keywords', content: pageContents.keywords },
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
    pageContents: contentfulPage(
      identifier: { eq: "recommendations" }
    ) {
      title
      description
      keywords
      content {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        about {
          childMarkdownRemark {
            html
          }
        }
        twitter
        medium
        github
        youtube
      }
    }
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
            resolutions(width: 100) {
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
      limit: 4
      sort: { fields: [ publishedOn ], order: DESC }
    ) {
      edges {
        node {
          id
          title
          permalink
          publishedOn(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
