import React from 'react'
import * as PropTypes from 'prop-types';
import Recommendations from '../components/recommendations'
import About from '../components/about'
import ReadingList from '../components/readingList'

import './sidebar.scss'

const propTypes = {
  author: PropTypes.object,
  recommendations: PropTypes.object,
  issues: PropTypes.object,
}

const Sidebar = ({ author, recommendations, issues }) => (
  <aside className="sidebar">
    {author && <About author={author}/>}
    {recommendations && <Recommendations recommendations={recommendations} />}
    {issues && <ReadingList issues={issues} />}
  </aside>
)

export default Sidebar
