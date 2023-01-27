import React from "react";
import "./header.scss";
import BaseContainer from "../BaseContainer/BaseContainer";

function Header() {
  return (
    <section className="header">
      <BaseContainer>
        <div className="header__container">
          <div className="header__logo">point</div>
          <div className="header__menu__burger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          <ul className="header__menu__items">
            <li className="header__menu__item">О приложении</li>
            <li className="header__menu__item">Преимущества</li>
            <li className="header__menu__item">Наши психологи</li>
            <li className="header__menu__item">Скачать приложение</li>
          </ul>
        </div>
      </BaseContainer>
    </section>
  );
}

export default Header;
