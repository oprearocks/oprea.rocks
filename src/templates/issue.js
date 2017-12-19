import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SocialButtons from '../components/sharebuttons'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IssueTemplate extends Component {
  render() {
    const issue = this.props.data.contentfulIssue
    const {
      title,
      content,
      shortDescription,
      permalink,
      excerpt,
      keywords
    } = issue
    return (
      <section className="page">
        <article>
          <Helmet
            title={`${title} | The blog of Adrian Oprea | Full Stack JavaScript Consultant`}
            meta={[
              { name: 'description', content: shortDescription.childMarkdownRemark.html },
              { name: 'keywords', content: keywords },
            ]}
          />

          <header>
            <h1>{title}</h1>
          </header>
          <section className="issue-intro">
            <div
              dangerouslySetInnerHTML={{
                __html: shortDescription.childMarkdownRemark.html,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
          </section>
          <footer>
            <SocialButtons
              url={`https://oprea.rocks/reading/${permalink}`}
              title={`Just read the Oprea.Rocks Newsletter — ${title}`}
              description={content.childMarkdownRemark.excerpt}
            />
          </footer>
        </article>
      </section>
    )
  }
}

IssueTemplate.propTypes = propTypes

export default IssueTemplate

export const pageQuery = graphql`
  query issueQuery($id: String!) {
    contentfulIssue(id: { eq: $id }) {
      title
      keywords
      permalink
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 300)
        }
      }
      shortDescription {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
