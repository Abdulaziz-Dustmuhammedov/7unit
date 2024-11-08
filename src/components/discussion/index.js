import "./index.css";
import empty from "../../assets/images/empty.png";
import InputMask from "react-input-mask";
import DoneForm from "../done-from";

const Discussion = ({ onSubmit, isSubmitted }) => {
  return (
    <div className="discussion-section" id="form">
      <div className="discussion-folder">
        <img
          src={empty}
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        {isSubmitted ? (
          <DoneForm onSubmit={onSubmit} />
        ) : (
          <MaskedInputForm onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default Discussion;

const MaskedInputForm = ({ onSubmit }) => {
  return (
    <div>
      <div
        className="discussion-wrap"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <p className="discussion-title">Обсудим ваш проект?</p>
        <p className="discussion-text">
          Заполните краткую информацию и мы <br />
          свяжемся с Вами в течении 1 рабочего дня
        </p>

        <form className="discussion-form" action="" onSubmit={onSubmit}>
          <label className="discussion-label" htmlFor="">
            <span>Имя</span>
            <input
              className="discussion-input"
              type="text"
              placeholder="Имя пользователя"
              required
              // onChange={(e)=>{}}
            />
          </label>
          <label className="discussion-label" htmlFor="">
            <span>Название компании</span>
            <input
              className="discussion-input"
              type="text"
              placeholder="Название компании"
              required
            />
          </label>
          <label className="discussion-label" htmlFor="">
            <InputMask
              className="discussion-input"
              mask="+\9\98 (99) 999-99-99"
              placeholder="+998   (00) 000 - 00 - 00"
              id="phone"
              type="text"
              required
            />
          </label>
          <label className="discussion-label" htmlFor="">
            <span>Пару слов чем можем помочь</span>
            <textarea
              className="discussion-input textarea"
              type="text"
              placeholder="Оставьте нам сообщение..."
              required
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};
