import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import Img from 'gatsby-image'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const {
      title,
      keywords,
      content,
      postImage,
      postVideo
    } = post
    return (
      <section>
        <article>

          <Helmet
            title={`${title} | The blog of Adrian Oprea | Full Stack JavaScript Consultant`}
            meta={[
              { name: 'description', content: content.childMarkdownRemark.excerpt },
              { name: 'keywords', content: keywords },
            ]}
            />

          <header>
            <h1>{title}</h1>
            {
              postVideo ?
              <iframe width="100%" height="400" src={postVideo} frameBorder="0" allowFullScreen></iframe>
              : postImage ? <img src={postImage.resolutions.src} /> : null
            }
          </header>
          <section>
            <div
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
              />
          </section>
          <footer>Article footer</footer>
        </article>
      </section>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      keywords
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 300)
        }
      }
      categories {
        title
        permalink
      }
      postImage {
        resolutions(width: 500) {
          ...GatsbyContentfulResolutions
        }
      }
    }
  }
`