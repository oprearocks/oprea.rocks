import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Post from '../components/post'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.posts.edges;
    return (
      <section className="c-main">
        <div>
          <p>Welcome to the blog of Adrian Oprea</p>
          {
            postEdges.map(({ node }) => (
              <Post node={node} key={node.id} />
            ))
          }
        </div>
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
  }
`
