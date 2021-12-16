import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';

class App extends Component {
  constructor() {
    super()
    this.state = {
      memeArray: [],
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => this.setState({memeArray: data.data.memes}))
  }

  render() {
    return (
      <div>
        <MemeGenerator memes={this.state.memeArray} />
      </div>
    )
  }
}

export default App 