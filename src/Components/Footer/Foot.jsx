import React from 'react'
import './Fut.css';
import { FaLocationArrow, FaMailBulk, FaMailchimp, FaMapMarked, FaMobile, FaMobileAlt, FaPhone, FaPhoneAlt, FaVoicemail } from 'react-icons/fa';
import { FaLocationCrosshairs, FaLocationDot, FaMapLocation, FaMobileButton } from 'react-icons/fa6';

const Foot = () => {
  return (
    <div className='botm'>
      <div className='connectme'>
        <a href="kamleshkalm982@outlook.com">
          <FaMailBulk />
        </a>
        <h3>kamleshkalm982@outlook.com</h3>
      </div>
      <div className='connectme'>
        <FaPhoneAlt />
        <h3>+91  9720576152</h3>
      </div>
      <div className='connectme'>
        <FaLocationDot />
        <h3>New Delhi ( INDIA )</h3>
      </div>


    </div>
  )
}

export default Foot
