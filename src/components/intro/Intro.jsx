import React from "react";
import "./Intro.scss";
import { Player } from "video-react";
import introVideo from "../../assets/intro_video.mp4";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__text">
        <div className="intro__text__main">
          <span className="intro__text__title">
            Связь с психологом,
            <br />
            <a href="/home"> когда она необходима</a>
          </span>
          <span className="intro__text__page">
            Аудио- и видеоконсультации в одном удобном приложении
          </span>
        </div>
        <div className="intro__buttons">
          <button className="intro__btn btn__doctor">
            Выбрать специалиста
          </button>
          <button className="intro__btn btn__free">
            Попробовать бесплатно
          </button>
        </div>
      </div>
      <div className="intro__video">
        <Player
          playsInline
          poster="/assets/poster.png"
          src={introVideo}
          className="intro__video"
        />
      </div>
    </div>
  );
}

export default Intro;
