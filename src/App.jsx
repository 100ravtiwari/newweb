import './App.module.css';
import Aboutus from './Components/Abo/Aboutus';
import Contact from './Components/ContactUS/Contact';
import JobAbout from './Components/Experience/JobAbout';
import Foot from './Components/Footer/Foot';
 import Home from './Components/Landing/Home';
 import Nav from './Components/Navbar/Nav';
import Skills from './Components/Skill/Skills';

function App() {
  // npm run dev
  return (
    <>
       <Nav/>
      <Home/> 
     <Aboutus/>
     <JobAbout/>
     <Skills/>
     <Contact/>
     <Foot/>
    </>
  )
}

export default App
