import React from "react"
import reactLogo from '../assets/react-icon-small.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <img src={reactLogo} id='react-logo'/>
                <h1>React Facts</h1>
            </div>
            <div className='navbar-right'>
                <h3>React Course - Project 1</h3>
            </div>
        </nav>
    )
}