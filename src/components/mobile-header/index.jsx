import "./index.css";
export default function MobileHeader() {
  return (
    <>
      <div className="mobile header-wrap container">
        <div className="pages">
          {/* <img src={logoIcon} alt="" /> */}
          <nav className="navbar ">
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
      </div>
    </>
  );
}
