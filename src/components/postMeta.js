import React from 'react'
import Helmet from 'react-helmet'
import * as PropTypes from 'prop-types'

const propTypes = {
  post: PropTypes.object.isRequired,
}

const PostMeta = ({ post }) => (
  <Helmet
    title={`${post.title} | The blog of Adrian Oprea | Full Stack JavaScript Consultant`}
    meta={[
      { name: 'description', content: post.description || post.content.childMarkdownRemark.excerpt },
      { name: 'keywords', content: post.keywords },

      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: post.title },
      { property: 'og:description', content: post.description || post.content.childMarkdownRemark.excerpt },
      { property: 'og:image', content: post.postImage.resolutions.src },
      { property: 'og:url', content: `https://oprea.rocks/blog/${post.permalink}` },
      { property: 'og:locale', content: 'en_US' },

      { property: 'article:published_time', content: post.publishedOn },
      { property: 'article:modified_time', content: post.updatedOn },

      { name: 'twitter:creator', value: post.author.twitter && `@${post.author.twitter.split('/').pop()}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: `https://oprea.rocks/blog/${post.permalink}` },
      { name: 'twitter:title', content: post.title },
      { name: 'twitter:description', content: post.description || post.content.childMarkdownRemark.excerpt },
      { name: 'twitter:image', content: post.postImage.resolutions.src },

      { itemprop: 'dateCreated', content: post.publishedOn },
      { itemprop: 'datePublished', content: post.publishedOn },
      { itemprop: 'dateModified', content: post.updatedOn },
      { itemprop: 'keywords', content: post.keywords },
      { itemprop: 'publisher', content: post.author.name },
      { itemprop: 'inLanguage', content: 'en_US' },
    ]}
  />
)

PostMeta.propTypes = propTypes;

export default PostMeta
