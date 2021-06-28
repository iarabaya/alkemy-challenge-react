import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar({logOut}) {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                        <h1 className="navbar-brand">My Superhero App - Alkemy Challenge</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item btn btn-sm btn-outline-info m-1">
                            <Link className="nav-link active" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item btn btn-sm btn-outline-danger m-1">
                            <button className="btn text-white" type="button" onClick={logOut}>Log out</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}
