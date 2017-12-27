import React from 'react'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share'

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

import './sharebuttons.scss'

const SocialButtons = ({ url, description = '', title }) => (
  <div className="share-buttons">
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round/>
    </FacebookShareButton>
    <GooglePlusShareButton url={url}>
      <GooglePlusIcon size={32} round/>
    </GooglePlusShareButton>
    <LinkedinShareButton url={url} description={description} title={title}>
      <LinkedinIcon size={32} round/>
    </LinkedinShareButton>
    <TwitterShareButton url={url} via="oprearocks" title={title}>
      <TwitterIcon size={32} round/>
    </TwitterShareButton>
    <WhatsappShareButton url={url} title={title} separator=" / ">
      <WhatsappIcon size={32} round/>
    </WhatsappShareButton>
    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round/>
    </RedditShareButton>
    <EmailShareButton url={url} subject={title} body={url}>
      <EmailIcon size={32} round/>
    </EmailShareButton>
  </div>
)

export default SocialButtons
