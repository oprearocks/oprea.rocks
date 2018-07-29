import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'

const PaginationLink = ({ test, url, text, className = '' }) => (
  <Button as={Link} to={url} disabled={test}>{text}</Button>
)

export default PaginationLink
