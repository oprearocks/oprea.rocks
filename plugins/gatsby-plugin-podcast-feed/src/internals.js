import fs from 'fs'
import pify from 'pify'

export const writeFile = pify(fs.writeFile)

export const runQuery = (handler, query) =>
  handler(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }

    return r.data
  })

export const defaultOptions = {
  query: `
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allContentfulPodcast(
        limit: 1000
      ) {
        edges {
          node {
            title
            subtitle
            duration
            explicit
            url
            publishedOn
            keywords
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
  }`,
  output: `/podcast.xml`,
  createLinkInHead: false,
  serialize: ({ site, allContentfulPodcast }) =>
    allContentfulPodcast.edges.map(({ node }) => ({
      title: node.title,
      description: node.description.childMarkdownRemark.html,
      url: node.url,
      date: node.publishedOn,
      itunesKeywords: node.keywords,
      itunesSubtitle: node.subtitle,
      itunesSummary: node.description.childMarkdownRemark.html,
      itunesDuration: node.duration,
      itunesExplicit: node.explicit || false,
      enclosure: {
        url: node.url,
        type: 'audio/mp3',
        lengths: node.duration,
      },
    }))
}
