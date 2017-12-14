import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const propTypes = {
  node: PropTypes.object.isRequired,
}

const Category = ({ title, permalink }) => (
  <Link to={`/blog/${permalink}`}>{title},&nbsp;</Link>
)

const Post = ({ node }) => (
  <article>
    <header>
      <h1>
        <Link to={`/blog/${node.permalink}`}>
          {node.title}
        </Link>
      </h1>

      <div>
        <span>Published under {node.categories && node.categories.map(c => <Category title={c.title} permalink={node.permalink} />)}</span>
      </div>

      { node.postImage && <img src={node.postImage.resolutions.src} /> }
    </header>
    <section>
      <p>{node.content.childMarkdownRemark.excerpt}</p>
      <Link to={`/blog/${node.permalink}`}>Read more</Link>
    </section>
    <footer>Article footer</footer>
  </article>
)

Post.propTypes = propTypes

export default Post
