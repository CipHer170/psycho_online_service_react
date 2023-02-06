// import React, { useState } from "react";
import data from "../data";
import BaseContainer from "../BaseContainer/BaseContainer";
import "./questions.scss";
import { useState } from "react";

function Questions() {
  const [show, setShow] = useState(false);
  return (
    <div className="questions">
      <BaseContainer>
        <div className="questions__container">
          <h1 className="questions__title">
            С какими запросами обращаются в <a href="/home">Point?</a>
          </h1>
          <div className="question">
            {data.map(({ title, page, image }) => {
              return (
                <div className="question__items">
                  <img src={image} alt="" />
                  <h3 className="question__items__title">{title}</h3>
                  <div className="question__items__page">
                    {page}
                    <button>{show ? "show more" : "show less"}</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="questions__buttons">
            <button className="questions__buttons_btn">
              Хочу решить свою ситуацию
            </button>
            <p className="questions__buttons_notes">
              *Первые 10 минут консультации бесплатно
            </p>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}

export default Questions;
