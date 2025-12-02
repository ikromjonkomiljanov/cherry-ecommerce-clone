import { useState } from "react";
import "./Search.css";
import { useTranslation } from "react-i18next";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Cards } from "./cardsDB";
import { BsCart2 } from "react-icons/bs";
import Cardlist from "./cardlist";

const Search = () => {
  const [search, setSearch] = useState("");
  // console.log(search);

  const filteredCards = Cards.filter((item) =>
    search === "" ||
    item.brand.toLowerCase().includes(search.toLowerCase()) ||
    item.model.toLowerCase().includes(search.toLowerCase())
  );

  const [t, i18n] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="Search">
        <div className="Search-label">
          {/* <div className="Search-inp-wrap"> */}
          <input
            type="text"
            name=""
            id=""
            className="Search-inp-wrap"
            maxLength={90}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("search-placeholder2")}
          />
          {/* </div> */}
          <div className="Search-icons">
            <button className="search-btn1">
              <IoSearchOutline />
            </button>
            <Link to={"/"} className="search-btn2">
              <button>
                <RxCross1 />
              </button>
            </Link>
          </div>
        </div>
        <div className="Search-cards">
          {filteredCards
          .map((card) => (
            <div key={card.id} className="Card">
                <div className="card-img"  onClick={() => navigate(`/card/${card.id}`)}>
                     <img
                       src={card.avatar1}
                       alt={card.model}
                       className="card-avatar1"
                     />
                   </div>
                   <div className="card-text">
                     <h3>{card.model}</h3>
                     <p>{card.price}</p>
                   </div>
                   <div className="card-btns">
                     <button onClick={() => dispatch(addToWish(card))} className="card-add-btn">
                       <BsCart2/>
                     </button>
                     <button className="pay-btn">{t("pay-btn")}</button>
                   </div>
            </div>
          ))}
          <h1>Ommabop mahsulotlar</h1>
          <Cardlist/>
        </div>
      </div>
    </>
  );
};

export default Search;
