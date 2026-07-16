import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Owners from "./components/sections/Owners";
import Services from "./components/sections/Services";
import Reviews from "./components/sections/Reviews";
import FutureMedFlash from "./components/sections/FutureMedFlash";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import WhatsApp from "./components/layout/WhatsApp";
import SEO from "./components/SEO";
import IFood from "./components/layout/IFood";
import Map from "./components/sections/Map";
import Stats from "./components/sections/Stats";
import ReviewsPremium from "./components/sections/ReviewsPremium";
import MedFlash from "./components/layout/MedFlash";
import Inside from "./components/sections/Inside";


export default function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <Hero />
      <About />
<Inside />
      <Owners />
      <Services />
      <Reviews />
      <FutureMedFlash />
      <Contact />
      <Footer />
      <WhatsApp />
      <IFood />
      <Map />
      <Stats />



<ReviewsPremium />
<MedFlash />

    </>
  );
}
