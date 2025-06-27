import React, { useEffect } from 'react';
import "./Abus.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const startYear = 2021; 
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear; 

  return (
    <div className='abmain' id='aboutus'>
      <h2 className='abhead' data-aos='fade-up'>
        About Us
      </h2>
      <div className="absplit">
        <div className='abhalf' data-aos='fade-up'>
          <img alt="Coder GIF" className='abpic' src="https://physicsgurukul.files.wordpress.com/2019/02/character-1.gif" />
        </div>
        <div className="rshalf" data-aos='fade-up'>
          <h3>
            ❝ My name is Kamlesh Kumar, a passionate Full-Stack developer with {experienceYears}+ years of experience using Angular, React, and .NET Framework. I have a keen interest in learning new technologies and solving complex problems in web development. I thrive in collaborative environments and bring a detail-oriented approach to my work, ensuring high-quality results. I'm committed to creating user-friendly experiences and staying updated with the latest trends in technology. I look forward to contributing my skills and enthusiasm to exciting web development projects. ❞
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
