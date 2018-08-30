import React from 'react'
import { withPrefix } from 'gatsby-link'
import { defaultOptions } from './internals'

const LINK_REL = 'alternate'
const DATA_TYPE = 'application/rss+xml'

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  let { output, createLinkInHead } = { ...defaultOptions, ...pluginOptions }

  if (!createLinkInHead) {
    return
  }

  if (output.charAt(0) !== `/`) {
    output = `/` + output
  }

  setHeadComponents([
    <link
      key={`gatsby-plugin-podcast-feed`}
      rel={LINK_REL}
      type={DATA_TYPE}
      href={withPrefix(output)}
    />,
  ])
}
