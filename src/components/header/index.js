// import assets from
import "./index.css";
import logoIcon from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <div className="header-navbar">
      <div className="navbar">
        <div className="pages">
          <img src={logoIcon} alt="" />
          <ul className="pages-list">
            <li>
              <a href="/" className="pages-link">
                Услуги
              </a>
            </li>
            <li>
              <a href="/" className="pages-link">
                Проекты
              </a>
            </li>
            <li>
              <a href="/" className="pages-link">
                О нас
              </a>
            </li>
            <li>
              <a href="/" className="pages-link">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <button className="cost">Узнать стоимость</button>
      </div>
    </div>
  );
};
export default Header;
