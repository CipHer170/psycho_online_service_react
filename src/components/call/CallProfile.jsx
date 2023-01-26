import React from "react";
import BaseContainer from "../BaseContainer/BaseContainer";
import mainImage from "../../assets/download_1_main.png";

function CallProfile() {
  return (
    <div className="callProfile">
      <BaseContainer>
        <div className="callProfile__container">
          <div className="callProfile__text">
            <div className="callProfile__text_main">
              <span className="callProfile__title">Позвоните психологу</span>
              <span className="callProfile__page">
                Если психолог онлайн, значит он готов помочь сейчас, без
                предварительной договоренности и согласования.
              </span>
            </div>
            <div className="callProfile__buttons">
              <a
                href="https://www.kobinet.com.tr/"
                target="_blank"
                class="market-btn apple-btn"
                role="button"
              >
                <span class="market-button-subtitle">Download on the</span>
                <span class="market-button-title">App Store</span>
              </a>
              <a
                href="https://www.kobinet.com.tr/"
                target="_blank"
                class="market-btn google-btn"
                role="button"
              >
                <span class="market-button-subtitle">Download on the</span>
                <span class="market-button-title">Google Play</span>
              </a>
            </div>
          </div>
          <div className="callProfile__img">
            <img src={mainImage} className="mainImage" alt="" />
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}

export default CallProfile;
