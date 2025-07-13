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
import WhyChooseUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Services from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative">
          <StarsCanvas />

          <Navbar />
          <Hero />
        </div>
        <FloatingTechBanner />
        <WhyChooseUs />
        <Services />
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
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
