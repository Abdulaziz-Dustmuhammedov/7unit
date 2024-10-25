import "./index.css";

import Header from "../header";
import AboutUs from "../aboutUs";
import Priority from "../priority";
import Brands from "../brands";
import OurWork from "../ourWork";
import OurService from "../ourServices";
import Discussion from "../discussion";
import Footer from "../footer";
import Marquee from "../marquee";
import MobileHeader from "../mobile-header";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Priority />
      </div>
      <div>
        <Brands />
      </div>
      <div>
        <OurWork />
      </div>
      <div>
        <OurService />
      </div>
      `
      <div>
        <Discussion />
      </div>
      `
      <div>
        <Footer />
      </div>
      {/* <div>
        <Marquee />
      </div> */}
      {/* <div>
        <MobileHeader />
      </div> */}
    </div>
  );
};

export default App;
