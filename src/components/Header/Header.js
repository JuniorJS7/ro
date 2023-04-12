import React, { useEffect, useState } from "react";
import "./_header.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const toggleDetails = () => {
    setToggleInfo(!toggleInfo);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
      <div className="header">
        <div className="header__container">
          {(toggleInfo || screenWidth > 1335) && (
            <div className="info">
              <p>Режим работы։10․00-20․00</p>
              <p>
                Телефон։
                <span style={{ fontWeight: "600" }}> 8(499)300-49-49 </span>
                Заказать обратный звонок
              </p>
              <p>
                Почта։
                <span style={{ fontWeight: "600", wordWrap: "break-word" }}>
                  info@markov-tram.ru
                </span>
              </p>
              <AiOutlineClose
                onClick={toggleDetails}
                className="closeDetailBtn"
              />
            </div>
          )}

          <div className="menu">
            {(toggleMenu || screenWidth > 1335) && (
              <nav className="first__nav">
                <ul>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Доставка
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Оплата
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Отзивы
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Вопросы
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      ОПТ
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Услуги
                    </Link>
                  </li>
                </ul>
                <AiOutlineClose onClick={toggleNav} className="closeBtn" />
              </nav>
            )}

            <AiOutlineMenu onClick={toggleNav} className="openBtn" />
            <AiOutlineLeft onClick={toggleDetails} className="openDetailBtn" />
            {(toggleInfo || screenWidth > 1335) && (
              <div className="menu__info">
                <p>Язык сайта։EN/RU</p>
                <p>8(499)300-49-49</p>
              </div>
            )}
          </div>

          <div>
            {(toggleMenu || screenWidth > 1335) && (
              <nav className="second__nav">
                <ul>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Каталог одежды
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Экипировка
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Форма под заказ
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Создатъ свой дизайн
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none", color: "#000000" }}
                      to="/"
                    >
                      Корзина
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
