import { ProductList } from '../../data/ProductList';
import { List } from './List';
import { ModalProducts } from './ModalProducts';

export const MainProducts = () => {
  const {
    products,
    addNewProduct,
    newProduct,
    handleChange,
    showModal,
    editProduct,
    setShowModal,
    startEditProduct,
    saveEditProduct,
    setEditProduct,
  } = ProductList();
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditProduct({ ...editProduct, [name]: value });
    }
  };
  return (
    <>
      <ModalProducts
        newProduct={newProduct}
        handleChange={handleChange}
        addNewProduct={addNewProduct}
        showModal={showModal}
        setShowModal={setShowModal}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
        handleEditChange={handleEditChange}
        saveEditProduct={saveEditProduct}
      />

      <List
        products={products}
        startEditProduct={startEditProduct}
      />
    </>
  );
};
