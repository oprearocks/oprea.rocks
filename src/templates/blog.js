import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Post from '../components/post'
import Sidebar from '../components/sidebar'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const PaginationLink = ({ test, url, text, className = '' }) => {
  if (!test) {
    return <Link className="button" to={url}>{text}</Link>
  }
  return <span className="button disabled" disabled>{text}</span>
}

class BlogPage extends Component {
  render() {
    const pathContext = this.props.pathContext;
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const author = this.props.data.author
    return (
      <section className="page cf">
        <section className="main-content">
            {
              pathContext.group.map(({ node }) => (
                <Post node={node} key={node.id} />
              ))
            }
          <div className="blog-pagination">
            <PaginationLink test={pathContext.first} url={`/blog/${pathContext.index - 1 == 1 ? '' : pathContext.index -1}`} text="&larr; Previous Page"/>
            <PaginationLink test={pathContext.last} url={`/blog/${pathContext.index + 1}`} text="Next Page &rarr;"/>
          </div>
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
