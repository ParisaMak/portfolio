import React, { useRef, useState } from 'react';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import MarqueeMenu from './components/marquee menu/marqueeMenu.jsx'
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const bioRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="box-border  border-8 border-black scroll-smooth w-full">
      <div 
      className="sticky grid grid-cols-5 right-0 top-0 w-full h-[50px] text-white bg-black border-b-4 border-white z-20  ">
            <div className="col-start-5">
            <button
             type="button"
             className="col-start-1 col-span-5  w-full h-full cursor-pointer text-center"
             onClick={() => setIsOpen(!isOpen)}
           >
             Menu
           </button>
           </div>
             
        {isOpen && (
          <div className="text-white absolute col-start-5 w-full text-center top-[50px] py-2 bg-black z-20 cursor-pointer">
            <ul>
              <li className="py-5 hover:bg-white hover:text-black"  onClick={() => scrollToSection(bioRef)} >
                Bio
              </li>
              <li onClick={() => scrollToSection(journeyRef)} className="py-5 hover:bg-white hover:text-black">
                Journey
              </li>
              <li onClick={() => scrollToSection(projectsRef)} className="py-5 hover:bg-white hover:text-black">
                Projects
              </li>
              <li onClick={() => scrollToSection(contactRef)} className="py-5 hover:bg-white hover:text-black">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>

      <div ref={bioRef}>
        <Bio />
      </div>
      <div ref={journeyRef}>
        <Journey />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef} >
      <Contact />
      </div>
    </div>

  );
}

export default App;