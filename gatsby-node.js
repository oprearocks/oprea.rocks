const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')
const createPaginatedPages = require('gatsby-paginate')
const podcastFeed = require('./podcastFeed')
const socialMediaProfiles = require('./socialmedia.json')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators
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

        const sortByDateDescending = (a, b) => {
          const aPubDateInMS = (new Date(a.publishedOn)).getTime();
          const bPubDateInMS = (new Date(b.publishedOn)).getTime();

          if (aPubDateInMS > bPubDateInMS) {
            return 1
          }

          if (aPubDateInMS < bPubDateInMS) {
            return -1
          }

          return 0
        }

        const getRelatedArticles = (currentArticle, articles) => {
          const MINIMUM_CATEGORIES_IN_COMMON = 1

          const hasAtLeastOneCategoryInCommon = ({ node }) => {
            // stop working if we're looking at the same article
            if (currentArticle.id === node.id) {
              return false
            }
            const commonCategories = _.intersectionBy(currentArticle.categories, node.categories, (category) => category.permalink)
            return commonCategories.length >= MINIMUM_CATEGORIES_IN_COMMON
          }

          const filteredResults = articles.filter(hasAtLeastOneCategoryInCommon)
          if (filteredResults.length > 5) {
            return filteredResults.sort(sortByDateDescending).slice(0, 5)
          }
          return filteredResults
        }

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
              relatedArticles: getRelatedArticles(edge.node, result.data.allContentfulBlogPost.edges),
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
