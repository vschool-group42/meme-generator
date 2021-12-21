import React from 'react'
import '../styles/MemeCard.css'

function MemeCard({ memeObj, fixedHeight, onClick, uniqueClass, index, textSize}) {

    const {url, topText, bottomText, height, width} = memeObj
    const newWidth = fixedHeight / height * width
    return (
        <div 
            className={uniqueClass ? `MemeCard ${uniqueClass}` : 'MemeCard'} 
            onClick={(e) => onClick(e)} 
            style={{height: fixedHeight, width: newWidth}}>
            <img 
                className='meme' 
                src={url} 
                id={index}
                alt="" />
                
            <div className="meme-text" style={{fontSize: textSize}}>{topText}</div>
            <div className="meme-text"style={{fontSize: textSize}}>{bottomText}</div>
        </div>
    )
}

MemeCard.defaultProps = {
    textSize: 30
}

export default MemeCard
