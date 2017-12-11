import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'normalize.css'
import Header from './header'
import Footer from './footer'

import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="oprea.rocks | The Blog of Adrian Oprea | Full Stack JavaScript Consultant | Node.js Connoisseur | Solutions Architect @ NEURON01"
      meta={[
        { name: 'description', content: 'oprea.rocks | The website of Adrian Oprea | Full Stack JavaScript Consultant | Node.js conoiseur | Solutions Architect @ NEURON01' },
        { name: 'keywords', content: 'full stack javascript, javascript consultant, node.js consultant, nodejs, docker, devops, rabbitmq, continuous deployment' },
      ]}
      link={[
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Playfair+Display:400,700' }
      ]}
    />
    <Header />
    <section role="main">
      {children()}
    </section>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
