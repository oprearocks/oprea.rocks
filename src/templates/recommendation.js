import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Sidebar from '../components/sidebar'
import SocialButtons from '../components/sharebuttons'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ReviewTemplate extends Component {
  render() {
    const recommendation = this.props.data.recommendation
    const author = this.props.data.author
    const issueEdges = this.props.data.issues.edges

    const {
      title,
      type,
      keywords,
      description,
      permalink,
      image,
      url,
    } = recommendation
    return (
      <section className="page cf">
        <section className="main-content">
          <article
            className="recommendation"
            itemProp="blogPost"
            itemScope
            itemType="https://schema.org/Review"
          >
            <Helmet
              title={`${title} | The blog of Adrian Oprea | Full Stack JavaScript Consultant`}
              meta={[
                {
                  name: 'description',
                  content: description.childMarkdownRemark.excerpt,
                },
                { name: 'keywords', content: keywords },
              ]}
            />

            <header className="cf">
              <div className="recommendation-image">
                <Img
                  resolutions={image.resolutions}
                  title={`Image of ${title} ${type}`}
                  alt={`${title} ${type}`}
                />
              </div>
              <div className="recommendation-title">
                <h1>{title}</h1>
                <a
                  className="custom-link accent-color arrow-after"
                  href={url}
                  target="_blank"
                >
                  Get this {type}
                </a>
                <SocialButtons
                  url={`https://oprea.rocks/reading/${permalink}`}
                  title={`Found out about this ${type} from Adrian Oprea — ${title}`}
                  description={description.childMarkdownRemark.excerpt}
                />
              </div>
            </header>
            {description ? (
              <section
                itemProp="reviewBody"
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            ) : (
              <p>
                If you don't see anything here, it means that this {type} is
                still in progress. A review for this {type} is on its way, stay
                tuned!
              </p>
            )}
          </article>
        </section>
        <Sidebar author={author} issues={issueEdges} />
      </section>
    )
  }
}

ReviewTemplate.propTypes = propTypes

export default ReviewTemplate

export const pageQuery = graphql`
  query recommendationQuery($id: String!) {
    recommendation: contentfulResource(id: { eq: $id }) {
      title
      keywords
      type
      permalink
      description {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 300)
        }
      }
      url
      image {
        resolutions(width: 150) {
          ...GatsbyContentfulResolutions
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
      sort: { fields: [publishedOn], order: DESC }
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
