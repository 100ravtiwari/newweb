import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Landing/Home';
import Aboutus from './Abo/Aboutus';
import JobAbout from './Experience/JobAbout';
import Skills from './Skill/Skills';
import Contact from './ContactUS/Contact';
import Nav from './Navbar/Nav';

const Routerr = () => {
    return (
        <div>

            <Nav />
            <Routes>
 
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<Aboutus />} />
                <Route path='/experience' element={<JobAbout />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Routerr
