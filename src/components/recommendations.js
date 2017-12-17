import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Recommendation from './recommendation'

import './recommendations.scss'

const listPropTypes = {
  recommendations: PropTypes.array.isRequired,
}

const Recommendations = ({ recommendations }) => (
  <section className="sidebar-section recommendations">
    <h2 className="section-title separator-below">Recommendations</h2>

    <section>
      {
        recommendations.map(({ node }) => (
          <Recommendation recommendation={node} key={node.id} />
        ))
      }
    </section>
    <footer>
      <Link className="custom-link accent-color arrow-after" to="/recommendations">More recommendations</Link>
    </footer>
  </section>
)

Recommendations.propTypes = listPropTypes

export default Recommendations
