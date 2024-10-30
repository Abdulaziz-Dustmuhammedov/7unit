import { useState } from "react";
import "./index.css";

export default function MobileHeader() {
  const [isFixed, setIsFixed] = useState(true);

  const handleLinkClick = () => {
    setIsFixed(false);
  };
  return (
    <>
      {isFixed && (
        <div className="mobile header-wrap container">
          <div className="pages">
            <nav className="navbar ">
              <ul className="pages-list">
                <li>
                  <a
                    href="#priorty"
                    className="pages-link"
                    onClick={handleLinkClick}
                  >
                    Услуги
                  </a>
                </li>

                <li>
                  <a
                    href="#our-service"
                    className="pages-link"
                    onClick={handleLinkClick}
                  >
                    Проекты
                  </a>
                </li>
                <li>
                  <a
                    href="#our-work"
                    className="pages-link"
                    onClick={handleLinkClick}
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a href="/" className="pages-link" onClick={handleLinkClick}>
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button className="cost">Узнать стоимость</button>
        </div>
      )}
    </>
  );
}
