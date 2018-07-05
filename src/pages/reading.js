import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/sidebar'

import '../components/post.scss'

const issuePropTypes = {
  node: PropTypes.object.isRequired,
}

const Issue = ({ node }) => (
  <article className="article">
    <header>
      <div className="article-meta">
        <span>
          {node.publishedOn}
        </span>
      </div>
      <h1 className="article-title">
        <Link className="article-url accent-hover" to={`/reading/${node.permalink}`}>
          {node.title}
        </Link>
      </h1>
    </header>
    <section
      dangerouslySetInnerHTML={{
        __html: node.shortDescription.childMarkdownRemark.html
      }}
    />
    <footer>
      <Link className="article-readmore button" to={`/reading/${node.permalink}`}>Read</Link>
    </footer>
  </article>
)

Issue.propTypes = issuePropTypes

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ReadingListPage extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
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
            issueEdges.map(({ node }) => (
              <Issue node={node} key={node.id} />
            ))
          }
        </section>
        <Sidebar
          author={author}
          recommendations={recommendationEdges}
        />
      </section>
    )
  }
}


ReadingListPage.propTypes = propTypes

export default ReadingListPage

export const pageQuery = graphql`
  query ReadingListPageQuery {
    pageContents: contentfulPage(
      identifier: { eq: "reading-list" }
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

    issues: allContentfulIssue(
      sort: { fields: [ publishedOn ], order: DESC }
    ){
      edges {
        node {
          id
          title
          permalink
          publishedOn(formatString: "MMMM DD, YYYY")
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
  }
`
