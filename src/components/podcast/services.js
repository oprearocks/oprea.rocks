import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

import soundcloud from './assets/soundcloud.png'
import itunes from './assets/itunes.png'
import overcast from './assets/overcast.png'
import stitcher from './assets/stitcher.png'
import tunein from './assets/tunein.png'

import './podcast.scss'

const providers = [
  {
    name: 'Itunes',
    logo: itunes,
    url: 'https://itunes.apple.com/gb/podcast/dev-time-stories/id1341322168',
  },
  {
    name: 'Soundcloud',
    logo: soundcloud,
    url: 'https://soundcloud.com/oprearocks/tracks',
  },
  {
    name: 'Overcast',
    logo: overcast,
    url: 'https://overcast.fm/itunes1341322168/dev-time-stories',
  },
  {
    name: 'Stitcher',
    logo: stitcher,
    url: 'https://www.stitcher.com/podcast/dev-time-stories',
  },
  {
    name: 'TuneIn',
    logo: tunein,
    url: 'https://tunein.com/radio/Dev-Time-Stories-p1093888/',
  },
]

const Provider = ({ logo, name, url }) => (
  <div className="podcast-provider">
    <p>
      <img className="provider-logo" src={logo} />
      <a className="custom-link accent-color" href={url} target="_blank">
        {name}
      </a>
    </p>
  </div>
)

const Services = ({ anchorId = 'subscribeToPodcast' }) => (
  <section id={anchorId} className="sidebar-section">
    <h2 className="section-title separator-below">
      Listen to the Dev Time Stories podcast
    </h2>
    <section className="section-content">
      <p>
        For the ones of you who prefer audio to text, go ahead and subscribe to
        my podcast — Dev Time Stories — on your platform of choice.
      </p>
      {providers.map(p => (
        <Provider key={p.name} logo={p.logo} name={p.name} url={p.url} />
      ))}
    </section>
  </section>
)

export default Services
