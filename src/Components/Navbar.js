import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MyNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " style={{color:'white'}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:'white'}} to="/Linkbout">About</Link>
        </li>
                <li className="nav-item dropdown"> 
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{color:'white'}} aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu bg-dark">
        <li className="nav-item" >
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </li>        
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>        
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>        
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
          
          </ul>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar