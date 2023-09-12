import "./App.css";
import About from "./Compnents/about/About";
import Contact from "./Compnents/contact/Contact";
import Footer from "./Compnents/footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
