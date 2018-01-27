const Podcast = require('podcast')
const fs = require('fs')

module.exports = function podcastFeed(podcasts) {
  const feed = new Podcast({
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
  });

  podcasts.forEach(({ node }) => feed.addItem({
    title: node.title,
    description: node.description.childMarkdownRemark.html,
    url: node.url,
    date: node.publishedOn,
    itunesKeywords: node.keywords,
    itunesSubtitle: node.subtitle,
    itunesSummary: node.description.childMarkdownRemark.html,
    itunesDuration: node.duration,
    itunesExplicit: node.explicit || false
  }))

  const xml = feed.buildXml();

  fs.writeFileSync(__dirname + '/public/podcast.xml', xml);
}
