import "./Navbar.css";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "../assets/Logo2.png";
import LogoRes from "../assets/Logo-res.png";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";
import Katalog from "./Katalog";


const Navbar = () => {
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // const [open, setOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart.items);
  const cartItems2 = useSelector((state) => state.cart.items2);
  return (
    <>
      <div className="Navbar">
        <div className="Navbar-top">
          <div className="Nav-btns">
            <ul>
              <li>
                <button className="Nav-btn1">{t("Nav-btn1")}</button>
              </li>
              <li>
                <button className="Nav-btn2">{t("Nav-btn2")}</button>
              </li>
              <li>
                <button className="Nav-btn1">{t("Nav-btn3")}</button>
              </li>
            </ul>

            <Link className="Nav-map">{t("Nav-map")}</Link>
          </div>
          <div className="Nav-contact">
            <Link className="Nav-number">+998 (71) 202 202 1</Link>
            <button className="Nav-btn3">{t("Nav-btn4")}</button>
          </div>
          <div className="Nav-languages">
            <button
              className="Nav-language-btn"
              onClick={() => changeLanguage("Узб")}
            >
              Ўзб
            </button>
            <button
              className="Nav-language-btn"
              onClick={() => changeLanguage("Uz")}
            >
              O'z
            </button>
            <button
              className="Nav-language-btn"
              onClick={() => changeLanguage("Рус")}
            >
              Рус
            </button>
          </div>
        </div>
        <div className="Navbar-bottom">
          <div className="Nav-bottom-wrap">
            <div className="Nav-katalog">
              <Link to={"/"} className="Logo-link">
                <img
                  src={Logo}
                  alt="olcha logo"
                  title="olcha"
                  className="Logo"
                />
              </Link>

              <button className="Nav-katalog-btn" onClick={() => setOpen(true)}>
                <FiMenu className="Nav-katalog-line" />
                <p>{t("Nav-katalog")}</p>
              </button>
                {/* {open && ( */}
                  <div id="None">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dicta vero sed libero vitae nesciunt, velit corporis assumenda ea eos quia, aut minima amet fugiat iusto porro tenetur doloribus consequatur.</h1>
                  </div>
                {/* )} */}
            </div>

            {/* <div className="Nav-search"> */}
            <Link className="Nav-search" to={"/search"}>
              <input
                type="text"
                placeholder={t("search-placeholder")}
                className="search-input"
              />
              <button className="search-btn">
                <IoSearchOutline />
              </button>
            </Link>
            {/* </div> */}
            <div className="Nav-icons">
              <div className="Nav-icon">
                <IoIosStats className="Nav-icon-svg" />
                <p>{t("Nav-icon1")}</p>
              </div>
              <Link to={"/wishlist"} className="Nav-registion">
                <div className="Nav-icon">
                  <IoMdHeartEmpty className="Nav-icon-svg" />
                  <p>{t("Nav-icon2")}</p>
                  {cartItems2.length > 0 && (
                    <span className="cart-count">{cartItems2.length}</span>
                  )}
                </div>
              </Link>
              <Link to={"/cartlist"} className="Nav-registion">
                <div className="Nav-icon">
                  <BsCart2 className="Nav-icon-svg" />
                  <p>{t("Nav-icon3")}</p>
                  {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.length}</span>
                  )}
                </div>
              </Link>
              <Link to={"/registion"} className="Nav-registion">
                <div className="Nav-icon">
                  <LuUserRound className="Nav-icon-svg" />
                  <p>{t("Nav-icon4")}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Navbar-responsive">
        <div className="Nav-top-res">
          <div className="Nav-top-res-left">
            <img src={LogoRes} alt="" className="logo-res" />
            <div className="Nav-res-text">
              <h1>olcha</h1>
              <p>{t("Nav-res-p")}</p>
            </div>
          </div>
          <Link>
            <button>{t("Nav-res-btn")}</button>
          </Link>
        </div>
        <div className="Nav-middle-res">
          <div className="Nav-middle-res-wrap">
            <button className="Nav-middle-phone-btn">
              <FiPhone />{" "}
            </button>
            <img src={Logo} alt="" className="logo2-res" />
            <button className="Nav-languages-btn">{t("lang")}</button>

            <div className="lang-btns-res"></div>
          </div>
        </div>
        <div className="Nav-bottom-res">
          <button className="Nav-res-katalog">
            <FiMenu />
          </button>
          <label className="Nav-res-label">
            <IoSearchOutline className="Nav-res-search-btn" />
            <Link to={"/search"}>
              <input
                type="text"
                name=""
                id=""
                placeholder={t("Nav-res-placeholder")}
              />
            </Link>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
