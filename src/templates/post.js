import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Sidebar from '../components/sidebar'
import SocialButtons from '../components/sharebuttons'
import DisqusComments from '../components/disquscomments'

const Category = ({ title, permalink }) => (
  <Link to={`/categories/${permalink}`}>&nbsp;{title}</Link>
)

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const author = this.props.data.author
    const post = this.props.data.post
    const {
      id,
      title,
      keywords,
      content,
      postImage,
      postVideo,
      permalink,
      publishedOn,
      categories,
      description,
    } = post
    return (
      <section className="page cf">
        <section className="main-content">
          <article className="article">

            <Helmet
              title={`${title} | The blog of Adrian Oprea | Full Stack JavaScript Consultant`}
              meta={[
                { name: 'description', content: description || content.childMarkdownRemark.excerpt },
                { name: 'keywords', content: keywords },
              ]}
              />

            <header>
              <div className="article-meta">
                <span>
                  {publishedOn}
                  <span className="accent-color"> /</span>
                  {categories && categories.map(c => <Category title={c.title} permalink={c.permalink} key={c.id} />)}
                </span>
              </div>
              <h1 className="article-title">{title}</h1>
              {
                postImage &&
                <Img
                  className="article-image"
                  resolutions={postImage.resolutions}
                  title={postImage.title}
                  alt={postImage.title}
                />
              }
            </header>
            <section>
              {
                postVideo &&
                <blockquote>
                  <p>Watch the video here: <a href={postVideo}>{postVideo}</a></p>
                </blockquote>
              }
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: content.childMarkdownRemark.html,
                }}
                />
            </section>
            <footer>
            <SocialButtons
              url={`https://oprea.rocks/blog/${permalink}`}
              title={title}
              description={content.childMarkdownRemark.excerpt}
            />
            <DisqusComments title={title} id={`${id}-${permalink}`} url={`https://oprea.rocks/blog/${permalink}`}/>
            </footer>
          </article>
        </section>
        <Sidebar
          author={author}
          recommendations={recommendationEdges}
          issues={issueEdges}
        />
      </section>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($id: String!) {
    post: contentfulBlogPost(id: { eq: $id }) {
      id
      title
      keywords
      publishedOn(formatString: "MMMM DD, YYYY")
      permalink
      description
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 300)
        }
      }
      categories {
        id
        title
        permalink
      }
      postVideo
      postImage {
        title
        resolutions(width: 500) {
          base64
          src
          srcSet
          height
          width
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

    issues: allContentfulIssue(
      limit: 5
    ) {
      edges {
        node {
          id
          title
          permalink
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
