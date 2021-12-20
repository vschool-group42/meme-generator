import React, { Component } from 'react';
import MemeGenerator from './components/MemeGenerator';
import MemeList from './components/MemeList';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userMemes: [],
      listView: false,
    }
  }

  onAddMeme = (e, meme) => {
    e.preventDefault()
    this.setState(prevState => {
      return {userMemes: [...prevState.userMemes, meme]}
    })
  }

  toggleView = () => {
    this.setState(prevState => ({
      listView: !prevState.listView
    }))
  }

  render() {
    const memesLength = this.state.userMemes.length
    return (
      <div className='App'>
        <Header 
          title='MEME GENERATOR' 
          buttonText={this.state.listView ? 'CREATE' : `VIEW ALL (${memesLength})`} 
          clickEvent={memesLength > 0 ? this.toggleView : () => alert("You Haven't Created Any Memes Yet!")} />
        {!this.state.listView && <MemeGenerator addEvent={this.onAddMeme} />}
        {this.state.listView && <MemeList memes={this.state.userMemes} />}
      </div>
    )
  }
}

export default App 
