import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




export default function Navbar(props) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-white bg-dark'>
  <div className="container-fluid">
 <Link className="navbar-brand" to="/">{props.title}</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
       <Link className="nav-link" to="/login">{props.login}</Link>
        </li>
       
      </ul>
 
    </div>
  </div>
</nav>

    </div>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired,
}

Navbar.defaultProps ={
    title: 'set title here',
    about: 'about text here',
}
