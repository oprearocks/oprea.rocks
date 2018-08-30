import React from 'react'
import {
  PlayButton,
  Timer,
  VolumeControl,
  Progress,
} from 'react-soundplayer/components'
import { withCustomAudio } from 'react-soundplayer/addons'
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'
import './podcast.scss'

const Player = withCustomAudio(props => {
  const { trackTitle } = props

  return (
    <div className="podcast-player-container white">
      <div className="flex flex-center p2 mt4 mb4">
        <PlayButton className="flex-none h4 mr2 white" {...props} />
        <div className="flex-auto">
          <h3 className="h4 caps m0">{trackTitle}</h3>
          <div className="flex flex-center">
            <VolumeControl
              className="flex flex-center mr2"
              buttonClassName="flex-none h4"
              {...props}
            />
            <Progress className="mr2" {...props} />
          </div>
        </div>
      </div>
      <Button
        color="green"
        size="huge"
        attached="bottom"
        as="a"
        href="#articleNewsletter"
      >
        Join the newsletter
      </Button>
    </div>
  )
})

export default Player
