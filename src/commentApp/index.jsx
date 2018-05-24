import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  afterCommentSubmit(username, content){
    const comments = this.state.comments
    comments.push({username, content})
    this.setState({
      comments:  comments
    })
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput handleSubmit={this.afterCommentSubmit.bind(this)} />
        <CommentList comments={this.state.comments}  />
      </div>
    )
  }
}

export default CommentApp