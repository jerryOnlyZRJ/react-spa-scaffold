import React, { Component } from 'react'
import CommentItem from './CommentItem'

class CommentList extends Component {
  //类的静态变量属于ES7的语法，需要babel-preset-stage-0才能解析执行
  static defaultProps = {
  	comments: []
  }
  constructor() {
    super()
  }
  render() {
    const { comments } = this.props
    return (
      <div className="comment-list">
      	{comments.map((comment, index) => {
      		return <CommentItem comment={comment} key={index} />
      	})}
      </div>
    )
  }
}

export default CommentList