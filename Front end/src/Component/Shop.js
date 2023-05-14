import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    fetch('http://localhost:8080/api/cartitems')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error(error));
  }, []);

  const handleQuantityChange = (event, itemId) => {
    const newCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: parseInt(event.target.value, 10)
        };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const itemIndex = cartItems.find(item => item.cart_ItemId === itemId);
    if (itemIndex !== -1) {
      fetch(`https://localhost:7125/api/Cart_Items/${itemId}`, {
        method: 'DELETE'
      })
        .then(() => {
          const newCartItems = [...cartItems];
          newCartItems.splice(itemIndex, 1);
          setCartItems(newCartItems);
        })
        .catch(error => console.error(error));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.p_Price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.cart_ItemId}>
                <img src={item.p_Image} alt={item.p_Name} />
                <p>{item.p_Name}</p>
                <p>Price: {item.p_Price}</p>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(event, item.id)}
                />
                <button onClick={() => handleRemoveItem(item.cart_ItemId)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: {getTotalPrice()}</p>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
      <button onClick={() => console.log('Checkout button clicked')}>Checkout</button>
    </div>
  );
}

export default CartPage;
