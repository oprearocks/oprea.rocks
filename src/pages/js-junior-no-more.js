import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Input, Button, Icon } from 'semantic-ui-react'
import Sidebar from '../components/sidebar'
import Newsletter from '../components/newsletter'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class JSJuniorNoMore extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const pageContents = this.props.data.pageContents
    return (
      <section className="page cf">
        <Helmet
          title="Subscribe to the JavaScript Junior No More email list to get your free copy of the handbook when it comes out."
        />
        <section>
          <article>
            <section>
              <form action="https://www.getdrip.com/forms/804157221/submissions" method="post" data-drip-embedded-form="804157221">
                <h2 data-drip-attribute="headline">Join the &quot;JavaScript Junior No More Handbook&quot; email list</h2>
                <div data-drip-attribute="description">Be among the first who get a copy of my JavaScript interview hacking handbook. You'll find the basic JavaScript concepts you need to master along with a curated list of resources to go even further and deepen your core JavaScript knowledge.</div>
                  <div>
                  <br />
                      <label htmlFor="drip-name">Name</label><br />
                      <Input placeholder="Your Name" type="text" id="drip-name" name="fields[name]" />
                  </div>
                  <div>
                  <br />
                      <label htmlFor="drip-email">Your email address</label><br />
                      <Input placeholder="you@example.com" type="email" id="drip-email" name="fields[email]" /><br />
                  </div>
                  <div>
                  <br />
                    <Button color="green" type="submit" data-drip-attribute="sign-up-button">
                      Join
                    </Button>
                  </div>
              </form>
            </section>

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
                as="a"
                target="_blank"
                href="https://m.me/oprearocks"
              >
                <Icon name="facebook messenger" /> Say hello!
              </Button>
            </footer>
          </article>
        </section>
        {/* <Sidebar recommendations={recommendationEdges} issues={issueEdges} /> */}
      </section>
    )
  }
}

JSJuniorNoMore.propTypes = propTypes

export default JSJuniorNoMore

export const pageQuery = graphql`
  query JSJuniorNoMoreQuery {
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
