import "./index.css";
import closeImg from "../../assets/icons/close-img.png";
import { useState } from "react";

const SuccessForm = ({ handleClose }) => {
  return (
    <div className="success-section">
      <div className="success-folder">
        <button className="success-btn" onClick={handleClose}>
          <img className="closeBtn" src={closeImg} alt="" />
        </button>
        <h3 className="success-title">Ваша заявка принята!</h3>
        <p className="success-text">
          {" "}
          Спасибо, ваш номер подтвержден. Наш менеджер свяжется с вами для
          консультации
        </p>
      </div>
    </div>
  );
};

export default SuccessForm;
