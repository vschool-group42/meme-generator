import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import MemeList from './components/MemeList';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userMemes: [],
      listView: false,
    }
  }

  onAddMeme = meme => {
    this.setState(prevState => ({
      userMemes: prevState.userMemes.push(meme)
    }))
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
          clickEvent={this.toggleView} />
        {!this.state.listView && <MemeGenerator addEvent={this.onAddMeme} />}
        {this.state.listView && <MemeList memes={this.state.userMemes} />}
      </div>
    )
  }
}

export default App 
