import React from 'react'
import * as PropTypes from 'prop-types';
import Recommendations from '../components/recommendations'
import About from '../components/about'
import ReadingList from '../components/readingList'
import Newsletter from '../components/newsletter'
import { Services } from '../components/podcast'
import CategoriesList from './categories-list';

import './sidebar.scss'
import RelatedArticles from './relatedarticles';

const propTypes = {
  author: PropTypes.object,
  recommendations: PropTypes.object,
  issues: PropTypes.object,
}

const Sidebar = ({ author = null, categories = null, recommendations = null, issues = null, relatedArticles = null }) => (
  <aside className="sidebar">
    {relatedArticles && <RelatedArticles articles={relatedArticles} />}
    <Services />
    <Newsletter />
    {author && <About author={author}/>}
    {/* {recommendations && <Recommendations recommendations={recommendations} />} */}
    {/* {issues && <ReadingList issues={issues} />} */}
    {categories && <CategoriesList categories={categories} />}
  </aside>
)

export default Sidebar
