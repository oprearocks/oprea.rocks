const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const createPaginatedPages = require('gatsby-paginate')
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulBlogPost(limit: 1000) {
            edges {
              node {
                id
                title
                publishedOn
                categories {
                  id
                  title
                  permalink
                }
                updatedOn
                permalink
                content {
                  childMarkdownRemark {
                    excerpt(pruneLength: 300)
                    timeToRead
                  }
                }
                postVideo
                postImage {
                  responsiveResolution(width: 500) {
                    width
                    height
                    src
                    srcSet
                  }
                }
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

          allContentfulIssue(limit: 1000) {
            edges {
              node {
                id
                permalink
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
            path: `/blog/${edge.node.permalink}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
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
            path: `/recommendations/${edge.node.permalink}/`,
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
            path: `/reading/${edge.node.permalink}/`,
            component: slash(issueTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        resolve()
      })
  })
}
