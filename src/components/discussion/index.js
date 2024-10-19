import "./index.css";
import empty from "../../assets/images/empty.png";

const Discussion = () => {
  return (
    <div className="discussion-section">
      <div className="discussion-folder">
        <img src={empty} alt="" />
        <div className="discussion-wrap">
          <p className="discussion-title">Обсудим ваш проект?</p>
          <p className="discussion-text">
            Заполните краткую информацию и мы <br />
            свяжемся с Вами в течении 1 рабочего дня
          </p>
          <form className="discussion-form" action="">
            <label className="discussion-label" htmlFor="">
              <span>Имя</span> <br />
              <input
                className="discussion-input"
                type="text"
                placeholder="Имя пользователя"
              />
            </label>
            <label className="discussion-label" htmlFor="">
              <span>Название компании</span>
              <input
                className="discussion-input"
                type="text"
                placeholder="Название компании"
              />
            </label>
            <label className="discussion-label" htmlFor="">
              <span>Номер телефона</span>
              <input
                className="discussion-input"
                type="text"
                placeholder="+998   (00) 000 - 00 - 00"
              />
            </label>
            <label className="discussion-label" htmlFor="">
              <span>Пару слов чем можем помочь</span>
              <textarea
                className="discussion-input"
                type="text"
                placeholder="Оставьте нам сообщение..."
              />
            </label>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
