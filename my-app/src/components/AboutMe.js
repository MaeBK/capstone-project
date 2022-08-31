import React from 'react'
import maker from "../MeetMaePortfolio2.png"

const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div  className="col-lg-6 col-xm-12">
                <div className="photo-wrap">
                    <img className="mae-doodle" src='https://cdn.discordapp.com/attachments/1002353585604014091/1014236172739956837/MeetMaePortfolio2.png' alt="Mae Doodle" width='500px'/>
                </div>
            </div>
            <div  className="col-lg-6 col-xm-12">
                <h1 className="about-heading">Hello there!</h1>
                <p>
                    I'm Mae Keenan and over the past six months my cohort and I have been a part of a wonderful program called "Road to Hire", and thanks to it this portfolio can be made! 
                    We have learned how to work with HTML, CSS, JavaScript, Java, React, Node.js, and so much more. All of Cohort 10 is excited to be placed with our employee partners, and can't wait to get to work on our careers and paths ahead.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
