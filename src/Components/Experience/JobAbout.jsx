import React, { useEffect } from 'react';
import './Jobs.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import pdd from '../../assets/Kamlesh_FullStackDeveloper.pdf';

const JobAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdd;
    link.download = 'Kamlesh_FullStackDeveloper.pdf'; // Updated file name for clarity
    document.body.appendChild(link); // Append link to the body
    link.click();
    document.body.removeChild(link); // Remove link after clicking
  };

  return (
    <div id='experience' className='jobmain'>
      <div className='exp' data-aos='fade-up'>Experience</div>
      <div className='exsplit'>
        <div className='wfull'>
          <img 
            src='https://miro.medium.com/v2/resize:fit:850/1*zVnWJtyGOX_kUIDm6ccCfQ.gif' 
            alt='Animation' 
          />
        </div>
        <div className="expshow" data-aos='fade-up'>
          <div className='cdet'>
            <div className="circ"></div>
            <div className="cnam">
              <a href='https://techfeature.in/' target='_blank' rel='noopener noreferrer'>Tech Features</a>
            </div>
          </div>
          <div className='info'>
            <ul>
              <li>
                <strong><u><a href='https://tfm.techfeature.in/' target='_blank' rel='noopener noreferrer'>Tech Feature Management System</a>:</u></strong> Developed a distributed system for maintaining employee details and workflow processes.
                <ul>
                  <li>Implemented time and attendance management, absence and leave management, and an employee self-service portal.</li>
                  <li><strong><u>Technologies:</u></strong> .NET Core 3.1, Angular 11, and SQL Server 2019.</li>
                </ul>
              </li><br></br>
              <li>
                <strong><u><a href='https://www.pahadidukan.com/#/home' target='_blank' rel='noopener noreferrer'>Pahadi Dukan</a>:</u></strong> Created an e-commerce application to promote pure pahadi organic products.
                <ul>
                  <li>Responsible for server-side coding, REST APIs, database architecture, SQL queries, and stored procedures.</li>
                  <li><strong><u>Technologies:</u></strong> .NET Core, Angular 11, Dapper ORM, AWS S3 bucket and payment gateway integration.</li>
                </ul><br></br>
              </li>
              <li>Experience with REST APIs, asynchronous programming (async/await), and structuring single-page applications.</li>
              <li>Proficient in custom pipes, lazy loading, and writing database stored procedures.</li>
            </ul>
            <button className="contactBtt" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbout;
