import React from 'react'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'

const Projects = () => {
    

  return (
    <div className="project-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Previous Projects</h1>
            <div className="image-box-wrapper">
                <div className="project-img-box" >
                    <img className="project-img" src="https://cdn.discordapp.com/attachments/923491339818131456/1014377206706880542/unknown.png" alt="HopeHacks" width='25%'/>
                    <div className='overflow'>
                        <a href='https://hopehacks-v1.herokuapp.com'>Site</a>
                    </div>
                </div>
            
                <div className="project-img-box">
                    <img className="project-img" src="https://cdn.discordapp.com/attachments/923491339818131456/1014378017105125468/unknown.png" alt=" PennyJuice Remake" width='25%'/>
                    <div className='overflow'>
                    <a href='https://main-working.digong0psevux.amplifyapp.com/Home'>Site</a>
                    </div>
                </div>
           
                <div className="project-img-box">
                    <img className="project-img" src="https://cdn.discordapp.com/attachments/923491339818131456/1014378492659507241/unknown.png" alt="Ecommerce: Rocket Arcade" width='25%'/>
                    <div className='overflow'>
                    <a href='https://630ef193a51b21529329fc7c--mae-rocket-arcade.netlify.app/'>Site</a>
                    </div>
                </div>
            
                <div className="project-img-box">
                    <img className="project-img" src="https://cdn.discordapp.com/attachments/923491339818131456/1014378942297276446/unknown.png" alt="Humble Beginnings" width='25%'/>
                    <div className='overflow'>
                    <a href='https://630ef14814c7c84fc9fb2d66--mae-gateway.netlify.app/'>Site</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects