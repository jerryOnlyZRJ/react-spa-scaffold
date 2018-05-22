import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class CommentApp extends Component {
  afterCommentSubmit(name, content){
  	console.log(`${name} - ${content}`)
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput handleSubmit={this.afterCommentSubmit.bind(this)} />
        <CommentList />
      </div>
    )
  }
}

export default CommentApp