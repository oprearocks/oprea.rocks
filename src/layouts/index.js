import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header>
    <h1>
      <Link to="/">oprea.rocks</Link>
    </h1>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="oprea.rocks | The Blog of Adrian Oprea | Full Stack JavaScript Consultant | Node.js Connoisseur | Solutions Architect @ NEURON01"
      meta={[
        { name: 'description', content: 'oprea.rocks | The website of Adrian Oprea | Full Stack JavaScript Consultant | Node.js conoiseur | Solutions Architect @ NEURON01' },
        { name: 'keywords', content: 'full stack javascript, javascript consultant, node.js consultant, nodejs, docker, devops, rabbitmq, continuous deployment' },
      ]}
    />
    <Header />
    <section role="main">
      {children()}
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
