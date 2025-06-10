import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;