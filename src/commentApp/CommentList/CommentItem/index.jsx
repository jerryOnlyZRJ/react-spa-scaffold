import React, { Component } from 'react'

class CommentItem extends Component {
	constructor() {
		super()
	}
	render(){
		const {comment} = this.props
		return(
			<div className="comment-item">
				{comment.username} : {comment.content}
			</div>
		)
	}
}

export default CommentItem