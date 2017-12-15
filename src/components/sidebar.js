import React from 'react'
import * as PropTypes from 'prop-types';
import Recommendations from '../components/recommendations'
import About from '../components/about'
import ReadingList from '../components/readingList'

import './sidebar.scss'

const propTypes = {
  author: PropTypes.object.isRequired,
  recommendations: PropTypes.object.isRequired,
  issues: PropTypes.object.isRequired,
}

const Sidebar = ({ author, recommendations, issues }) => (
  <aside className="sidebar">
    <About author={author}/>
    <Recommendations recommendations={recommendations} />
    <ReadingList issues={issues} />
  </aside>
)

export default Sidebar
