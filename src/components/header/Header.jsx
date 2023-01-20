import React from "react";
import "./header.scss";
import burger from "../../assets/burger.png";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">point</div>
      <div className="header__menu">
        <img
          src={burger}
          alt="menu-burger"
          width="32px"
          height="32px"
          className="header__menu__burger"
        />
        <ul className="header__menu__items">
          <li className="header__menu__item">О приложении</li>
          <li className="header__menu__item">Преимущества</li>
          <li className="header__menu__item">Наши психологи</li>
          <li className="header__menu__item">Скачать приложение</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
