import React, { Component } from 'react'
import '../styles/MemeList.css'

class MemeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allMemes: [
                {id: '181913649', name: 'Drake Hotline Bling', url: 'https://i.imgflip.com/30b1gx.jpg', width: 1200, height: 1200},
                {id: '87743020', name: 'Two Buttons', url: 'https://i.imgflip.com/1g8my4.jpg', width: 600, height: 908},
                {id: '112126428', name: 'Distracted Boyfriend', url: 'https://i.imgflip.com/1ur9b0.jpg', width: 1200, height: 800},
                {id: '124822590', name: 'Left Exit 12 Off Ramp', url: 'https://i.imgflip.com/22bdq6.jpg', width: 804, height: 767},
                {id: '247375501', name: 'Buff Doge vs. Cheems', url: 'https://i.imgflip.com/43a45p.png', width: 937, height: 720},
                {id: '217743513', name: 'UNO Draw 25 Cards', url: 'https://i.imgflip.com/3lmzyx.jpg', width: 500, height: 494},
                {id: '129242436', name: 'Change My Mind', url: 'https://i.imgflip.com/24y43o.jpg', width: 482, height: 361},
                {id: '131940431', name: "Gru's Plan", url: 'https://i.imgflip.com/26jxvz.jpg', width: 700, height: 449},
                {id: '222403160', name: 'Bernie I Am Once Again Asking For Your Support', url: 'https://i.imgflip.com/3oevdk.jpg', width: 750, height: 750},
                {id: '188390779', name: 'Woman Yelling At Cat', url: 'https://i.imgflip.com/345v97.jpg', width: 680, height: 438},
                {id: '93895088', name: 'Expanding Brain', url: 'https://i.imgflip.com/1jwhww.jpg', width: 857, height: 1202},
                {id: '438680', name: 'Batman Slapping Robin', url: 'https://i.imgflip.com/9ehk.jpg', width: 400, height: 387},
                {id: '4087833', name: 'Waiting Skeleton', url: 'https://i.imgflip.com/2fm6x.jpg', width: 298, height: 403},
            ],
            selectedMeme: {
                url: 'https://i.imgflip.com/30b1gx.jpg',
                size: {
                    width: 400,
                    height: 400
                }
            },
        }
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
        const newWidth = ((400 / parseInt(e.target.style.height) * parseInt(e.target.style.width)) + "px")
        if (this.state.selectedMeme.url !== e.target.src) {
            this.setState({selectedMeme: {
                url: e.target.src,
                size: {
                    width: newWidth,
                    height: 400
                }
            }})
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
                <img 
                    key={i} 
                    className='meme list-item' 
                    src={meme.url} 
                    alt="" 
                    style={{width: newWidth, height: 150}} 
                    onClick={this.onMemeClicked} />
            )
          })
    
        return (
            <div>
                <div className='selected-container'>
                    <img 
                        className='meme' 
                        src={this.state.selectedMeme.url} 
                        alt="selected meme" 
                        style={this.state.selectedMeme.size} />
                </div>
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
