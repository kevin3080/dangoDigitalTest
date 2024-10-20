import { useState } from "react";
import { Card } from "../components/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string;
}

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Camisa básica",
      price: 12,
      description: "Camisa cómoda y ligera para el día a día.",
      img: "../../public/camisa.png",
    },
    {
      id: 2,
      title: "Camisa estampada",
      price: 18,
      description: "Camisa estampada con un diseño moderno.",
      img: "../../public/camisa.png",
    },
    {
      id: 3,
      title: "Camisa de algodón",
      price: 22,
      description: "Camisa de algodón de algodón.",
      img: "../../public/camisa.png",
    },
    {
      id: 4,
      title: "Camisa de manga corta",
      price: 14,
      description: "Camisa de manga corta de manga corta.",
      img: "../../public/camisa.png",
    },
    {
      id: 5,
      title: "Camisa de manga larga",
      price: 16,
      description: "Camisa de manga larga de manga larga.",
      img: "../../public/camisa.png",
    },
  ]);

  // Función para agregar un nuevo producto
  const addNewProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
      title: "Nuevo Producto",
      price: 20,
      description: "Este es un producto agregado dinámicamente.",
      img: "../../public/camisa.png",
    };

    setProducts([...products, newProduct]);
  };

  return (
    <>
      <div className="list">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </div>
      <button onClick={addNewProduct}>Agregar Producto +</button>
    </>
  );
};
