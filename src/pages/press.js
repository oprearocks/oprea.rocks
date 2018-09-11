import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/sidebar'
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'
import photo1 from '../assets/press/conference-photo-1.jpg'
import photo2 from '../assets/press/conference-photo-2.jpg'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PressPage extends Component {
  render() {
    const recommendationEdges = this.props.data.recommendations.edges
    const issueEdges = this.props.data.issues.edges
    const pageContents = this.props.data.pageContents
    return (
      <section className="page cf">
        <Helmet
          title="Press info — Oprea.Rocks — Adrian Oprea"
          meta={[
            { name: 'description', content: "The information on this page is provided as a copy-paste resource for conference organizers media professionals and other interested parties. Feel free to use this information as-is, without my explicit approval." },
            { name: 'keywords', content: "conference speaker, javascript speaker, speaker press info, adrian oprea javascript developer, javascript, developer, reactjs, nodejs, gatsbyjs" },
          ]}
        />
        <section className="main-content">
          <article>
            <header>
              <h1>Press info</h1>
              <p>The information on this page is provided as a copy-paste resource for conference organizers media professionals and other interested parties.</p>
              <p>Feel free to use this information as-is, without my explicit approval. If you require additional information, feel free to <a href="mailto:adrian@oprea.rocks?subject=Press info">email me</a> or <a href="https://m.me/oprearocks" target="_blank">contact me via messenger</a>.</p>
            </header>

            <section>
              <h2>Short bio</h2>
<p>Adrian was born to break things! With a proven track record of phylology, highschool volleyball and kinesiology, he had all the premises of becoming a software developer.</p>

<p>His technical inclination eventually lured him to JavaScript in 2009 and he's been struggling to kick the addiction ever since. Adrian had the chance of making all the mistakes junior, intermediate and senior developers make. From pushing debug logs to production, to avoiding code validation and force-pushing to master, all the way up to using technologies only because he wanted them on his CV.</p>

<p>He loves to share his learnings with anyone willing to listen.</p>
            </section>
            <footer>
              <h2>Social media profiles</h2>
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
              <h2>Photos</h2>
              <ul>
                <li><a href={photo1} title="Conference photo 1" target="_blank">Photo 1</a></li>
                <li><a href={photo2} title="Conference photo 2" target="_blank">Photo 2</a></li>
              </ul>
            </footer>
          </article>
          <Button
            primary
            size="huge"
            as="a"
            target="_blank"
            href="https://m.me/oprearocks"
          >
            <Icon size="large" name="facebook messenger" /> I need more info
          </Button>
        </section>
        <Sidebar recommendations={recommendationEdges} issues={issueEdges} />
      </section>
    )
  }
}

PressPage.propTypes = propTypes

export default PressPage

export const pageQuery = graphql`
  query PressPageQuery {
    pageContents: contentfulPage(identifier: { eq: "hire-me" }) {
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
