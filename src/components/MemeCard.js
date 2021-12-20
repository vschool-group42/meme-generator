import React from 'react'
import '../styles/MemeCard.css'

function MemeCard({ memeObj, fixedHeight, onClick, uniqueClass, index }) {

    const {url, topText, bottomText, height, width} = memeObj
    const newWidth = fixedHeight / height * width
    return (
        <div className={uniqueClass ? `MemeCard ${uniqueClass}` : 'MemeCard'} onClick={(e) => onClick(e)} style={{height: fixedHeight, width: newWidth}}>
            <img 
                className='meme' 
                src={url} 
                id={index}
                alt="selected meme" />
                
            <div className="meme-text">{topText}</div>
            <div className="meme-text">{bottomText}</div>
        </div>
    )
}

export default MemeCard
