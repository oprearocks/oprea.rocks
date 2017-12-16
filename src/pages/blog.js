import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Post from '../components/post'
import Sidebar from '../components/sidebar'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.posts.edges;
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const author = this.props.data.author

    return (
      <section className="page cf">
        <section className="main-content">
            {
              postEdges.map(({ node }) => (
                <Post node={node} key={node.id} />
              ))
            }
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


BlogPage.propTypes = propTypes

export default BlogPage

export const pageQuery = graphql`
  query BlogPageQuery {
    posts: allContentfulBlogPost(
      sort: { fields: [ publishedOn ], order: DESC }
    ) {
      edges {
        node {
          id
          title
          publishedOn
          categories {
            id
            title
            permalink
          }
          updatedOn
          permalink
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 300)
              timeToRead
            }
          }
          postVideo
          postImage {
            resolutions(width: 500) {
              ...GatsbyContentfulResolutions
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
