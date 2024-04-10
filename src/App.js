
import './App.css';
import { ParticlesComponent } from './components/particles/Particle.jsx';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Skills } from './components/skills/Skills';
import { Porfolio } from './components/porfolio/Porfolio';
import { NavBar } from './components/navbar/Navbar';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <ParticlesComponent />
          </div>
           
          <NavBar />
          <div className="conteiner" >
            <section id="home">         <Home/>       </section>
            <section id="about" >       <About/>      </section>
            <section id="portfolio" >    <Porfolio/>   </section>
            <section id="skills" >      <Skills/>     </section>
            <section id="contact" >     <Contact/>    </section>
          </div>
    </div>
  );
}

export default App;
