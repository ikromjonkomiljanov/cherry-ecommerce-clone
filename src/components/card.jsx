import { Link, useParams } from "react-router-dom";
import { Cards } from "./cardsDB";
// import { Link } from "react-router-dom";
import "./card.css";

function Card() {
  const { id } = useParams();

  // const selectedCard = Cards.find(card => card.id === parseInt(id))
  const selectedCard = Cards.find((card) => card.id === parseInt(id));
  // if (!selectedCard) {
  //     return <h2>Card not found</h2>;
  // }
  return (
    <>
      {/* <div className="Card">
        <div className="Card-Wrapper">
          <p className="card-model">{selectedCard.model}</p>
          <img src={selectedCard.avatar2} alt={selectedCard.brand} className="card-avatar1"/>
          <img src={selectedCard.avatar1} alt={selectedCard.brand} />
          <h2 className="card-brand">{selectedCard.brand}</h2>
          <p className="card-price">{selectedCard.price}</p>
          <p className="card-storage">{selectedCard.storage}</p>
        </div>
        <Link to={"/"}>
          <button className="card-close-btn">X</button>
        </Link>
      </div> */}

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
