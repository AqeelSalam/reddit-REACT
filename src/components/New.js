import React, { Component } from 'react';
import Post from './Post'


class New extends Component {
  constructor(props){
    super()
    this.state={
        dist: 0
    }
  }

  async componentDidMount(){
    console.log("API Fetch")
    let apiCall = fetch('https://www.reddit.com/new/.json')
    .then(response=>{
      return response.json();
    }).then(json=>{
      console.log("json", json)
      return json.data.children;
    })
    let result = await apiCall;
    this.setState({
      posts: result
    })
  }

  render() {
    console.log("Rendering");
    console.log("state", this.state.posts)
    let postChildren;
    if (this.state.posts){
      postChildren = this.state.posts.map((post,i)=>
        <Post post={post} key={i}/>
    )} else {
      postChildren = "Not Ready Yet";
    }
    console.log("postChildren", postChildren);
    return (
      <div>
          <h1>Reddit</h1>
        {
          <div>{postChildren}</div>
        }
      </div>
    );
  }
}

export default New;
