import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">▩</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </nav>
  )
}

export default Nav
