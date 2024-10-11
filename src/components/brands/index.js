// import "./index.css";
// import nt from "../../assets/images/NT.png";
// import safia from "../../assets/images/Safia.png";
// import macBro from "../../assets/images/MacBro.png";
// import thread from "../../assets/images/thread.png";
// import Marquee from "../marquee";

// const Brands = () => {
//   return (
//     <div className="brands-section">
//       <div className="brands-wrap">
//         <p className="brands-text">
//           Бренды c которыми <br /> работала наша команда
//         </p>
//         <marquee
//           className="brands-images-list"
//           autoFill={true}
//           speed={100}
//           gradient={true}
//           gradientColor="red"
//           play={false}
//           pauseOnHover={true}
//         >
//           <img className="brands-images" src={nt} alt="" />
//           <img className="brands-images" src={safia} alt="" />
//           <img className="brands-images" src={macBro} alt="" />
//           <img className="brands-images" src={thread} alt="" />
//         </marquee>
//       </div>
//     </div>
//   );
// };

// export default Brands;

import "./index.css";
import nt from "../../assets/images/NT.png";
import safia from "../../assets/images/Safia.png";
import macBro from "../../assets/images/MacBro.png";
import thread from "../../assets/images/thread.png";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="brands-section">
      <div className="brands-wrap">
        <p className="brands-text">
          Бренды c которыми <br /> работала наша команда
        </p>
        <Marquee
          className="brands-images-list"
          speed={100}
          gradient={true}
          gradientColor={[255, 0, 0]}
          pauseOnHover={true}
          autoFill={true}
        >
          <img className="brands-images" src={nt} alt="NT Brand" />
          <img className="brands-images" src={safia} alt="Safia Brand" />
          <img className="brands-images" src={macBro} alt="MacBro Brand" />
          <img className="brands-images" src={thread} alt="Thread Brand" />
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
