import React, { useEffect } from 'react';
import "./Homi.css";
import imgh from '../../assets/imghome.jpg';
import myImage from '../../assets/imkj.jpg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import pdd from '../../assets/Kamlesh_FullStackDeveloper.pdf';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleDownloadpdf = () => {
    const link = document.createElement('a');
    link.href = pdd;
    link.download = 'Kamlesh_FullStackDeveloper.pdf';
    link.click();
  };

  const startYear = 2021; 
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  return (
    <div className='hommain' id='home'>
      <div className='optpg'></div>
      <div className="half">
        <h1 className='htitle' data-aos='fade-down'>Hi, I'm Kamlesh</h1>
        <p className='description' data-aos='fade-up'>
          I'm a seasoned Full Stack Developer with expertise in .NET Core, Angular, React, and MSSQL, backed by {experienceYears}+ years of hands-on experience. I also bring proficiency in React framework, including React and Nest.js.<br></br>Reach out if you'd like to know more!
        </p>
        <div className="contactBttpd" onClick={handleDownloadpdf}>
          Download CV
        </div>
      </div>
      <div className="ohalf">
        <img className='menubtnn' data-aos='fade-up' src={imgh} alt="Home" />
        <FloatingWhatsApp
          phoneNumber="919639532262"
          accountName="Kamlesh Kumar"
          statusMessage="replies within 1 hour"
          avatar={myImage}
          className="wp"
        />
      </div>
    </div>
  );
}

export default Home;
