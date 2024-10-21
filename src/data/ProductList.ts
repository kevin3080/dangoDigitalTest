import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

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
      img: '/camisa.png',
    },
    {
      id: 2,
      title: 'Camisa estampada',
      price: 18,
      description: 'Camisa estampada con un diseño moderno.',
      img: '/camisa.png',
    },
    {
      id: 3,
      title: 'Camisa de algodón',
      price: 22,
      description: 'Camisa de algodón de algodón.',
      img: '/camisa.png',
    },
    {
      id: 4,
      title: 'Camisa de manga corta',
      price: 14,
      description: 'Camisa de manga corta de manga corta.',
      img: '/camisa.png',
    },
    {
      id: 5,
      title: 'Camisa de manga larga',
      price: 16,
      description: 'Camisa de manga larga de manga larga.',
      img: '/camisa.png',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const {
    reset,
    setValue,
    handleSubmit, 
    register, 
    formState: { errors }
  } = useForm<Product>({
    defaultValues:{
      title: '',
      price: 0,
      description: '',
      img: '/camisa.png',
    }
  });

  const addNewProduct: SubmitHandler<Product> = (data) => {
    setProducts([...products, { ...data, id: products.length + 1 }]);
    reset(); // Reinicia el formulario
    setShowModal(false); 
  };

  const startEditProduct = (product: Product) => {
    setEditProduct(product);
    setShowModal(true);

    setValue('title', product.title);
    setValue('price', product.price);
    setValue('description', product.description);
    setValue('img', product.img);
  };

  const saveEditProduct: SubmitHandler<Product> = (data) => {
    if (editProduct) {
      const updatedProduct = {
        ...editProduct,
        ...data,
      }
      setProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setEditProduct(null);
      reset();
      setShowModal(false);
    }
  };

  return {
    products,
    showModal,
    editProduct,
    addNewProduct,
    setShowModal,
    startEditProduct,
    saveEditProduct,
    setEditProduct,
    handleSubmit, 
    register, 
    formState: { errors },
    reset
  };
};
