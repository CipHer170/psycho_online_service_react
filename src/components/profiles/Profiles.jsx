import React from "react";
import BaseContainer from "../BaseContainer/BaseContainer";
import mainImage from "../../assets/profile_phone.png";
import "../profiles/profile.scss";

function Profiles() {
  return (
    <div className="profile">
      <BaseContainer>
        <div className="profile__container">
          <div className="profile__img">
            <img src={mainImage} alt="IPhone_Image" className="mainIphone" />
          </div>
          <div className="profile__text">
            <span className="profile__text__title">Выберите специалиста</span>
            <span className="profile__text__page">
              Просматривайте профили психологови выбирайте наиболее подходящих
              по квалификации, рейтингу, цене и запросам, с которыми они
              работают.
            </span>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}

export default Profiles;
