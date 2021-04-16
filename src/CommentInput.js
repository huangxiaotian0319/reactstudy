import React, { Component } from 'react'
class CommentInput extends Component {
    constructor(){
        super()
        this.state={
            username:'xx',
            content:'xxxx'
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange =(event)=> {
        this.setState({
          content: event.target.value
        })
      }

      handleSubmit =()=> {
        if (this.props.onSubmit) {
          const { username, content } = this.state
          this.props.onSubmit({username, content})
        }
        this.setState({ content: '' })
      }
  render() {
    return (
        <div>
        <div>
          <span>用户名：</span>
          <div>
            <input value={this.state.username}
            onChange={this.handleUsernameChange}/>
          </div>
        </div>
        <div>
          <span>评论内容：</span>
          <div>
            <textarea value={this.state.content}
            onChange={this.handleContentChange}/>
          </div>
        </div>
        <div>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    )
  }
}
export default CommentInput