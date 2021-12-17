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

  onAddMeme(meme) {
    this.setState(prevState => ({
      userMemes: prevState.userMemes.push(meme)
    }))
  }

  render() {
    return (
      <div className='App'>
        <Header title='MEME GENERATOR' buttonText={this.state.listView ? 'CREATE' : 'VIEW ALL'} />
        {!this.state.listView && <MemeGenerator addEvent={this.onAddMeme} />}
        {this.state.listView && <MemeList memes={this.state.userMemes} />}
      </div>
    )
  }
}

export default App 
