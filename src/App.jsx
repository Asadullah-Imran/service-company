import "./App.css";
import About from "./Compnents/about/About";
import Contact from "./Compnents/contact/Contact";
import Hero from "./Compnents/hero/Hero";
import Service from "./Compnents/service/Service";
import Testimonial from "./Compnents/testimonial/Testimonial";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
