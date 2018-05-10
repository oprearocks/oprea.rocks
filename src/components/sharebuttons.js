import React from 'react'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share'

const {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  // GooglePlusShareButton,
  // WhatsappShareButton,
  RedditShareButton,
  // EmailShareButton,
} = ShareButtons;

const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');
const LinkedinIcon = generateShareIcon('linkedin');
// const GooglePlusIcon = generateShareIcon('google');
// const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
// const EmailIcon = generateShareIcon('email');

import './sharebuttons.scss'

const SocialButtons = ({ url, description = '', title }) => (
  <div className="share-buttons">
    <LinkedinShareButton url={url} description={description} title={title}>
      <LinkedinIcon size={32} round/>
    </LinkedinShareButton>
    <TwitterShareButton url={url} via="oprearocks" title={title}>
      <TwitterIcon size={32} round/>
    </TwitterShareButton>
    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round/>
    </RedditShareButton>
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round/>
    </FacebookShareButton>
    {/* <GooglePlusShareButton url={url}>
      <GooglePlusIcon size={32} round/>
    </GooglePlusShareButton>
    <WhatsappShareButton url={url} title={title} separator=" / ">
      <WhatsappIcon size={32} round/>
    </WhatsappShareButton>
    <EmailShareButton url={url} subject={title} body={url}>
      <EmailIcon size={32} round/>
    </EmailShareButton> */}
  </div>
)

export default SocialButtons
