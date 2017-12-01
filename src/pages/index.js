import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Post from '../components/post'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends Component {
  render() {
    const postEdges = this.props.data.posts.edges;
    return (
      <div>
        <p>Welcome to the blog of Adrian Oprea</p>
        {
          postEdges.map(({ node }) => (
            <Post node={node} key={node.id} />
          ))
        }
      </div>
    )
  }
}


IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
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
  }
`
