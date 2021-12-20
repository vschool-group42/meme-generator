import React, { Component } from "react"


// memesArr = this.props.memes
class MemeGenerator extends Component {

    constructor() {
        super()
        this.state = {
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

    render() {
        return (
            <form >
                <input
                    id="topInput"
                    onChange={this.handleChange}
                />
    
                <input
                    id="bottomInput"
                    onChange={this.handleChange}
                />
    
            </form>
        )
    }
}





export default MemeGenerator