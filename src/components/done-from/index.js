import "./index.css";
import DoneImg from "../../assets/icons/Done-icon.svg";
import closeImg from "../../assets/icons/close-img.png";

const DoneForm = () => {
  return (
    <div className="done-section">
      <div className="done-folder">
        <div className="done-wrap">
          <img
            className="green-img"
            src={DoneImg}
            alt=""
            width={48}
            height={48}
          />
          <div className="done-inner-wrap">
            <div>
              <strong className="done-strong">
                Поздравляю! <br />
                Вы успешно оставили заявку
              </strong>
              <p className="done-text">
                Наша команда ближайшее время свяжется с вами
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoneForm;
