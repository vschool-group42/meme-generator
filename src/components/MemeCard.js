import React from 'react'
import '../styles/MemeCard.css'

function MemeCard({ memeObj, constHeight }) {

    const {url, topText, bottomText, height, width} = memeObj
    const newWidth = constHeight / height * width
    return (
        <div className='MemeCard' onClick={null} style={{height: constHeight, width: newWidth}}>
            <img 
                className='meme' 
                src={url} 
                style={{width: '100%', height: '100%'}}
                alt="selected meme" />
                
            <div className="meme-text">{topText}</div>
            <div className="meme-text">{bottomText}</div>
        </div>
    )
}

export default MemeCard