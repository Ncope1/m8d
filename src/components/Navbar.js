import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-shadow navbar-dark fixed-top bg-dark">
                    <Link to="/m8d/browse" className="navbar-brand">Album Reviews <i className="fas fa-comments"></i></Link>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="is-active" to="/m8d/browse" className="nav-link">Browse</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="is-active" to="/m8d/reviews" className="nav-link">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="is-active" to="/m8d/create" className="btn btn-light">Create Review</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
