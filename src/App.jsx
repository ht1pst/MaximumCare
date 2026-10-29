import SeoManager from "./SeoManager";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import PageLoader from "./PageLoader";
// HOMEPAGE COMPONENTS
import Hero from "./Home/Hero";
import Section2 from "./Home/Section2";
import Section3 from "./Home/Section3";
import Section4 from "./Home/Section4";
import Section5 from "./Home/Section5";
import Section6 from "./Home/Section6";
import Section7 from "./Home/Section7";
import Section8 from "./Home/Section8";
import Footer from "./Home/Footer";

// REQUEST QUOTE PAGE
import RequestQuote from "./Home/RequestQuote";

// SERVICES PAGE
import ServicesHero from "./Services/ServicesHero";
import ServicesSection2 from "./Services/ServicesSection2";
import ServicesSection3 from "./Services/ServicesSection3";
import ServicesSection5 from "./Services/ServicesSection5";
import ServicesSection6 from "./Services/ServicesSection6";
import ServicesSection4 from "./Services/ServicesSection4";

// ABOUT PAGE
import AboutHero from "./About/AboutHero";
import AboutSection2 from "./About/AboutSection2";
import AboutSection3 from "./About/AboutSection3";
import AboutSection4 from "./About/AboutSection4";
import AboutSection5 from "./About/AboutSection5";
import AboutSection6 from "./About/AboutSection6";
import AboutSection7 from "./About/AboutSection7";

// SERVICE AREAS PAGE
import AreasHero from "./Areas/AreasHero";
import AreasSection2 from "./Areas/AreasSection2";
import AreasSection3 from "./Areas/AreasSection3";
import AreasSection4 from "./Areas/AreasSection4";
import AreasSection5 from "./Areas/AreasSection5";
import AreasSection6 from "./Areas/AreasSection6";

// CONTACT PAGE
import ContactHero from "./Contact/ContactHero";
import ContactSection2 from "./Contact/ContactSection2";
import ContactSection3 from "./Contact/ContactSection3";
import ContactSection4 from "./Contact/ContactSection4";


import PrivacyPolicy from "./PrivacyPolicy";
function App() {
  return (
    <Router>
      {/* Automatically scroll to top when switching pages */}
      <ScrollToTop />
      <PageLoader />
 <SeoManager />


      <main>
        <Routes>
          {/* HOMEPAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Section2 />
                <Section3 />
                 <Section5 />
                 <Section7 />
                <Section8 />
                <Footer />
              </>
            }
          />

          {/* REQUEST A QUOTE PAGE */}
          <Route
            path="/request-quote"
            element={
              <>
                <RequestQuote />
                <Footer />
              </>
            }
          />

          {/* SERVICES PAGE */}
          <Route
            path="/services"
            element={
              <>
                <ServicesHero />
                <ServicesSection2 />
                <ServicesSection3 />
                <ServicesSection4 />
                
                  <Section6 />
                <ServicesSection6 />
                <Footer />
              </>
            }
          />

          {/* ABOUT US PAGE */}
          <Route
            path="/about"
            element={
              <>
                <AboutHero />
                <AboutSection2 />
                <AboutSection3 />
                <AboutSection4 />
                <Footer />
              </>
            }
          />

          {/* SERVICE AREAS PAGE */}
          <Route
            path="/service-areas"
            element={
              <>
                <AreasHero />
                <AreasSection2 />
                <AreasSection3 />
                
                <Footer />
              </>
            }
          />

          {/* CONTACT PAGE */}
          <Route
            path="/contact"
            element={
              <>
                <ContactHero />
                <ContactSection2 />
                <ContactSection3 />
                   <Footer />
              </>
            }
          />

<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

        </Routes>
      </main>
    </Router>
  );
}

export default App;
