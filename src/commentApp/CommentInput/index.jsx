import React, { Component } from 'react'

class CommentInput extends Component {
  constructor() {
    super()
  }
  componentDidMount(){
    this._loadUsername()
  }
  _saveUsername(name){
    localStorage.setItem('username', name)
  }
  _loadUsername(){
    const username = localStorage.getItem('username')
    if(username){
      this.input.value = username
      this.textarea.focus()
    }else {
      this.input.focus()
    }
  }
  submitHandler(){
    const username = this.input.value
    const content = this.textarea.value
    const createTime = new Date()
    if (!username) return alert('请输入用户名')
    if (!content) return alert('请输入评论内容')
    this._saveUsername(username)
    this.props.handleSubmit({username, content, createTime})
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