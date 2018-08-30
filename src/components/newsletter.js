import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Button } from 'semantic-ui-react'

import 'semantic-ui-css/components/button.css'

const Newsletter = ({ anchorId = 'newsletter' }) => (
  <section id={anchorId} className="sidebar-section">
    <h2
      data-drip-attribute="headline"
      className="section-title separator-below"
    >
      Newsletter
    </h2>
    <section className="section-content">
      <p data-drip-attribute="description">
        I'm always reading and learning new things. If you want to get the most
        valuable articles I read in a week, each with a short review, add
        yourself to the list.
      </p>
      <form
        data-drip-embedded-form="92273073"
        method="post"
        action="https://www.getdrip.com/forms/92273073/submissions"
      >
        <div>
          <input
            type="email"
            name="fields[email]"
            placeholder="your email"
            className="form-field full-width"
            type="email"
          />
        </div>
        <Button size="large" color="green" data-drip-attribute="sign-up-button">
          I want to learn
        </Button>
      </form>
    </section>
  </section>
)

export default Newsletter
