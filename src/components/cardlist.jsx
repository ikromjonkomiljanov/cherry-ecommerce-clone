import { Cards } from "./cardsDB.js";
import "./card.css";
import { BsCart2 } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart, addToWish } from "../features/cart/cartslice.js";

function Cardlist1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="CardList">
        {Cards.map((card) => (
          <div className="Card">
            <div className="card-img">
              <img
                src={card.avatar1}
                alt={card.model}
                className="card-avatar1"
              />
              <div className="card-img-btns">
                <button
                  className="card-img-btn"
                  onClick={() => dispatch(addToWish(card))}
                >
                  <IoMdHeartEmpty className="favorite-btn" />
                </button>
                <button
                  className="card-img-btn"
                  onClick={() => navigate(`/card/${card.id}`)}
                >
                  <IoIosStats />
                </button>
              </div>
            </div>

            <div className="card-text">
              <h3>{card.model}</h3>
              <p>{card.price}</p>
            </div>

            <div className="card-btns">
              <button
                onClick={() => dispatch(addToCart(card))}
                className="card-add-btn"
              >
                <BsCart2 />
              </button>
              <button className="pay-btn">{t("pay-btn")}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cardlist1;
