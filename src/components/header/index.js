// import assets from
import "./index.css";
import logoIcon from "../../assets/icons/logo.svg";
import hamburgerMenu from "../../assets/images/hamburger-menu.png";
import closeImg from "../../assets/icons/close-img.png";

const Header = () => {
  return (
    <div className="header-main-wrap">
      <header className="site-header ">
        <div className="header-wrap container">
          <div className="pages">
            <img src={logoIcon} alt="" />
            <nav className="navbar">
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
            </nav>
          </div>
          <button className="cost">Узнать стоимость</button>
          <button className="burger-btn">
            <img
              className="hamburger-menu"
              src={hamburgerMenu}
              alt=""
              width={35}
              height={35}
            />
            <img
              className="close-img"
              src={closeImg}
              alt=""
              width={35}
              height={35}
            />
          </button>
        </div>
      </header>
    </div>
  );
};
export default Header;

const navbar = document.querySelector(".header-wrap");
const burgerBtn = document.querySelector(".burger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeImg = document.querySelector(".close-img");

burgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("block");
  closeImg.classList.toggle("block");
  hamburgerMenu.classList.toggle("none");
});
