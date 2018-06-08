import React, { Component } from 'react'
import CommentItem from './CommentItem'
import PropTypes from 'prop-types'

class CommentList extends Component {
  //类的静态变量属于ES7的语法，需要babel-preset-stage-0才能解析执行
  static defaultProps = {
  	comments: []
  }
  static propTypes = {
    comments: PropTypes.array.isRequired
  }
  constructor() {
    super()
  }
  render() {
    const { comments } = this.props
    return (
      <div className="comment-list">
      	{comments.map((comment, index) => {
      		return <CommentItem deleteComment={this.props.deleteComment} comment={comment} key={index} index={index} />
      	})}
      </div>
    )
  }
}

export default CommentList