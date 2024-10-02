import "./index.css";
import nt from "../../assets/images/NT.png";
import safia from "../../assets/images/Safia.png";
import macBro from "../../assets/images/MacBro.png";
import thread from "../../assets/images/thread.png";

const Brands = () => {
  return (
    <div className="brands-section">
      <div className="brands-wrap">
        <p className="brands-text">
          Бренды c которыми <br /> работала наша команда
        </p>
        <div className="brands-images">
          <img className="" src={nt} alt="" />
          <img className="" src={safia} alt="" />
          <img className="" src={macBro} alt="" />
          <img className="" src={thread} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
