import { useContext } from "react";
import { CartContext } from "../context/Context";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe estar dentro de un CartProvider");
  }
  return context;
};