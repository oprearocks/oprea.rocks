import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

const handleNewComment = (text) => console.log(text)

const DisqusComments = (props) => (
  <ReactDisqusComments
    shortname="oprea-rocks"
    identifier={props.id}
    title={props.title}
    url={props.url}
    onNewComment={handleNewComment}/>

)

export default DisqusComments
