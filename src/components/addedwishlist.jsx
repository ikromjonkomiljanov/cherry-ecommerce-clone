import { useDispatch, useSelector } from 'react-redux';
import { removeFromWish } from '/src/features/cart/cartslice.js';
import "./Nav-icons/Favorites.css"
import Share from "../assets/Nav-icons-share.png"
import { useTranslation } from 'react-i18next';
  

const AddedWishlist = () => {
  const cartItems = useSelector((state) => state.cart.items2);
  const dispatch =useDispatch()
  
  const handleRemove=(index)=>{
    dispatch(removeFromWish(index))
  }

    const [t, i18n] = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
  return (
    <div style={{ padding: '2rem' }}>
      {cartItems.length === 0 ? (
    <div className="Favorites">
    <h1>{t("favorites-h1")}</h1>
    <div className="Favorites-items">
      <img src={Share} alt="" />
      <p>{t("favorites-p")}</p>
    </div>
  </div>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <div key={idx} style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem' }}>
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

export default AddedWishlist;
