import React, { Component } from 'react';
import Post from './Post'

class Home extends Component {
  constructor(props){
    super()
    this.state={
        dist: 0
    }
  }

  async componentDidMount(){
    console.log("API Fetch")
    let apiCall = fetch('https://www.reddit.com/.json')
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
      console.log(this.state.posts)
      return (
        <div>
          <h1>Reddit</h1>
          {
            <div>{this.state.posts.map((post,i)=>{
              return <Post post={post} key={i}/>
            })}</div>
          }
        </div>
      );
    } else {
      return (
        <div>
          <p>working</p>
          {
            <div>Not Ready Yet</div>
          }
        </div>
      );
    }
  }
}

export default Home;
