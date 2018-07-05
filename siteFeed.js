module.exports = {
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
  query siteFeedQuery {
    posts: allContentfulArticle(
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
    recommendations: allContentfulResource(
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
}
