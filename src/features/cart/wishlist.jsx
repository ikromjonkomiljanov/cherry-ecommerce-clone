import { useDispatch, useSelector } from 'react-redux';
import { removeFromWish } from './cartslice.js';


const Wishlist = () => {
  const cartItems = useSelector((state) => state.cart.items2);
  const dispatch =useDispatch()
  
  const handleRemove=(index)=>{
    dispatch(removeFromWish(index))
  }
  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒Wishlist </h2>
      {cartItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <div key={idx} style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem' }}>
            <h3>{item.name}</h3>
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

export default Wishlist;
