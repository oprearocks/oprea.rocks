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
      <section>
          {
            postEdges.map(({ node }) => (
              <Post node={node} key={node.id} />
            ))
          }
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
  }
`
