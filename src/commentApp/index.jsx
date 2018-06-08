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
  componentDidMount(){
    this._loadComments()
  }
  _loadComments(){
    const comments = JSON.parse(localStorage.getItem('comments'))
    if(comments){
      this.setState({
        comments
      })
    }
  }
  _saveComments(comments){
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  deleteComment(index){
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({
      comments
    })
  }
  afterCommentSubmit(data){
    const comments = this.state.comments
    comments.push(data)
    this.setState({
      comments
    })
    this._saveComments(comments)
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput handleSubmit={this.afterCommentSubmit.bind(this)} />
        <CommentList comments={this.state.comments} deleteComment={this.deleteComment.bind(this)}  />
      </div>
    )
  }
}

export default CommentApp