import "./index.css";

import MessageImg from "../../assets/icons/Message icon.svg";
import LocationImg from "../../assets/icons/location-icon.svg";
import TelephneImg from "../../assets/icons/telephone-icon.svg";

const Contact = () => {
  return (
    <div className="contact-section">
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
            <strong className="contact-strong">Email</strong>
            <p>Наша команда здесь, чтобы помочь вам.</p>
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
            <strong className="contact-strong">Приходите к нам</strong>
            <p>Посетите наш главный офис.</p>
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
            <strong className="contact-strong">Позвоните нам</strong>
            <p>Mon-Fri from 8am to 5pm.</p>
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
