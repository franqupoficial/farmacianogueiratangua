import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Inside from "./components/sections/Inside";
import Owners from "./components/sections/Owners";
import Services from "./components/sections/Services";
import Reviews from "./components/sections/Reviews";
import FutureMedFlash from "./components/sections/FutureMedFlash";
import Map from "./components/sections/Map";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import WhatsApp from "./components/layout/WhatsApp";
import SEO from "./components/SEO";
import "./styles/site.css";

export default function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <main id="conteudo">
        <Hero />
        <About />
        <Stats />
        <Inside />
        <Owners />
        <Services />
        <Reviews />
        <FutureMedFlash />
        <Map />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
