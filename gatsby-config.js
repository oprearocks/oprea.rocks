const dotenv = require('dotenv').config({
  silent: true
});

module.exports = {
  siteMetadata: {
    title: `oprea.rocks`,
    siteUrl: `https://oprea.rocks`,
    description: `Adrian Oprea | Software development consultant`,
    author: `Adrian Oprea`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 80,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, posts, issues, recommendations } }) => {
              const postEdges = posts.edges.map(edge => ({
                  title: edge.node.title,
                  description: edge.node.content.childMarkdownRemark.excerpt,
                  url: `${site.siteMetadata.siteUrl}/blog/${edge.node.permalink}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.permalink}`,
                  custom_elements: [{ "content:encoded": edge.node.content.childMarkdownRemark.html }],
                }));

              const recommendationEdges = recommendations.edges.map(edge => ({
                title: `${edge.node.type} recommendation: ${edge.node.title}`,
                description: edge.node.description.childMarkdownRemark.excerpt,
                url: `${site.siteMetadata.siteUrl}/recommendations/${edge.node.permalink}`,
                guid: `${site.siteMetadata.siteUrl}/recommendations/${edge.node.permalink}`,
                custom_elements: [{ "content:encoded": edge.node.description.childMarkdownRemark.html }],
              }));

              const issueEdges = issues.edges.map(edge => ({
                title: `Reading list: ${edge.node.title}`,
                description: edge.node.content.childMarkdownRemark.excerpt,
                url: `${site.siteMetadata.siteUrl}/reading/${edge.node.permalink}`,
                guid: `${site.siteMetadata.siteUrl}/reading/${edge.node.permalink}`,
                custom_elements: [{ "content:encoded": edge.node.content.childMarkdownRemark.html }],
              }));

              return [
                ...postEdges,
                ...issueEdges,
                ...recommendationEdges,
              ];
            },

            query: `
            query feedQuery {
                posts: allContentfulBlogPost(
                  limit: 1000,
                  sort: { order: DESC, fields: [publishedOn] }
                ) {
                  edges {
                    node {
                      title
                      publishedOn
                      permalink
                      content {
                        childMarkdownRemark {
                          excerpt(pruneLength: 300)
                          html
                        }
                      }
                    }
                  }
                }
                issues: allContentfulIssue(
                  limit: 1000,
                  sort: { order: DESC, fields: [publishedOn] }
                ) {
                  edges {
                    node {
                      title
                      permalink
                      publishedOn
                      content {
                        childMarkdownRemark {
                          html
                        }
                      }
                      shortDescription {
                        childMarkdownRemark {
                          excerpt(pruneLength: 300)
                        }
                      }
                    }
                  }
                }
                recommendations: allContentfulRecommendation(
                  limit: 1000
                ) {
                  edges {
                    node {
                      title
                      permalink
                      type
                      description {
                        childMarkdownRemark {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-32468134-5",
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-manifest`,
    `gatsby-plugin-offline`,
  ],
}
