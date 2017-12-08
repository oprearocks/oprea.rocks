import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Recommendation from '../components/recommendation'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class RecommendationsPage extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges;
    return (
      <div>
        <p>Welcome to the blog of Adrian Oprea</p>
        {
          recommendationEdges.map(({ node }) => (
            <Recommendation node={node} key={node.id} />
          ))
        }
      </div>
    )
  }
}


RecommendationsPage.propTypes = propTypes

export default RecommendationsPage

export const pageQuery = graphql`
  query ReccomendationsPageQuery {
    recommendations: allContentfulRecommendation(
      limit: 5
    ) {
      edges {
        node {
          id
          title
          url
          permalink
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 300)
              timeToRead
            }
          }

          image {
            resolutions(width: 500) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`
