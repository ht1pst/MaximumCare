
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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

function App() {
  return (
    <Router>
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
                <Section4 />
                <Section5 />
                <Section6 />
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
