import React from 'react'

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
        <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar