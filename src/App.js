import React from "react";
import './index.css'; // Global Styles
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import SliderComponent from "./components/Slide_Component";
import Discover from "./components/Discover";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services"; // Ensure this is correct
import Careers from "./components/Careers";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";
import Banking from "./components/Banking";
import Communicationsmedia from './components/CommunicationMedia'; // Correct import (case-sensitive)
import Education from "./components/Education";
// import HighTech from "./components/Hitech";
import LifeSciences from "./components/LifeSciences";
import PublicServices from "./components/PublicServices";
import CapitalMarkets from "./components/CapitalMarkets";
import ConsumerGoods from "./components/ConsumerGoods";
import Healthcare from "./components/HealthCare";
import ArtificialIntelligence from "./components/ActServices/ArtificialIntelligence";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* Add padding to ensure content is below navbar */}
        <Routes>
          <Route path="/" element={
            <>
              <SliderComponent />
              <Discover />
              <Services />
              <Products />
              <Spotlight />
              <Footer />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/communicationsmedia" element={<Communicationsmedia />} /> {/* Fixed */}
          <Route path="/education" element={<Education />} />
          {/* <Route path="/hitech" element={<HighTech />} /> */}
          <Route path="/lifesciences" element={<LifeSciences />} />
          <Route path="/public-services" element={<PublicServices />} />
          <Route path="/capital-markets" element={<CapitalMarkets />} />
          <Route path="/consumer-goods" element={<ConsumerGoods />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
