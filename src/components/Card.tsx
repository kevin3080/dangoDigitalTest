import { useState } from "react";
import { useCart } from "../hooks/useCart";

interface CardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string;
}

export const Card = ({ id, title, price, description, img }: CardProps) => {
  const { addToCart} = useCart();
  const [amount, setAmount] = useState(1);

  if (amount < 1) {
    setAmount(1);
  }
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="description">
        <h3>{title}</h3>
        <span>${price}</span>
        <div className="counter-section">
          <button onClick={() => setAmount(amount - 1)}>-</button>
          <span>{amount}</span>
          <button onClick={() => setAmount(amount + 1)}>+</button>
        </div>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <button onClick={() => addToCart({ id, title, price, amount })}>
          Add to cart
        </button>
        <a href="#">Learn more</a>
      </div>
    </div>
  );
};
