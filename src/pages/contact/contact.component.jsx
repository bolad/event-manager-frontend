import React from 'react'
import './contact.styles.scss';

const Contact = () => {
  return (
    <div className="contact-form"> 
      <div class="form-items">
        <div class="contact-heading">
          <span>PLEASE GET IN TOUCH WITH US</span>
        </div><br/>
      
        <div class="form-group">
          <input className="form-input" placeholder="name"/>
          <label className="form-label">name</label>
        </div>
        <div class="form-group">
          <input className="form-input" placeholder="email address"/>
          <label className="form-label">email</label>
        </div>
                    
        <div className="form-group">
          <textarea className="msg-box" placeholder="Message"></textarea>
        </div><br/>

        <div className="form-group">
          <button className="butn">Send Message</button>
        </div>
      </div>
    </div>

     
    
    
    
  )
}

export default Contact
