import React, { Component } from "react"


// memesArr = this.props.memes
class MemeGenerator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            topInput: "",
            bottomInput: "",
            arrayOfData: [],
            currentMeme: [],
            newMeme: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.handleRefresh = this.handleRefresh.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => this.setState((prevState) => {
                return {
                    arrayOfData: response.data.memes,
                    currentMeme: response.data.memes[Math.floor(Math.random() * response.data.memes.length)]

                }

            })

            )
        console.log(this.state.arrayOfData)

    }


    handleSubmit() {

    }

    // handleRefresh() {
    //     this.setState(prevState => {
    //         let random = Math.floor(Math.random() * prevState.arrayOfData.length)
    //         return {
    //             currentMeme: prevState.arrayOfData[random]
    //         }
    //     })
    // }

    handleChange(event) {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                <input
                    id="topInput"
                    onChange={this.handleChange}
                    placeholder="Top Text"
                />

                <input
                    id="bottomInput"
                    onChange={this.handleChange}
                    placeholder="Bottom Text"
                />

                <button onClick={this.handleRefresh}>Refresh</button>
                <button style={{ width: 75, height: 20 }}>Submit</button>
            </form>
        )
    }
}





export default MemeGenerator