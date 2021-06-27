import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>My Superhero App - Alkemy Challenge</h1>
            <div className="Links">
                <Link to="/Home">Home</Link>
            </div>
         
        </nav>
    )
}
