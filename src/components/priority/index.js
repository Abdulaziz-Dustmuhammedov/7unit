import AOS from "aos"; // AOS kutubxonasini import qilish
import "aos/dist/aos.css"; // AOS CSS ni import qilish

import { useEffect } from "react";
import "./index.css";

const PriorityCard = ({ title, descrition, delay }) => {
  return (
    <li className="priority-item" data-aos="fade-left" data-aos-delay={delay}>
      <strong>{title}</strong>
      <p>{descrition}</p>
    </li>
  );
};

const Priority = () => {
  return (
    <div className="priorty-section" id="priorty">
      <div className="container">
        <div className="priorty-folder ">
          <div className="priorty-wrap">
            <span className="priorty-about " data-aos="fade-down">
              Что мы делаем
            </span>
            <p className="priorty-title " data-aos="fade-down">
              <span className="priorty-span">Мы не просто берем заказы.</span>
              <br /> Мы погружаемся в суть <br /> вашего продукта.
            </p>
          </div>
        </div>
        <ul className="priority-list">
          <PriorityCard
            delay={200}
            title="Разработка сайтов разной сложности"
            descrition={`Создаем сайты, которые решают бизнес-задачи. Мы разрабатываем
              сайты любой сложности — от лендингов до корпоративных порталов и
              интернет-магазинов. Ваша идея воплотится в функциональный и
              стильный сайт, адаптированный под все устройства.`}
          />
          <PriorityCard
            delay={800}
            title="Техническая поддержка"
            descrition={`Ваш сайт в надежных руках.Мы обеспечиваем непрерывную работу
            вашего сайта, оперативно решая любые технические вопросы. Наши
            специалисты готовы помочь в любое время, чтобы ваш бизнес работал
            без перебоев.`}
          />

          <PriorityCard
            delay={1400}
            title="Разработка админ панелей и личных кабинетов"
            descrition={`Управляйте данными легко и удобно.Создаем удобные админ панели и
            личные кабинеты для управления контентом, пользователями и
            данными. Мы разрабатываем интерфейсы, которые упрощают работу и
            повышают эффективность вашего бизнеса.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Priority;
