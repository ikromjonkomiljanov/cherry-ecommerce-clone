import "./Cart.css";
import CartImg from "../../assets/cart.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Cart = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="Carts">
      <div className="Carts-btns">
        <img src={CartImg} alt="" className="cart-img-png" />
        <h1>{t("cart-h1")}</h1>
        <p>{t("cart-p")}</p>
        <Link to={"/"} className="cart-link">
          <button>{t("cart-link")}</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
