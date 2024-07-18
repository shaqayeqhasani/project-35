import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const products = [
  
  ];

  const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    const existingCartItem = cart.find((item) => item.product.id === id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.product.id !== id);
    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === id) {
        item.quantity++;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === id) {
        item.quantity--;
        if (item.quantity === 0) {
          removeFromCart(id);
        }
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className="container">
     <div className='fs-1 fw-bold col-12 text-center py-5 about'>
Your Cart
</div>
      <table id="cart" className="table mt-4">
        <tbody>
          {cart.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.id}</td>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>
                <button className="btn btn-secondary" onClick={() => decreaseQuantity(item.product.id)}>
                  -
                </button>
                {item.quantity}
                <button className="btn btn-secondary" onClick={() => increaseQuantity(item.product.id)}>
                  +
                </button>
              </td>
              <td>{item.product.price * item.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">Total</td>
            <td>{calculateTotal()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
