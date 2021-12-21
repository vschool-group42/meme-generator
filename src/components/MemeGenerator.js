import React, { Component } from "react"
import MemeCard from "./MemeCard"
import '../styles/MemeGenerator.css'


class MemeGenerator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrayOfData: [],
            currentMeme: {
                topText: "",
                bottomText: "",
                url: "",
                height: 100,
                width: 100,
            },
            newMeme: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => this.setState((prevState) => {
                const selectedMeme = response.data.memes[Math.floor(Math.random() * response.data.memes.length)]
                return {
                    arrayOfData: response.data.memes,
                    currentMeme: {
                        ...prevState.currentMeme,
                        url: selectedMeme.url,
                        height: selectedMeme.height,
                        width: selectedMeme.width,
                    }
                }
            })
            )
    }

    handleRefresh() {
        this.setState(prevState => {
            let random = this.state.arrayOfData[Math.floor(Math.random() * prevState.arrayOfData.length)]
            return {
                currentMeme: {
                    topText: "",
                    bottomText: "",
                    url: random.url,
                    height: random.height,
                    width: random.width,
                }
            }
        })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState((prevState) => {
            return {
                currentMeme: {
                    ...prevState.currentMeme,
                    [name]: value
                }
            }
        })
    }

    render() {
        return (
            <main className='MemeGenerator'>
                <MemeCard memeObj={this.state.currentMeme} fixedHeight={400} />
                <form onSubmit={(e) => {
                        this.handleRefresh()
                        this.props.addEvent(e, this.state.currentMeme)}
                        }>
                    <input
                        name="topText"
                        value={this.state.currentMeme.topText}
                        id="topText"
                        onChange={this.handleChange}
                        placeholder="Top Text" 
                    />
                    <input
                        name="bottomText"
                        value={this.state.currentMeme.bottomText}
                        id="bottomText"
                        onChange={this.handleChange}
                        placeholder="Bottom Text" 
                    />
                    <button>Submit</button>
                </form >
                <button onClick={this.handleRefresh}>Refresh</button>
            </main>
        )
    }
}

export default MemeGenerator