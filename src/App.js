import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './MemeGenerator';

class App extends Component {
  constructor() {
    super()
    this.class = {
      memeArray: [],
      currentMeme: {},
      topInput: "",
      bottomInput: "",
      newMeme: []

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {

  }

  handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => {
        this.setState((prevState) => {
          return {
            memeArray: response.data.data.memes,
            currentMeme: response.data.data.memes.length
          }
        })
      })
  }

  render() {
    return (
      <div>
        <MemeGenerator
          image={this.state.currentMeme.url}
          onChange={this.handleChange}


        />
      </div>
    )
  }
}

export default App 