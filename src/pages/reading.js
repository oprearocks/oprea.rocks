import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Post from '../components/post'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ReadingListPage extends Component {
  render() {
    const issueEdges = this.props.data.issues.edges;
    return (
      <section>
          {
            issueEdges.map(({ node }) => (
              <Post node={node} key={node.id} />
            ))
          }
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
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 300)
              timeToRead
            }
          }
        }
      }
    }
  }
`
