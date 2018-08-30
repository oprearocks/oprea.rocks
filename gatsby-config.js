const dotenv = require('dotenv').config({
  silent: true
})

const siteFeed = require('./siteFeed')

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
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
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
      resolve: `gatsby-plugin-podcast-feed`,
      options: {
        createLinkInHead: true,
        title: 'Dev Time Stories',
        description: 'Full Stack Software Developer Adrian Oprea shares his thoughts on software development, tooling, entrepreneurship and product development. From the nitty-gritty of JavaScript development, with or without frameworks, to DevOps, tooling and automation, all the way to entrepreneurship and product development, this podcast is focused specifically on software development professionals.',
        feed_url: 'https://oprea.rocks/podcast.xml',
        site_url: 'https://oprea.rocks',
        image_url: 'http://s3.eu-west-2.amazonaws.com/dev-time-stories-podcast/podcast-artwork.png',
        author: 'Adrian Oprea ',
        managingEditor: 'Adrian Oprea',
        webMaster: 'Adrian Oprea',
        copyright: `${(new Date()).getFullYear()} Adrian Oprea`,
        language: 'en',
        categories: ['Software development', 'Entrepreneurship', 'Technology'],
        ttl: '1',
        itunesAuthor: 'Adrian Oprea',
        itunesSubtitle: 'Adrian Oprea — Full Stack JavaScript Consultant',
        itunesSummary: 'Full Stack Software Developer Adrian Oprea shares his thoughts on software development, tooling, entrepreneurship and product development. From the nitty-gritty of JavaScript development, with or without frameworks, to DevOps, tooling and automation, all the way to entrepreneurship and product development, this podcast is focused specifically on software development professionals.',
        itunesOwner: { name: 'Adrian Oprea', email:'adrian@oprea.rocks' },
        itunesExplicit: false,
        itunesCategory: {
            'text': 'Technology',
            'subcats': [
              {
                'text': 'Tech News'
              },
              {
                'text': 'Software How-To'
              }
            ]
        },
        itunesImage: 'http://s3.eu-west-2.amazonaws.com/dev-time-stories-podcast/podcast-artwork.png'
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
          siteFeed,
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
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 935482,
        sv: 6,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sentry`,
    //   options: {
    //     dsn: `https://1b6648d0b4a549609559d5fca2e1afd1@sentry.io/1271491`,
    //   },
    // },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-manifest`,
    // `gatsby-plugin-offline`,
  ],
}
