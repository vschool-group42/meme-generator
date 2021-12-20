import React, { Component } from "react"


class MemeGenerator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrayOfData: [],
            currentMeme: {
                topText: "",
                bottomText: "",
                url: ""

            },
            newMeme: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefresh = this.handleRefresh.bind(this)
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


    }



    handleSubmit() {
        this.props.addEvent(this.state.currentMeme)

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
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    render() {
        return (
            <main>
                < form onSubmit={this.handleSubmit} >


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