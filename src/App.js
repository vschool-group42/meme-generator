import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import MemeList from './components/MemeList';

class App extends Component {
  constructor() {
    super()
    this.class = {
      memeArray: [],
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => {
        this.setState({memeArray: response.data.data.memes})
      })
  }

  render() {
    return (
      <div>
        <MemeGenerator memes={this.state.memeArray} />
        <MemeList memes={this.state.memeArray} />
      </div>
    )
  }
}

export default App 