import React, { Component } from 'react'
import MemeCard from './MemeCard'
import '../styles/MemeList.css'

class MemeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }

    onMemeClicked = (e) => {
        const newIndex = parseInt(e.target.id)
        if (this.state.currentIndex !== newIndex) {
            this.setState({currentIndex: newIndex})
        }
    }

    onDeleteEvent = () => {
        this.props.deleteEvent(this.props.memes[this.state.currentIndex].url)
        this.setState({currentIndex: 0})
    }

    onEditEvent = () => {
        this.props.editEvent(this.props.memes[this.state.currentIndex])
    }

    render() {
        let arrowDisplay = false
        let maxWidth = 0
        const memes = this.props.memes.map((meme, i) => {
            const sizeRatio = 150 / meme.height
            const newWidth = meme.width * sizeRatio
            maxWidth += newWidth
            if (maxWidth + 130 > window.innerWidth) { // +130 adds padding for non scroll view
                arrowDisplay = true
            }
            return (
                <MemeCard 
                    key={i} 
                    index={i} 
                    memeObj={meme} 
                    fixedHeight={150} 
                    onClick={this.onMemeClicked} 
                    uniqueClass='list-item' 
                    textSize={12}
                />
            )
          })

        const selectedMeme = this.props.memes[this.state.currentIndex]
    
        return (
            <div className='MemeList'>
                <MemeCard memeObj={selectedMeme} fixedHeight={400} />
                <div className='buttons-container'>
                    <button onClick={this.onEditEvent}>EDIT</button>
                    <button onClick={this.onDeleteEvent}>DELETE</button>
                </div>
                <div 
                        className="arrow" 
                        style={{left: 60, display: arrowDisplay ? 'block' : 'none'}} 
                        onClick={this.props.leftArrowEvent}>&lsaquo;
                </div>
                <div 
                    className="arrow" 
                    style={{right: 60, display: arrowDisplay ? 'block' : 'none'}} 
                    onClick={this.props.rightArrowEvent}>&rsaquo;
                </div>
                <div className='list-container'>
                    {memes}
                </div>
            </div>
        )
    }
}

export default MemeList
