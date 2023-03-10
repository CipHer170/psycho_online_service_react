import React from "react";
import "./downloadPage.scss";
import mainImage from "../../assets/download_1_main.png";
import BaseContainer from "../BaseContainer/BaseContainer";
function DownloadPage() {
  return (
    <section className="downloadPage">
      <BaseContainer>
        <div className="downloadPage__container">
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
              <span className="downloadPage__title-secondary">
                Установите приложение
              </span>
              <span className="downloadPage__page_1">
                Скачайте приложение на ваш смартфон и пройдите быструю
                регистрацию.
              </span>
            </div>
            {/* markets buttons */}
            <div className="downloadPage__buttons">
              <a
                href="https://www.kobinet.com.tr/"
                class="market-btn apple-btn"
                role="button"
              >
                <span class="market-button-subtitle">Download on the</span>
                <span class="market-button-title">App Store</span>
              </a>
              <a
                href="https://www.kobinet.com.tr/"
                class="market-btn google-btn"
                role="button"
              >
                <span class="market-button-subtitle">Download on the</span>
                <span class="market-button-title">Google Play</span>
              </a>
            </div>
          </div>
          {/* right side */}
          <div className="downloadPage__img">
            <img src={mainImage} alt="IPhone_Image" className="mainIphone" />
          </div>
        </div>
      </BaseContainer>
    </section>
  );
}

export default DownloadPage;
// {
//   /* <button className="downloadPage__btn btn__android">
//             Выбрать специалиста
//             </button>
//           <button className="downloadPage__btn btn__ios">
//           Попробовать бесплатно
//         </button> */
// }
