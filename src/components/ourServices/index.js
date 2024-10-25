import "./index.css";
import phoneImg from "../../assets/images/phone.png";
import redImg from "../../assets/images/red-img.png";
import redBackground from "../../assets/images/red-backgroung.png";

const OurService = () => {
  return (
    <div className="our-service">
      <div className="our-service-folder container">
        <div className="our-service-content">
          <span
            className="our-service-text"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Наши работы
          </span>
          <p
            className="our-service-title"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Качество в каждой детали
          </p>
        </div>
        <div className="letto-wrap">
          <img
            src={phoneImg}
            alt=""
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <div>
            <p
              className="letto-title"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              LETTO
            </p>
            <p
              className="letto-text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Letto — это инновационная платформа для аренды жилья в
              Узбекистане, аналог Airbnb, адаптированная под местные условия.
              Здесь пользователи могут легко размещать свои апартаменты или
              арендовать жилье, зная, что сервис выступает в качестве надежного
              гаранта безопасности транзакций. Letto обеспечивает уверенность в
              том, что ваши деньги в безопасности, а бронирование — прозрачно и
              защищено от мошенничества.
            </p>
          </div>
        </div>

        <div className="letto-wrap">
          <img
            src={redImg}
            alt=""
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          <div>
            <p
              className="letto-title"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Tripoasia{" "}
            </p>
            <p
              className="letto-text"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Tripoasia — это комплексное решение для авиакассы, объединяющее
              удобную админ панель для поиска авиабилетов, CRM-систему для
              управления клиентами и контроля доходов, а также инструмент для
              коммуникации с клиентами, включая интеграцию с Telegram. В проект
              также встроена CMS для управления контентом сайта, что позволяет
              легко обновлять информацию и поддерживать актуальность данных.
              Tripoasia помогает авиакассе эффективно вести бизнес, отслеживать
              финансовые результаты и обеспечивать качественное обслуживание
              клиентов в одном месте.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
