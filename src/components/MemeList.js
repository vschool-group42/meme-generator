import React, { Component } from 'react'
import MemeCard from './MemeCard'
import '../styles/MemeList.css'

class MemeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allMemes: [
                {url: 'https://i.imgflip.com/30b1gx.jpg', topText: "hello", bottomText: 'world', width: 1200, height: 1200}
            ],
            currentIndex: 0,
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {allMemes: [...this.props.memes]}
        })
    }

    onRightArrowClicked = () => {
        this.setState(prevState => {
            const shiftedArray = prevState.allMemes.map((meme, i) => {
                if (i > prevState.allMemes.length - 2) {
                    return prevState.allMemes[0]
                }
                return prevState.allMemes[i + 1]
            })
            return {allMemes: shiftedArray}
        })
    }

    onLeftArrowClicked = () => {
        this.setState(prevState => {
            const shiftedArray = prevState.allMemes.map((meme, i) => {
                if (i === 0) {
                    return prevState.allMemes.at(-1)
                }
                return prevState.allMemes[i - 1]
            })
            return {allMemes: shiftedArray}
        })
    }

    onMemeClicked = (e) => {
        const newIndex = parseInt(e.target.id)
        if (this.state.currentIndex !== newIndex) {
            this.setState({currentIndex: newIndex})
        }
    }

    render() {
        let arrowDisplay = false
        let maxWidth = 0
        const memes = this.state.allMemes.map((meme, i) => {
            const sizeRatio = 150 / meme.height
            const newWidth = meme.width * sizeRatio
            maxWidth += newWidth
            if (maxWidth + 130 > window.innerWidth) { // +130 adds padding for non scroll view
                arrowDisplay = true
            }
            return (
                <MemeCard key={i} memeObj={meme} fixedHeight={150} onClick={this.onMemeClicked} uniqueClass='list-item' />
            )
          })

        const selectedMeme = this.state.allMemes[this.state.currentIndex]
    
        return (
            <div>
                <MemeCard memeObj={selectedMeme} fixedHeight={400} />
                <div className='list-container'>
                    {memes}
                    <div 
                        className="arrow" 
                        style={{left: 0, display: arrowDisplay ? 'block' : 'none'}} 
                        onClick={this.onLeftArrowClicked}>&lsaquo;</div>
                    <div 
                        className="arrow" 
                        style={{right: 0, display: arrowDisplay ? 'block' : 'none'}} 
                        onClick={this.onRightArrowClicked}>&rsaquo;</div>
                </div>
            </div>
        )
    }
}

export default MemeList