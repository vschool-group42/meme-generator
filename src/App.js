import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import MemeList from './components/MemeList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userMemes: [],
    }
  }

  onAddMeme(meme) {
    this.setState(prevState => ({
      userMemes: prevState.userMemes.push(meme)
    }))
  }

  render() {
    return (
      <div className='App'>
        <MemeGenerator addEvent={this.onAddMeme} />
        <MemeList
          memes={this.state.userMemes}
          style={{ display: 'none' }} />

      </div>
    )
  }
}

export default App 