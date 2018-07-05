import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import PostMeta from '../components/postMeta'
import Sidebar from '../components/sidebar'
import SocialButtons from '../components/sharebuttons'
import DisqusComments from '../components/disquscomments'
import Newsletter from '../components/newsletter'
import { Player } from '../components/podcast'
import RelatedArticles from '../components/relatedarticles'

const Category = ({ title, permalink }) => (
  <span><Link className="accent-color" to={`/blog/${permalink}`}>{title}</Link>&nbsp;&nbsp;</span>
)

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const categoryEdges = this.props.data.categories.edges
    const author = this.props.data.author
    const post = this.props.data.post
    const {
      id,
      title,
      keywords,
      content,
      postImage,
      postVideo,
      podcast,
      permalink,
      publishedOn,
      categories,
      description,
    } = post
    const { relatedArticles } = this.props.pathContext

    return (
      <section className="page cf">
        <PostMeta post={post}/>
        <section className="main-content">
          <article className="article" itemProp="blogPost" itemScope itemType="https://schema.org/BlogPosting">
            <meta itemProp="dateCreated" content={post.publishedOn} />
            <meta itemProp="datePublished" content={post.publishedOn} />
            <meta itemProp="dateModified" content={post.updatedOn} />
            <meta itemProp="keywords" content={post.keywords} />
            <meta itemProp="author" itemType="https://schema.org/Person" content={post.author.name} />
            <meta itemProp="publisher" itemType="https://schema.org/Person" content={post.author.name} />
            {post.postImage && <meta itemProp="image" content={`https:${post.postImage.resolutions.src}`} /> }
            <meta itemProp="inLanguage" content="en_US" />
            <header>
              <div className="article-meta">
                <span>
                  <i>by</i>&nbsp;{author.name}
                  <b className="accent-color">&nbsp;in&nbsp;</b>
                  {categories && categories.map(c => <Category title={c.title} permalink={c.permalink} key={c.id} />)}
                </span>
              </div>
              <h1 className="article-title" itemProp="headline">{title}</h1>
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
            <section itemProp="articleBody">
              {
                // <blockquote>
                //   <p>Watch the video here: <a href={postVideo}>{postVideo}</a></p>
                // </blockquote>
                postVideo && <iframe width="100%" height="400" src={postVideo} frameBorder="0" allowFullScreen></iframe>
              }
              {
                podcast && <Player streamUrl={podcast.url} trackTitle={podcast.title} preloadType="metadata" />
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
              {relatedArticles.length && <RelatedArticles articles={relatedArticles} /> || null }
              <Newsletter anchorId="articleNewsletter" />
              <DisqusComments title={title} id={`${id}-${permalink}`} url={`https://oprea.rocks/blog/${permalink}`}/>
            </footer>
          </article>
        </section>
        <Sidebar
          categories={categoryEdges}
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
    post: contentfulArticle(id: { eq: $id }) {
      id
      title
      keywords
      publishedOn(formatString: "MMMM DD, YYYY")
      updatedOn(formatString: "MMMM DD, YYYY")
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
      author {
        name
        twitter
      }
      podcast {
        title
        url
      }
    }
    categories: allContentfulCategory {
      edges {
        node {
          id
          title
          permalink
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

    issues: allContentfulIssue(
      limit: 4
      sort: { fields: [ publishedOn ], order: DESC }
    ) {
      edges {
        node {
          id
          title
          permalink
          publishedOn(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
