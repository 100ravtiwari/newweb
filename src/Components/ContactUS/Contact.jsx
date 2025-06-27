import React from 'react'
import './Cont.css';
import imgct from '../../assets/cont.jpg';
import conbgf from '../../assets/CTM.gif';

import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaFacebookF } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='conmain' id='contact'>
      <div className='conc'>Contact Us</div>
      <div className="splitcont">
        <div className="conimg">
          <div className='conusimg'>
            <img className='conbtnn' src={imgct} />

          </div>

          <div className='soicon'>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <a href="https://www.linkedin.com/in/kamlesh-kumar-546745258" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/kamleshkalm" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="conpag">
          <div className="formpg">
            <h2 className='hdd'>Let's Connect</h2>
            <p>Name</p>
            <input type='text' placeholder='Enter Your Name' />
            <p>Email</p>
            <input type='mail' placeholder='Enter Your Email' />
            <p>Mobile No.</p>
            <input type='number' placeholder='Enter Your Number' />
            <p>Message</p>
            <textarea id="message" name="message" rows="4" cols="44"></textarea>
            <button className='sbform' disabled={true}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
