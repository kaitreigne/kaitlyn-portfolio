import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;