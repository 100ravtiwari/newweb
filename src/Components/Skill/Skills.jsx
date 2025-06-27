import React, { useEffect, useState } from 'react';
import './Ski.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [isProgrammingEnabled, setProgrammingEnabled] = useState(true);
  const [isProgrammingEnabledBE, setProgrammingEnabledBE] = useState(false);
  const [isProgrammingEnabledDB, setProgrammingEnabledDB] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleFeClick = () => {
    setProgrammingEnabled(true);
    setProgrammingEnabledBE(false);
    setProgrammingEnabledDB(false);
  };

  const handleBeClick = () => {
    setProgrammingEnabledBE(true);
    setProgrammingEnabled(false);
    setProgrammingEnabledDB(false);
  };

  const handleDBClick = () => {
    setProgrammingEnabledDB(true);
    setProgrammingEnabledBE(false);
    setProgrammingEnabled(false);
  };

  return (
    <div id='skill' className='skmain'>
      <div className='sky' data-aos='fade-up'>Skills</div>
      <div className="skillhead">
        <div 
          className='fe' 
          data-aos='fade-up' 
          onMouseEnter={handleFeClick} // Trigger on hover
        >
          Frontend
        </div>
        <div 
          className='be' 
          data-aos='fade-up' 
          onMouseEnter={handleBeClick} // Trigger on hover
        >
          Backend
        </div>
        <div 
          className='db' 
          data-aos='fade-up' 
          onMouseEnter={handleDBClick} // Trigger on hover
        >
          Database
        </div>
      </div>
      <div className={isProgrammingEnabled ? 'programming' : 'hidden'}>
        <div className='imgc' data-aos='fade-up'>
          <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
        </div>
        <div className='imgc' data-aos='fade-up'>
          <img className='js' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
        </div>
        <div className='imgc' data-aos='fade-up'>
          <img className='anjs' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg" alt="Angular" />
        </div>
        <div className='imgc' data-aos='fade-up'>
          <img className='react' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" />
        </div>
      </div>
      <div className={isProgrammingEnabledBE ? 'backprogramming' : 'hidden'}>
        <div className='imgc' data-aos='fade-up'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Core" />
        </div>
        <div className='imgc' data-aos='fade-up'>
          <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
        </div>
        <div className='imgc' data-aos='fade-up'>
          <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" />
        </div>
      </div>
      <div className={isProgrammingEnabledDB ? 'dbprogramming' : 'hidden'}>
        <div className='imgc' data-aos='fade-up'>
          <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg" alt="SQL Server" />
        </div>
        <div className='imgc' data-aos='fade-up'>
          <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
        </div>
        <div className='imgc' data-aos='fade-up'>
          <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" alt="SQLite" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
