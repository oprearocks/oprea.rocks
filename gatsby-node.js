const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const createPaginatedPages = require('gatsby-paginate')
const podcastFeed = require('./podcastFeed')
const socialMediaProfiles = require('./socialmedia.json')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators
  console.log(createRedirect.toString())
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulBlogPost(
            limit: 1000
            sort: { fields: [ publishedOn ], order: DESC }
          ) {
            edges {
              node {
                id
                title
                publishedOn(formatString: "MMMM DD, YYYY")
                categories {
                  id
                  title
                  permalink
                }
                permalink
                content {
                  childMarkdownRemark {
                    excerpt(pruneLength: 300)
                    timeToRead
                  }
                }
                postVideo
                postImage {
                  resolutions(width: 500) {
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }

          allContentfulCategory(limit: 1000) {
            edges {
              node {
                id
                title
                permalink
              }
            }
          }

          allContentfulRecommendation(limit: 1000) {
            edges {
              node {
                id
                permalink
              }
            }
          }

          allContentfulIssue(
            limit: 1000
            sort: { fields: [ publishedOn ], order: DESC }
          ) {
            edges {
              node {
                id
                permalink
                publishedOn(formatString: "MMMM DD, YYYY")
              }
            }
          }

          allContentfulPodcast(
            limit: 1000
          ) {
            edges {
              node {
                title
                url
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                publishedOn
                keywords
                subtitle
                duration
                explicit
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        createRedirect({
          fromPath: `/contact`,
          toPath: `/hire`,
          isPermanent: true,
          redirectInBrowser: true,

        });

        socialMediaProfiles.forEach(account => createRedirect({
          fromPath: account.path,
          toPath: account.profileURL,
          isPermanent: true,
          redirectInBrowser: true,
        }));

        createPaginatedPages({
          edges: result.data.allContentfulBlogPost.edges,
          createPage: createPage,
          pageTemplate: './src/templates/blog.js',
          pageLength: 5,
          pathPrefix: 'blog',
        })

        // Create Product pages
        const postTemplate = path.resolve('./src/templates/post.js')
        // We want to create a detailed page for each
        // product node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulBlogPost.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/blog/${edge.node.permalink}`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
              relatedArticles: result.data.allContentfulBlogPost.edges.filter(
                ({ node }) => _.intersectionBy(
                  edge.node.categories,
                  node.categories,
                  (category) => category.permalink).length > 1 && edge.node.id !== node.id
              ),
            },
          })
        })
// Categories
        result.data.allContentfulCategory.edges.forEach(({ node: c }) => {
            const edges = result.data.allContentfulBlogPost.edges.filter(({ node }) => node.categories.some(category => category.permalink === c.permalink))
            createPaginatedPages({
              edges,
              createPage,
              pageTemplate: './src/templates/category.js',
              pageLength: 5,
              pathPrefix: `blog/${c.permalink}`,
            })
        })

        // Create Product pages
        const recommendationTemplate = path.resolve('./src/templates/recommendation.js')
        // We want to create a detailed page for each
        // product node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulRecommendation.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/recommendations/${edge.node.permalink}`,
            component: slash(recommendationTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        // Create Product pages
        const issueTemplate = path.resolve('./src/templates/issue.js')
        // We want to create a detailed page for each
        // product node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulIssue.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/reading/${edge.node.permalink}`,
            component: slash(issueTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        podcastFeed(result.data.allContentfulPodcast.edges)

        resolve()
      })
  })
}
