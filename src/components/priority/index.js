import "./index.css";

const Priority = () => {
  return (
    <div className="priorty-section">
      <div className="container">
        <div className="priorty-folder ">
          <div className="priorty-wrap">
            <span className="priorty-about">Что мы делаем</span>
            <p className="priorty-title">
              <span className="priorty-span">Мы не просто берем заказы.</span>
              <br /> Мы погружаемся в суть <br /> вашего продукта.
            </p>
          </div>
        </div>
        <ul className="priority-list">
          <li className="priority-item">
            <strong>Разработка сайтов разной сложности</strong>
            <p>
              Создаем сайты, которые решают бизнес-задачи. Мы разрабатываем
              сайты любой сложности — от лендингов до корпоративных порталов и
              интернет-магазинов. Ваша идея воплотится в функциональный и
              стильный сайт, адаптированный под все устройства.
            </p>
          </li>
          <li className="priority-item">
            <strong>Техническая поддержка</strong>
            <p>
              Ваш сайт в надежных руках.Мы обеспечиваем непрерывную работу
              вашего сайта, оперативно решая любые технические вопросы. Наши
              специалисты готовы помочь в любое время, чтобы ваш бизнес работал
              без перебоев.
            </p>
          </li>
          <li className="priority-item">
            <strong>Разработка админ панелей и личных кабинетов</strong>
            <p>
              Управляйте данными легко и удобно.Создаем удобные админ панели и
              личные кабинеты для управления контентом, пользователями и
              данными. Мы разрабатываем интерфейсы, которые упрощают работу и
              повышают эффективность вашего бизнеса.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Priority;
