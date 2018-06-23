import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import SocialButtons from './sharebuttons'

import './post.scss'

const propTypes = {
  node: PropTypes.object.isRequired,
}

const Category = ({ title, permalink }) => (
  <Link to={`/blog/${permalink}`}>&nbsp;{title}</Link>
)

const Post = ({ node }) => (
  <article className="article" itemProp="blogPost" itemScope itemType="https://schema.org/BlogPosting">
    <header>
      <div className="article-meta">
        <span>
          {node.publishedOn}
          <span className="accent-color"> /</span>
          {node.categories && node.categories.map(c => <Category title={c.title} permalink={c.permalink} key={c.id} />)}
        </span>
      </div>
      <h1 className="article-title" itemProp="headline">
        <Link className="article-url accent-hover" to={`/blog/${node.permalink}`}>
          {node.title}
        </Link>
      </h1>
      {
        node.postImage && node.postImage.resolutions &&
        <Img
          className="article-image"
          resolutions={node.postImage.resolutions}
          title={node.postImage.title}
          alt={node.postImage.title}
        />
      }
    </header>
    <section
      itemProp="articleBody"
      dangerouslySetInnerHTML={{
        __html: node.content.childMarkdownRemark.excerpt,
      }}
    />
    <footer>
      <SocialButtons
        url={`https://oprea.rocks/blog/${node.permalink}`}
        title={node.title}
        description={node.content.childMarkdownRemark.excerpt}
      />
      {/* <Link className="article-readmore" to={`/blog/${node.permalink}`}>Continue reading</Link> */}
    </footer>
  </article>
)

Post.propTypes = propTypes

export default Post
