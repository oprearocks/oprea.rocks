import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Input, Button, Container, GridColumn, Grid } from 'semantic-ui-react'

import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/input.css'
import 'semantic-ui-css/components/grid.css'

const NewsletterHead = ({ anchorId = 'newsletter' }) => (
  <Grid style={{ marginTop: 0, backgroundColor: '#f3f9fe'}} container centered stackable columns="equal">
    <Grid.Column widescreen={6} mobile={6}>
    <p style={{color: '#2185D0'}} data-drip-attribute="description">
      Get updates on new articles, and other opportunities
    </p>
    <form
      data-drip-embedded-form="92273073"
      method="post"
      action="https://www.getdrip.com/forms/92273073/submissions"
      >
      <Input
        action={{ color: 'blue', labelPosition: 'right', icon: 'arrow right', content: 'Keep me informed!', 'data-drip-attribute': 'sign-up-button' }}
        type="email"
        name="fields[email]"
        placeholder="you@example.com"
        fluid
        />
    </form>
    </Grid.Column>
  </Grid>
)

export default NewsletterHead
