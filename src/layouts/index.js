import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'normalize.css'
import 'prismjs/themes/prism.css'

import Header from './header'
import Footer from './footer'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="oprea.rocks | The Blog of Adrian Oprea | Full Stack JavaScript Consultant | Node.js Connoisseur | Solutions Architect @ NEURON01"
      meta={[
        { name: 'description', content: 'oprea.rocks | The website of Adrian Oprea | Full Stack JavaScript Consultant | Node.js conoiseur | Solutions Architect @ NEURON01' },
        { name: 'keywords', content: 'full stack javascript, javascript consultant, node.js consultant, nodejs, docker, devops, rabbitmq, continuous deployment' },
      ]}
      link={[
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Montserrat:400,700|Open Sans:400,700' }
      ]}
    />
    <Header />
    <main role="main" className="main">
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
