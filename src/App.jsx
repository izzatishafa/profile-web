import './App.css';
import Contact from './sections/contact/Contact.jsx';
import Footer from './sections/footer/Footer.jsx';
import Hero from './sections/hero/Hero.jsx';
import Projects from './sections/projects/Projects.jsx';
import Skills from './sections/skills/Skills.jsx';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;