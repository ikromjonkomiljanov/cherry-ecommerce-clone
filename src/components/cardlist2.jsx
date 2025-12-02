import { useNavigate } from "react-router-dom";

import { Cards } from "./cardsDB.js";
import "./card.css";
import { useDispatch } from "react-redux";
import { addToCart, addToWish } from "../features/cart/cartslice.js";

function Cardlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="CardList">
        {Cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.avatar1} alt={card.brand} />
            <h2>{card.brand}</h2>
            <p>{card.model}</p>
            <p>{card.price}</p>
            <p>{card.storage}</p>
            <button onClick={() => navigate(`/card/${card.id}`)}>
              view detail
            </button>
            <button onClick={() => dispatch(addToCart(card))}>
              {" "}
              Add to cart
            </button>
            <button onClick={() => dispatch(addToWish(card))}>
              {" "}
              Add to wish
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cardlist;
