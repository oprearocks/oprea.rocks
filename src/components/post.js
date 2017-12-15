import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './post.scss'

const propTypes = {
  node: PropTypes.object.isRequired,
}

const Category = ({ title, permalink }) => (
  <Link to={`/categories/${permalink}`}>&nbsp;{title}</Link>
)

const Post = ({ node }) => (
  <article className="article">
    <header>
      <h1 className="article-title">
        <Link className="article-url accent-hover" to={`/blog/${node.permalink}`}>
          {node.title}
        </Link>
      </h1>

      <div className="article-meta">
        <span>
          December 15 2017
          <span className="accent-color"> /</span>
          {node.categories && node.categories.map(c => <Category title={c.title} permalink={c.permalink} />)}
        </span>
      </div>

      { node.postImage && <img src={node.postImage.resolutions.src} /> }
    </header>
    <section>
      <p>{node.content.childMarkdownRemark.excerpt}</p>
    </section>
    <footer>
      <Link className="article-readmore button" to={`/blog/${node.permalink}`}>Continue reading</Link>
    </footer>
  </article>
)

Post.propTypes = propTypes

export default Post
