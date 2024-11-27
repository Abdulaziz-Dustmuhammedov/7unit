import "./index.css";

import MessageImg from "../../assets/icons/Message icon.svg";
import LocationImg from "../../assets/icons/location-icon.svg";
import TelephneImg from "../../assets/icons/telephone-icon.svg";

const Contact = () => {
  return (
    <div
      className="contact-section container  mb-24 md:mb-28 lg:mb-36 px-3"
      id="contact"
    >
      <div className="contact-wrap">
        <ul className="contact-list">
          <li className="contact-item">
            <img
              className="contact-img"
              src={MessageImg}
              alt=""
              width={48}
              height={48}
            />
            <strong className="contact-strong text-lg sm:text-xl">Email</strong>
            <p className="mb-3">Наша команда здесь, чтобы помочь вам.</p>
            <a className="contact-link" href="https://www.7unit.uz">
              {/* buyoda supportni linki bo'lishi kerak edi */}
              support@7units.com
            </a>
          </li>
          <li className="contact-item">
            <img
              className="contact-img"
              src={LocationImg}
              alt=""
              width={48}
              height={48}
            />
            <strong className="contact-strong text-lg sm:text-xl">
              Приходите к нам
            </strong>
            <p className="mb-3">Посетите наш офис.</p>
            <p className="contact-link">
              г. Ташкент, Шайхантахурский район, <br />
              улица Куш Кунди, 8а
            </p>
          </li>

          <li className="contact-item">
            <img
              className="contact-img"
              src={TelephneImg}
              alt=""
              width={48}
              height={48}
            />
            <strong className="contact-strong text-lg sm:text-xl">
              Позвоните нам
            </strong>
            <p className="mb-3">С понедельника по пятницу с 08:00 до 17:00</p>
            <a className="contact-link" href="tel:+1 (555) 000-0000">
              +1 (555) 000-0000
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
