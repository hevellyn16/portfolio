import Navbar from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import ScrollToTop from "./components/ScrollToTop";
import About from "./sections/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />

      <ScrollToTop />
    </>
  )
}

export default App
