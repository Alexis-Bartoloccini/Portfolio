
import './App.css';
import { Particle } from './components/particles/Particle';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Skills } from './components/skills/Skills';
import { Porfolio } from './components/porfolio/Porfolio';
import { Navbar } from './components/navbar/Navbar';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      
       <div>
          <Particle/>
          <Navbar />
          </div>
        
          
          <div className="main-content">
            
            <section id="home">         <Home/>       </section>
            <section id="about" >       <About/>      </section>
            <section id="portfolio" >    <Porfolio/>   </section>
            <section id="skills" >      <Skills/>     </section>
            <section id="contact" >     <Contact/>    </section>
          </div>
       
    </>
  );
}

export default App;
