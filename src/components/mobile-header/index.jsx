import { useState } from "react";
import "./index.css";

export default function MobileHeader({ onClose }) {
  const [isFixed, setIsFixed] = useState(true);

  return (
    <>
      {isFixed && (
        <div className="mobile header-wrap container">
          <div className="pages">
            <nav className="navbar ">
              <ul className="pages-list">
                <li>
                  <a href="#priorty" className="pages-link" onClick={onClose}>
                    Услуги
                  </a>
                </li>

                <li>
                  <a
                    href="#our-service"
                    className="pages-link"
                    onClick={onClose}
                  >
                    Проекты
                  </a>
                </li>
                <li>
                  <a href="#our-work" className="pages-link" onClick={onClose}>
                    О нас
                  </a>
                </li>
                <li>
                  <a href="/" className="pages-link" onClick={onClose}>
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button className="cost">Связаться с нами</button>
        </div>
      )}
    </>
  );
}
