import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentItem extends Component {
	constructor() {
		super()
		this.state = {
			timeString: ''
		}
	}
	componentDidMount(){
		this.timer = setInterval(() => {
			this.setState({
				timeString: this._updateTime(this.props.comment.createTime)
			})
		}, 5000)
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	_updateTime(oldTime){
	    const duration = (new Date() - new Date(oldTime))/1000
	    const timeString = duration > 60 ? `${Math.floor(duration/60)}分钟之前` : `${Math.floor(duration)}秒之前`
	    return timeString
	  }
	  handleDelete(){
	  	this.props.deleteComment(this.props.index)
	  }
	render(){
		const {comment} = this.props
		return(
			<div className='comment'>
		        <div className='comment-user'>
		          <span className='comment-username'>
		            {comment.username}
		          </span>：
		        </div>
		        <p>{comment.content}</p>
		        <span className='comment-createdtime'>
		          {this.state.timeString}
		        </span>
		        <span className='comment-delete' onClick={this.handleDelete.bind(this)}>
		          删除
		        </span>
		      </div>
		)
	}
}

export default CommentItem