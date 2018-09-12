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

class ThankYou extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const pageContents = this.props.data.pageContents
    return (
      <section className="page cf">
        <Helmet
          title="Thanks for subscribing to the newsletter!"
        />
        <section className="main-content">
          <article>
            <header>
              <h1>Thanks for subscribing!</h1>
            </header>
            <p>You are one step away from getting the best out of this newsletter. Head over to your email account and confirm your subscription!</p>
            <footer>
            <h3>By the way...</h3>
            <p>While you're here, you could also check me out on social media.</p>
            <ul>
                <li>
                  <a
                    target="_blank"
                    title={`Link to ${
                      pageContents.author.name
                    }'s Twitter account`}
                    href={pageContents.author.twitter}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    title={`Link to ${
                      pageContents.author.name
                    }'s Medium account`}
                    href={pageContents.author.medium}
                  >
                    Medium
                  </a>
                </li>
                <li><a target="_blank" href="https://www.linkedin.com/in/oprearocks/">Linkedin</a></li>
                <li><a target="_blank" href="https://www.quora.com/profile/Adrian-Oprea">Quora</a></li>
                <li>
                  <a
                    target="_blank"
                    title={`Link to ${
                      pageContents.author.name
                    }'s GitHub account`}
                    href={pageContents.author.github}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    title={`Link to ${
                      pageContents.author.name
                    }'s YouTube Channel`}
                    href={pageContents.author.youtube}
                  >
                    YouTube Channel
                  </a>
                </li>
                <li><a target="_blank" href="https://itunes.apple.com/gb/podcast/dev-time-stories/id1341322168">Podcast</a></li>
              </ul>
              {/* <a className="button full-width text-center" href="https://m.me/">Get in touch</a> */}
              <Button
                primary
                size="huge"
                as="a"
                target="_blank"
                href="https://m.me/oprearocks"
              >
                <Icon size="large" name="facebook messenger" /> Say hello!
              </Button>
            </footer>
          </article>
        </section>
        <Sidebar recommendations={recommendationEdges} issues={issueEdges} />
      </section>
    )
  }
}

ThankYou.propTypes = propTypes

export default ThankYou

export const pageQuery = graphql`
  query ThankYouQuery {
    pageContents: contentfulPage(identifier: { eq: "hire-me" }) {
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

    recommendations: allContentfulResource(limit: 5) {
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
