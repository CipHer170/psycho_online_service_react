// import React, { useState } from "react";
import data from "../data";

import BaseContainer from "../BaseContainer/BaseContainer";
import Question from "./Question";
import "./questions.scss";

function Questions() {
  return (
    <div className="questions">
      <BaseContainer>
        <div className="questions__container">
          <h1 className="questions__title">
            С какими запросами обращаются в <a href="/home">Point?</a>
          </h1>
          <div className="question">
            {data.map((itemData) => {
              const { title, page, image } = itemData;
              return <Question {...itemData} />;
            })}
          </div>
        </div>
        <div className="questions__buttons">
          <button className="questions__buttons_btn">
            Хочу решить свою ситуацию
          </button>
          <p className="questions__buttons_notes">
            *Первые 10 минут консультации бесплатно
          </p>
        </div>
      </BaseContainer>
    </div>
  );
}

export default Questions;
