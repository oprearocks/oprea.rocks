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
          December 15 2017
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
