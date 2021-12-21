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

  onDelete = (memeUrl) => {
    for (let i = 0; i < this.state.userMemes.length; i++) {
      if (this.state.userMemes[i].url === memeUrl) {
        this.setState(prevState => {
          prevState.userMemes.splice(i, 1)
          return {userMemes: [...prevState.userMemes]}
        })
      }
    }
  }

  render() {
    const memesLength = this.state.userMemes.length
    return (
      <div className='App'>
        <Header 
          title='MEME GENERATOR' 
          buttonText={this.state.listView ? 'CREATE' : `VIEW ALL (${memesLength})`} 
          clickEvent={(memesLength > 0 || this.state.listView) ? this.toggleView : () => alert("You Haven't Created Any Memes Yet!")} />
        {!this.state.listView && <MemeGenerator addEvent={this.onAddMeme} />}
        {this.state.listView && <MemeList memes={this.state.userMemes} deleteEvent={this.onDelete} />}
      </div>
    )
  }
}

export default App 
