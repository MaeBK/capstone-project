import React from 'react';
import Typed from "react-typed";
const Header = () => {
  return (
    <div id='home' className="header-wrapper">
        <div className="main-info">
            <h1>Mae Keenan's Portfolio</h1>
            <Typed
                className="typed-text"
                strings={["UI/UX Designer", "Full Stack Developer", "Artist", "Apprentice"]}
                typeSpeed={40}
                backSpeed={55}
                loop
            />
            <a href='#' className='btn-main-offer'>Contact Me</a>
        </div>
    </div>
  )
}

export default Header