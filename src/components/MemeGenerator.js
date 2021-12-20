import React, { Component } from "react"


class MemeGenerator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrayOfData: [],
            currentMeme: {
                topText: "",
                bottomText: "",
                url: "",
                height: 0,
                width: 0

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
            let random = Math.floor(Math.random() * prevState.arrayOfData.length)
            return {
                currentMeme: prevState.arrayOfData[random]
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
            <main>
                < form onSubmit={(e) => this.props.addEvent(e, this.state.currentMeme)} >


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
                    <div>
                        {console.log(this.state.currentMeme.url)}
                        <img src={this.state.currentMeme.url} style={{ width: 400, height: 400 }} alt="" />
                        <h1>{this.state.currentMeme.topText}</h1>
                        <h1>{this.state.currentMeme.bottomText}</h1>

                    </div>

                    <button style={{ width: 75, height: 20 }}>Submit</button>
                </form >
                <button onClick={this.handleRefresh}>Refresh</button>
            </main>

        )
    }

}





export default MemeGenerator