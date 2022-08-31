import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
  <a className="navbar-brand" href="#"><img src='https://cdn.discordapp.com/attachments/1002353585604014091/1014234765731299348/logo3.png' alt='MaesLogo' width='125px'/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#">Home<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="projects" className="nav-link" href="#">Projects</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contact" className="nav-link" href="#">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar