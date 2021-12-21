import React from 'react'
import '../styles/Header.css'

function Header({ title, buttonText, clickEvent }) {
    return (
        <div className='Header'>
            <button onClick={clickEvent}>{buttonText}</button>
            <div className='title'>{title}</div>
        </div>
    )
}

export default Header