import React, { Component } from 'react'

class CommentInput extends Component {
  constructor() {
    super()
  }
  submitHandler(){
    if (!this.input.value) return alert('请输入用户名')
    if (!this.textarea.value) return alert('请输入评论内容')
    this.props.handleSubmit(this.input.value, this.textarea.value)
    this.input.value = ''
    this.textarea.value = ''
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