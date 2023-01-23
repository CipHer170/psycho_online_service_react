import React from "react";
import "./downloadPage.scss";
import bkgImage from "../../assets/download_1.svg";
import mainImage from "../../assets/download_1_main.png";

function DownloadPage() {
  return (
    <div className="downloadPage">
      <div className="downloadPage__text">
        <div className="downloadPage__main">
          <span className="downloadPage__title">
            Удобно
            <a href="/home"> и просто</a>
          </span>
          <span className="downloadPage__page">
            Point — это современное приложение, в котором вы можете получить
            психологическую поддержку, когда и где вам удобно.
          </span>
          <span className="downloadPage__title-secondary"></span>
        </div>
        <div className="downloadPage__buttons">
          <button className="downloadPage__btn btn__android">
            Выбрать специалиста
          </button>
          <button className="downloadPage__btn btn__ios">
            Попробовать бесплатно
          </button>
        </div>
      </div>

      <div className="downloadPage__img">
        <img
          src={bkgImage}
          alt="background_Image"
          className="background__mainIphone"
        />
        <img src={mainImage} alt="IPhone_Image" className="mainIphone" />
      </div>
    </div>
  );
}

export default DownloadPage;
