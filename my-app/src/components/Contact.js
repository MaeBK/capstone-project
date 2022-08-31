import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className="contacts">
        <div className ="text-center">
            <h1>Contact me</h1>
            <p>Leave your email and a little note! Love to hear from you!</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <input
                    id="name"
                    type="text"
                    className='form-control'
                    placeholder='Name (First and Last)'
                    />

                    <input
                    id= "phone"
                    type="text"
                    className='form-control'
                    placeholder='Phone Number (Optional)'
                    />

                    <input
                    id='email'
                    type="email"
                    className='form-control'
                    placeholder='Email'
                    />

                    <input
                    id='subject'
                    type="text"
                    className='form-control'
                    placeholder='Specific subject?'
                    />  
                </div>
                <div className='col-md-6 col-xs-12'>
                    <textarea
                    is='description'
                    type="text"
                        className='form-control'
                        placeholder='Notes go here!!'
                    ></textarea>
                    <button className="btn-main-offer contact-btn" type='submit'>Send It!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact