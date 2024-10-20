import { createContext, useState, ReactNode } from "react";

interface CartProduct {
  id: number;
  title: string;
  price: number;
  amount: number;
}

export interface CartContextType {
  cart: CartProduct[];
  totalPrice: number;
  totalItems: number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (product: CartProduct) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  // Función para agregar productos al carrito
  const addToCart = (product: CartProduct) => {
    const existingProduct = cart.find((item) => item.title === product.title);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.title === product.title
            ? { ...item, amount: item.amount + product.amount }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product: CartProduct) => {
    setCart(cart.filter((item) => item.title !== product.title));
  };

  const totalItems = cart.reduce((sum, product) => sum + product.amount, 0);
  const totalPrice = cart.reduce((sum, product) => sum + (product.price * product.amount), 0);

  return (
    <CartContext.Provider value={{ cart, totalPrice, totalItems, addToCart, removeFromCart  }}>
      {children}
    </CartContext.Provider>
  );
};