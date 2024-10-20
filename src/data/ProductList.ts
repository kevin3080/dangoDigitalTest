import { useState } from 'react';

export interface Product {
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
      title: 'Camisa básica',
      price: 12,
      description: 'Camisa cómoda y ligera para el día a día.',
      img: '../../public/camisa.png',
    },
    {
      id: 2,
      title: 'Camisa estampada',
      price: 18,
      description: 'Camisa estampada con un diseño moderno.',
      img: '../../public/camisa.png',
    },
    {
      id: 3,
      title: 'Camisa de algodón',
      price: 22,
      description: 'Camisa de algodón de algodón.',
      img: '../../public/camisa.png',
    },
    {
      id: 4,
      title: 'Camisa de manga corta',
      price: 14,
      description: 'Camisa de manga corta de manga corta.',
      img: '../../public/camisa.png',
    },
    {
      id: 5,
      title: 'Camisa de manga larga',
      price: 16,
      description: 'Camisa de manga larga de manga larga.',
      img: '../../public/camisa.png',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    title: '',
    price: 1,
    description: '',
    img: '../../public/camisa.png',
  });

  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const handleProductChange = (id: number, updatedProduct: Product) => {
    setProducts(products.map(product =>
      product.id === id ? updatedProduct : product
    ));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value, 
    });
  };

  
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (editProduct) {
      const updatedProduct = {
        ...editProduct,
        [name]: value,
      };

      setEditProduct(updatedProduct);

      setProducts(products.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      ));
    }
  };
  const addNewProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({
      id: 0,
      title: '',
      price: 1,
      description: '',
      img: '../../public/camisa.png',
    }); // Reset new product form
    setShowModal(false);
  };
  
  const startEditProduct = (product: Product) => {
    setEditProduct(product);
    setShowModal(true); 
  };

  const saveEditProduct = () => {
    if (editProduct) {
      setProducts(products.map(product =>
        product.id === editProduct.id ? editProduct : product
      ));
      setEditProduct(null);
      setShowModal(false);
    }
  };

  return {
    products,
    showModal,
    newProduct,
    editProduct,
    addNewProduct,
    setShowModal,
    setNewProduct,
    handleChange,
    handleProductChange,
    startEditProduct,
    saveEditProduct,
    setEditProduct,
    handleEditChange,
  };
};
