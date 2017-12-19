import React from 'react'
import * as PropTypes from 'prop-types';
import Recommendations from '../components/recommendations'
import About from '../components/about'
import ReadingList from '../components/readingList'
import Newsletter from '../components/newsletter'

import './sidebar.scss'

const propTypes = {
  author: PropTypes.object,
  recommendations: PropTypes.object,
  issues: PropTypes.object,
}

const Sidebar = ({ author = null, recommendations = null, issues = null }) => (
  <aside className="sidebar">
    <Newsletter />
    {author && <About author={author}/>}
    {recommendations && <Recommendations recommendations={recommendations} />}
    {issues && <ReadingList issues={issues} />}
  </aside>
)

export default Sidebar
