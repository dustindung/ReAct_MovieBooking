import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="activeMenuItem" activeStyle={{ fontWeight: 'bold' }} to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="activeMenuItem" activeStyle={{ fontWeight: 'bold' }} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="activeMenuItem" activeStyle={{ fontWeight: 'bold' }} to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="activeMenuItem" activeStyle={{ fontWeight: 'bold' }} to="/hoc">HOC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="activeMenuItem" activeStyle={{ fontWeight: 'bold' }} to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}
