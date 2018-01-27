import React from 'react'
import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components'
import { withCustomAudio } from 'react-soundplayer/addons'

import './podcast.scss'
import './overrides.scss'

const Podcast = withCustomAudio(props => {
  const { trackTitle } = props

  return (
    <div className="podcast-container white">
      <div className="flex flex-center p2 mt4 mb4">
        <PlayButton className="flex-none h4 mr2 white" {...props} />
        <div className="flex-auto">
          <h3 className="h4 caps m0">{trackTitle}</h3>
          <div className="flex flex-center">
            <VolumeControl
              className="flex flex-center mr2"
              buttonClassName="flex-none h4"
              {...props} />
            <Progress className="mr2" {...props} />
          </div>
        </div>
      </div>
      <a className="button full-width text-center no-hover" href="#articleNewsletter">Join the newsletter</a>
    </div>
  )
})

export default Podcast
