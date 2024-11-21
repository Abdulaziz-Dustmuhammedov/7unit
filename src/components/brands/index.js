import "./index.css";
import nt from "../../assets/images/NT.png";
import safia from "../../assets/images/Safia.png";
import macBro from "../../assets/images/MacBro.png";
import thread from "../../assets/images/thread.png";
import Marquee from "react-fast-marquee";
import orientFinansBank from "../../assets/images/orientfinansbank.png";
import AnorBank from "../../assets/images/anorbank.png";
import MaxWay from "../../assets/images/maxWay.png";

// import macBroRes from "../../assets/images/MacBro [mini].png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Brands = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <div className="brands-section">
      <div className="brands-wrap">
        <p className="brands-text" data-aos="fade-down">
          Бренды c которыми <br /> работала наша команда
        </p>
        <Marquee
          className="brands-images-list"
          speed={65}
          pauseOnHover={true}
          autoFill={true}
        >
          <img
            className="brands-images orientFinansBank"
            src={orientFinansBank}
            alt="orientFinansBank Brand"
            // width={461}
          />
          <img className="brands-images NajotTalim" src={nt} alt="NT Brand" />
          <img className="brands-images Safia" src={safia} alt="Safia Brand" />
          <img
            className="brands-images MacBro"
            src={macBro}
            alt="MacBro Brand"
          />
          <img
            className="brands-images Thread"
            src={thread}
            alt="Thread Brand"
          />
          <img
            className="brands-images AnorBank"
            src={AnorBank}
            alt="Anorbank Brand"
            // width={331}
          />
          <img className="brands-images MaxWay" src={MaxWay} alt="MaxWay" />
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
