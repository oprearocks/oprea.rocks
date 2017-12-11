import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Post from '../components/post'
import Recommendations from '../components/recommendations'
import About from '../components/about'

import './index.scss'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends Component {
  render() {
    const postEdges = this.props.data.posts.edges;
    const recommendationEdges = this.props.data.recommendations.edges;
    const author = this.props.data.author;

    return (
      <main className="c-home">
        <section className="c-latestArticles">
          <h2 className="c-section__heading">Latest articles</h2>
          {
            postEdges.map(({ node }) => (
              <Post node={node} key={node.id} />
            ))
          }
        </section>
        <aside className="c-sidebar">
          <About className="c-sidebar__section" author={author}/>

          <Recommendations className="c-sidebar__section" recommendations={recommendationEdges} />
        </aside>
      </main>
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
  }
`
