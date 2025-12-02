import { Link, useParams } from "react-router-dom";
import { Cards } from "./cardsDB";
import "./card.css";

function Card() {
  const { id } = useParams();

  const selectedCard = Cards.find((card) => card.id === parseInt(id));
  return (
    <>
        <div className="Card-items">
          <h1>{selectedCard.model}</h1>
          <div className="Card-wrapper">
            <div className="Card-wrapper-left">
              <img src={selectedCard.avatar1} alt={selectedCard.model} className="card-item-avatar"/>
              <div className="card-img-wrap">
                <img src={selectedCard.avatar2} alt={selectedCard.model} />
              </div>
            </div>
            <div className="Card-wrapper-right">
              <div className="card-storages">
                <p className="card-sorage">{selectedCard.storage}</p>
              </div>
              <div className="card-p">
                <p className="card-color">{selectedCard.color}</p>
                <p className="card-price">{selectedCard.price}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Card;
