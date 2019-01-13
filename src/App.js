import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home.js'
import New from './components/New.js'
import Controversial from './components/Controversial'
import Rising from './components/Rising.js'
import Top from './components/Top.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/new">New</Link>{' '}
          <Link to="/rising">Rising</Link>{' '}
          <Link to="/controversial">Controversial</Link>{' '}
          <Link to="/top">Top</Link>{' '}
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/new" component={New}/>
        <Route path="/rising" component={Rising}/>
        <Route path="/controversial" component={Controversial}/>
        <Route path="/top" component={Top}/>
      </div>
    </Router>
    );
  }
}

export default App;
