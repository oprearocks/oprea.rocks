import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/sidebar'
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class HireMePage extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const pageContents = this.props.data.pageContents
    return (
      <section className="page cf">
        <Helmet
          title={pageContents.title}
          meta={[
            { name: 'description', content: pageContents.description },
            { name: 'keywords', content: pageContents.keywords },
          ]}
        />
        <section className="main-content">
          <article>
            <header>
              <h1>About {pageContents.author.name}</h1>
            </header>

            <section dangerouslySetInnerHTML={{
              __html: pageContents.author.about.childMarkdownRemark.html
            }}/>
            <footer>
              <ul>
                <li><a target="_blank" title={`Link to ${pageContents.author.name}'s Twitter account`} href={pageContents.author.twitter}>Twitter</a></li>
                <li><a target="_blank" title={`Link to ${pageContents.author.name}'s Medium account`} href={pageContents.author.medium}>Medium</a></li>
                <li><a target="_blank" title={`Link to ${pageContents.author.name}'s GitHub account`} href={pageContents.author.github}>GitHub</a></li>
                <li><a target="_blank" title={`Link to ${pageContents.author.name}'s YouTube Channel`} href={pageContents.author.youtube}>YouTube Channel</a></li>
              </ul>
              {/* <a className="button full-width text-center" href="https://m.me/">Get in touch</a> */}
              <Button
                primary
                size="huge"
                as="a"
                target="_blank"
                href="https://m.me/oprearocks">
                <Icon size="large" name="facebook messenger" /> Say hello!
              </Button>
            </footer>
          </article>
          <div dangerouslySetInnerHTML={{
            __html: pageContents.content.childMarkdownRemark.html
          }}/>
          <Button
            primary
            size="huge"
            as="a"
            target="_blank"
            href="https://m.me/oprearocks">
            <Icon size="large" name="facebook messenger" /> Let's talk projects
          </Button>
        </section>
        <Sidebar
          recommendations={recommendationEdges}
          issues={issueEdges}
        />
      </section>
    )
  }
}


HireMePage.propTypes = propTypes

export default HireMePage

export const pageQuery = graphql`
  query HireMePageQuery {
    pageContents: contentfulPage(
      identifier: { eq: "hire-me" }
    ) {
      title
      description
      keywords
      content {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        about {
          childMarkdownRemark {
            html
          }
        }
        twitter
        medium
        github
        youtube
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
  }
`
