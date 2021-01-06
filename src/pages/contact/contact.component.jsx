import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

import {db} from '../../firebase/firebase';
import './contact.styles.scss';

const Contact = ({history}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    db.collection('contacts').add({
      name: name,
      email: email,
      message: message
    }).then(
      () => {
        alert("Thank you for your message. We'll get back to you shortly!")
        setLoading(false);
        history.push("/");
      }
    ).catch((error) => {
      alert(error.message);
      setLoading(false);
    });

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="contact-form"> 
      <div class="form-items">
        <div class="contact-heading">
          <span>PLEASE GET IN TOUCH WITH US</span>
        </div><br/>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
              <input 
                className="form-input" 
                placeholder="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="form-label">name</label>
            </div>
            <div class="form-group">
              <input 
                className="form-input" 
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label">email</label>
            </div>
                        
            <div className="form-group">
              <textarea 
                className="msg-box" 
                placeholder="type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div><br/>

            <div className="form-group">
              <button 
              className="butn"
              style={{ background: loading ? "#ccc" : "rgb(2,2, 110)"}}
              >Send Message</button>
            </div>
        </form>
      </div>
    </div>
    
  )
}

export default Contact
