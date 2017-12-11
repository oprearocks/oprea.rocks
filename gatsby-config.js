const dotenv = require('dotenv').config({
  silent: true
});

module.exports = {
  siteMetadata: {
    title: `oprea.rocks`,
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
    `gatsby-transformer-remark`,
  ],
}
