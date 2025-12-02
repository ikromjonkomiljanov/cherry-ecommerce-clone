import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '/src/features/cart/cartslice';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CartImg from "../assets/Cart.png"
import "./Nav-icons/Cart.css"

const Addedcart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch =useDispatch()
  
  const handleRemove=(index)=>{
    dispatch(removeFromCart(index))
  }

    const [t, i18n] = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
  
  return (
    <div style={{ padding: '2rem' }}>
      {cartItems.length === 0 ? (
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
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <div key={idx} style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem'}}>
              <img src={item.avatar1} alt="" />
            <h3>{item.model}</h3>
            <p>Price: ${item.price}</p>
            <button 
                style={{ marginLeft: '1rem', color: 'white', background: 'red', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                onClick={() => handleRemove(idx)}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Addedcart;
