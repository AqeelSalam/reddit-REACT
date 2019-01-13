import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import '../index.css'

class Post extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="post">
        <Thumbnail thumbnail={this.props.post.data.thumbnail}/>
        <a href={`https://www.reddit.com/`+this.props.post.data.permalink}>{this.props.post.data.title}</a>
      </div>
    )
  }
}

export default Post;