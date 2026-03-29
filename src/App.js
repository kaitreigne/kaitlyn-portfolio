import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;