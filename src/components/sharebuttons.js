import React from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  TumblrShareButton,
} from 'react-share';

import {
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TwitterIcon,
  RedditIcon,
  TumblrIcon,
} from 'react-share';

import './sharebuttons.scss'

const SocialButtons = ({ url, description = '', title, tags = [] }) => (
  <div className="share-buttons">
    <FacebookShareButton url={url}>
      <FacebookIcon size={40}/>
    </FacebookShareButton>
    <TwitterShareButton url={url} via="oprearocks" title={title}>
      <TwitterIcon size={40}/>
    </TwitterShareButton>
    <LinkedinShareButton url={url} description={description} title={title}>
      <LinkedinIcon size={40}/>
    </LinkedinShareButton>
    <GooglePlusShareButton url={url} description={description} title={title}>
      <GooglePlusIcon size={40}/>
    </GooglePlusShareButton>
    <RedditShareButton url={url} title={title}>
      <RedditIcon size={40}/>
    </RedditShareButton>
    <TumblrShareButton url={url} title={title} caption={description} tags={tags}>
      <TumblrIcon size={40}/>
    </TumblrShareButton>
  </div>
)

export default SocialButtons
