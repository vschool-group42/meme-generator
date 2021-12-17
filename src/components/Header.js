import React from 'react'

function Header({ title, buttonText, clickEvent }) {
    return (
        <div className='Header' style={{position: 'relative', color: 'white', backgroundColor: '#4c6dcd', marginTop: 0, padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <button onClick={clickEvent} style={{left: 50, height: 40, position: 'absolute', backgroundColor: 'white', fontWeight: 'bold'}}>{buttonText}</button>
            <h2 style={{color: 'white'}}>{title}</h2>
        </div>
    )
}

export default Header
