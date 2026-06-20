import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/ui/LoadingScreen';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Profiles from './components/sections/Profiles';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-500 text-gray-900 dark:text-white transition-colors duration-300">
        <LoadingScreen />
        <Navbar />
        <main>
          <Hero />
          <About />
          <div className="bg-white dark:bg-dark-300">
            <Skills />
          </div>
          <Projects />
          <div className="bg-white dark:bg-dark-300">
            <Experience />
          </div>
          <Certifications />
          <Achievements />
          <div className="bg-white dark:bg-dark-300">
            <Profiles />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
