import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

const Newsletter = () => (
  <section className="sidebar-section">
    <h2 data-drip-attribute="headline" className="section-title separator-below">Newsletter</h2>
    <section className="section-content">
      <p data-drip-attribute="description">
        I'm always reading and learning new things. If you want to get the most valuable articles I read in a week, each with a short review, add yourself to the list.
      </p>
      <form data-drip-embedded-form="92273073" method="post" action="https://www.getdrip.com/forms/92273073/submissions">
        <div>
          <input type="email" name="fields[email]" placeholder="your email" className="form-field full-width" type="email" />
        </div>
        <button className="button accent-bg" data-drip-attribute="sign-up-button">I want to learn</button>
      </form>
    </section>
  </section>
)

export default Newsletter
