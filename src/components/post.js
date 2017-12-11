import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './post.scss';

const propTypes = {
  node: PropTypes.object.isRequired,
}

const Post = ({node}) => (
  <article className="c-article">
    <header>
      <h1>
        <Link to={`/blog/${node.permalink}`}>
          {node.title}
        </Link>
      </h1>
      <span>Total Reading Time: {node.content.childMarkdownRemark.timeToRead} minute(s)</span>
      <div>
        {
          node.postVideo ?
          <iframe width="100%" height="400" src={node.postVideo} frameBorder="0" allowFullScreen></iframe>
          :
          <img className="c-article__image" src={node.postImage.resolutions.src} />
        }
      </div>
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
