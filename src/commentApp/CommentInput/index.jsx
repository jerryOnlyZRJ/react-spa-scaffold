import React, { Component } from 'react'

class CommentInput extends Component {
  submitHandler(){
    this.props.handleSubmit(this.input.value, this.textarea.value)
  }
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input ref={input => this.input = input} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref={textarea => this.textarea = textarea} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.submitHandler.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput