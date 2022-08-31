import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-container'>
        <div className='row'>
          <div className=' col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
               <div className='social-media-icons'>
                        <a href='https://github.com/MaeBK'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='Github Link' width='50px'/></a>
                </div>

                <div className='social-media-icons'>
                        <a href='https://www.linkedin.com/in/maeghanbk/'><img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png" alt='Linknedin Link' width='50px'/></a>
                </div>

                <div className='social-media-icons'>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=new'><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" alt='Email Me Link' width='50px'/></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer