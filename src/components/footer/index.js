import "./index.css";
import siteImg from "../../assets/images/site-logo.svg";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-wrap">
        <ul className="footer-list">
          <li className="footer-item">
            <img src={siteImg} alt="" />
          </li>
          <li className="footer-item">Услуги</li>
          <li className="footer-item">Проекты</li>
          <li className="footer-item">О нас</li>
          <li className="footer-item">Контакты </li>
        </ul>
        <p>© 2024 7UNIT</p>
      </div>
    </div>
  );
};

export default Footer;
