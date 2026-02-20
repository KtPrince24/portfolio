// import './styles/global.css';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Education />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
import './styles/global.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import FadeInSection from "./components/FadeInSection";


function App() {
  return (
    <>
      <Navbar />

      <FadeInSection>
      <Hero />
      </FadeInSection>

      <FadeInSection>
      <About />
      </FadeInSection>

      <FadeInSection>
      <Education />
      </FadeInSection>

      <FadeInSection>
      <Skills />
      </FadeInSection>

      <FadeInSection>
      <Experience />
      </FadeInSection>

      <FadeInSection>
      <Projects />
      </FadeInSection>
      
      <FadeInSection>
      <Contact />
      </FadeInSection>
    </>
  );
}

export default App;

