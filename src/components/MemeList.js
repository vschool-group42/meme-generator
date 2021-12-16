import React, { Component } from 'react'
import '../styles/MemeList.css'

class MemeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allMemes: [],
            mainMemeIndex: 0,
        }
    }

    render() {
        const memes = this.state.allMemes.map((meme, i) => {
            const sizeRatio = 150 / meme.height
            return (
                <img key={i} className='meme' src={meme.url} alt="" style={{width: meme.width * sizeRatio, height: 150}} />
            )
          })
        return (
            <div>
                <div className='main-container'>
                    <img className='meme' src="https://i.imgflip.com/30b1gx.jpg" alt="" style={{width: 400, height: 400}} />
                </div>
                <div className='list-container'>
                    {memes}
                    <div className="arrow" style={{left: 0, display: this.state.mainMemeIndex === 0 ? 'none' : 'block'}}>&lsaquo;</div>
                    <div className="arrow" style={{right: 0, display: this.state.mainMemeIndex === (this.state.allMemes.length - 1) ? 'none' : 'block'}}>&rsaquo;</div>
                </div>
            </div>
        )
    }
}

export default MemeList
