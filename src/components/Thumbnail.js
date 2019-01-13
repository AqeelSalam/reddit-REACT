import React, { Component } from 'react';
import thumbnail from './Thumbnail.js'

class Thumbnail extends Component {
  render () {
    let url=this.props.thumbnail;
    if (url=="default" || url=="self"||url=="image"){
      return(
          <img height="140" src="https://i.imgur.com/sdO8tAw.png"/>
        )
    }else{
      return (
          <img src={this.props.thumbnail}/>
      )
    }
  }
}

export default Thumbnail;