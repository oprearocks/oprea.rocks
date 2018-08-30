import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const listPropTypes = {
  recommendations: PropTypes.array.isRequired,
}

const Categories = ({ categories }) => (
  <section>
    <header>
      <h2>Categories</h2>
    </header>
    <section>
      <ul>
        {categories.map(({ category }) => (
          <li key={category.id}>
            <Link to={`/blog/${category.permalink}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  </section>
)

Categories.propTypes = listPropTypes

export default Categories
