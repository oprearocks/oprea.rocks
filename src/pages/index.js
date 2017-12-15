import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Post from '../components/post'
import Recommendations from '../components/recommendations'
import About from '../components/about'
import ReadingList from '../components/readingList'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends Component {
  render() {
    const postEdges = this.props.data.posts.edges
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const author = this.props.data.author

    return (
      <section>
        <section>
          <header>
            <h2>Latest articles</h2>
          </header>
          {
            postEdges.map(({ node }) => (
              <Post node={node} key={node.id} />
            ))
          }
          <footer>
            <p>Want to read more ?</p>
            <Link className="button full-width text-center" to="/blog">Go to the blog</Link>
          </footer>
        </section>
        <aside className="sidebar">
          <About author={author}/>
          <Recommendations recommendations={recommendationEdges} />
          <ReadingList issues={issueEdges} />
        </aside>
      </section>
    )
  }
}


IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    posts: allContentfulBlogPost(
      limit: 5
      sort: { fields: [ publishedOn ], order: DESC }
    ) {
      edges {
        node {
          id
          title
          publishedOn
          updatedOn
          permalink
          categories {
            title
            permalink
          }
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
