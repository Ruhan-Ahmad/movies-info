import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-md 3">
                <div className="container-fluid">
                    <Link className="navbar-brand Text-white" to="/">MOVIES INFO</Link>
                </div>
            </nav>
    </header >
    )
}
