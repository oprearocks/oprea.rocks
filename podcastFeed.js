module.exports = {
  serialize: ({ query: { site, podcasts } }) => {
    const podcastEdges = podcasts.edges.map(edge => ({
        title: edge.node.title,
        url: edge.node.url,
        guid: edge.node.url,
      }));

    return [
      ...podcastEdges,
    ];
  },

  query: `
  query podcastFeedQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
    podcasts: allContentfulPodcast {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`,
  output: "/podcast.xml",
}
