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
      edit: {
        status: false,
        meme: {}
      }
    }
  }

  onAddMeme = (e, meme) => {
    e.preventDefault()
    this.setState(prevState => {
      return {userMemes: [...prevState.userMemes, meme]}
    })
  }

  onSaveMeme = (e, meme) => {
    e.preventDefault()
    this.setState(prevState => {
      for (let i = 0; i < prevState.userMemes.length; i++) {
        if (prevState.userMemes[i].url === meme.url) {
          prevState.userMemes[i] = {
            ...meme
          }
          return {userMemes: [...prevState.userMemes], edit: {status: false, meme: {}}}
        }
      }
    })
    this.toggleView()
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
    if (this.state.userMemes.length === 1) {
      this.toggleView()
    }
  }

  onEdit = (memeObj) => {
    this.setState({edit: {
      status: true,
      meme: memeObj
    }})
    this.toggleView()
  }

  onRightArrowClicked = () => {
    this.setState(prevState => {
        const shiftedArray = prevState.userMemes.map((meme, i) => {
            if (i > prevState.userMemes.length - 2) {
                return prevState.userMemes[0]
            }
            return prevState.userMemes[i + 1]
        })
        return {userMemes: shiftedArray}
    })
}

onLeftArrowClicked = () => {
  this.setState(prevState => {
      const shiftedArray = prevState.userMemes.map((meme, i) => {
          if (i === 0) {
              return prevState.userMemes.at(-1)
          }
          return prevState.userMemes[i - 1]
      })
      return {userMemes: shiftedArray}
  })
}

  render() {
    const memesLength = this.state.userMemes.length
    return (
      <div className='App'>
        <Header 
          title='MEME GENERATOR' 
          buttonText={this.state.listView ? 'CREATE' : `VIEW ALL (${memesLength})`} 
          clickEvent={memesLength > 0 ? this.toggleView : () => alert("You Haven't Created Any Memes Yet!")} />
        {!this.state.listView && <MemeGenerator addEvent={this.onAddMeme} saveEvent={this.onSaveMeme} edit={this.state.edit} />}
        {this.state.listView && <MemeList 
                                  memes={this.state.userMemes} 
                                  deleteEvent={this.onDelete} 
                                  leftArrowEvent={this.onLeftArrowClicked}
                                  rightArrowEvent={this.onRightArrowClicked}
                                  editEvent={this.onEdit} 
                                />
        }
      </div>
    )
  }
}

export default App 
