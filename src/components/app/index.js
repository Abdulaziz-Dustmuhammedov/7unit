import "./index.css";

import Header from "../header";
import AboutUs from "../aboutUs";
import Priority from "../priority";
import Brands from "../brands";

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
    </div>
  );
};

export default App;
