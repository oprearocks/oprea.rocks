import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const propTypes = {
  node: PropTypes.object.isRequired,
}

const Post = ({node}) => (
  <article>
    <header>
      <Link to={`/blog/${node.permalink}`}>
        <h1>
          {node.title}
        </h1>
      </Link>
      <span>Total Reading Time: {node.content.childMarkdownRemark.timeToRead} minute(s)</span>
      <div>
        {
          node.postVideo ?
          <iframe width="100%" height="400" src={node.postVideo} frameBorder="0" allowFullScreen></iframe>
          :
          <img src={node.postImage.resolutions.src} />
        }
      </div>
    </header>
    <main>
      <p>{node.content.childMarkdownRemark.excerpt}</p>
      <Link to={`/blog/${node.permalink}`}>Read more</Link>
    </main>
    <footer>Article footer</footer>
  </article>
)

Post.propTypes = propTypes

export default Post
