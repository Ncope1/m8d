import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-shadow navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Album Reviews</Link>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="is-active" to="/create" className="btn btn-outline-dark">Create New</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
