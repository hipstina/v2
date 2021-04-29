import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/Nav.css'

const Nav = () => {
  return (
    <nav className="nav__wrapper">
      <NavLink exact to="/" className="nav__home">
        ▩
      </NavLink>
      <div className="nav__pages">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Nav
