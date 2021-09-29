import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { handleLogout } = props
  return (
    <div className="navbar is-flex is-justify-content-space-between 
    is-fixed-top has-background-info-light has-shadow">
      <div className="navbar-brand ">
        <h1 className="title mt-3 ml-5">TASX</h1>
      </div>
      <div className="navbar-link mr-5">
       <Link to="/login">
        Login
      </Link>
      <Link to="/login" onClick={handleLogout}>
        Logout
        </Link>
      </div>
    </div>
  )
}
