import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import FloatingTechBanner from "./components/Banner";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />

        <div className="relative">
          <Navbar />
          <Hero />
        </div>
        <FloatingTechBanner />
        {/* <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />

          <StarsCanvas />
          <Footer />
        </div> */}

        <div className="relative z-0">
          <Contact />

          {/* <StarsCanvas /> */}
          {/*  <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
