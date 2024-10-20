import { useState } from 'react';
import { useCart } from '../hooks/useCart';

export const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const { cart, totalItems, totalPrice, removeFromCart } = useCart();

  const showModalCart = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="cart-container">
      <div className="container-icon" onClick={showModalCart}>
        <div className="container-cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{totalItems}</span>
          </div>
        </div>
      </div>

      <div
        className={`container-cart-products ${showModal ? '' : 'hidden-cart'}`}
      >
        {cart.map((item) => (
          <div className="row-product hidden">
            <div className="cart-product">
              <div className="info-cart-product">
                <span className="cantidad-producto-carrito">{item.amount}</span>
                <p className="titulo-producto-carrito">{item.title}</p>
                <span className="precio-producto-carrito">${item.price}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon-close"
                onClick={() => removeFromCart(item)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        ))}
        <div className="cart-total">
          {cart.length === 0 && (
            <p className="cart-empty">El carrito está vacío</p>
          )}
          {cart.length > 0 && (
            <>
              <h3>Total:</h3>
              <span className="total-pagar">${totalPrice}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
