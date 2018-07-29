import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Post from '../components/post'
import Sidebar from '../components/sidebar'
import PaginationLink from '../components/paginationLink'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPage extends Component {
  render() {
    const pathContext = this.props.pathContext;
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const categoryEdges = this.props.data.categories.edges
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
              pathContext.group.map(({ node }) => (
                <Post node={node} key={node.id} />
              ))
            }
          <div className="blog-pagination">
            <PaginationLink
              test={pathContext.first}
              url={`/blog/${pathContext.index - 1 == 1 ? '' : pathContext.index -1}`}
              text="&larr; Previous Page"/>
            <PaginationLink
              test={pathContext.last}
              url={`/blog/${pathContext.index + 1}`}
              text="Next Page &rarr;"/>
          </div>
        </section>
        <Sidebar
          // author={author}
          recommendations={recommendationEdges}
          // issues={issueEdges}
          categories={categoryEdges}
        />
      </section>
    )
  }
}


BlogPage.propTypes = propTypes

export default BlogPage

export const pageQuery = graphql`
  query BlogPageQuery {
    pageContents: contentfulPage(
      identifier: { eq: "blog" }
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
    categories: allContentfulCategory {
      edges {
        node {
          id
          title
          permalink
        }
      }
    }
    recommendations: allContentfulResource(
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
