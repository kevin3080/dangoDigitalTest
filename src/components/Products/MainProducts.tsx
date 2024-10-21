import { ProductList } from '../../data/ProductList';
import { List } from './List';
import { ModalProducts } from './ModalProducts';

export const MainProducts = () => {
  const {
    products,
    addNewProduct,
    showModal,
    editProduct,
    setShowModal,
    startEditProduct,
    saveEditProduct,
    setEditProduct,
    handleSubmit, 
    register, 
    formState,
    reset
  } = ProductList();

  
  return (
    <>
      <ModalProducts
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
        reset={reset}
        addNewProduct={addNewProduct}
        showModal={showModal}
        setShowModal={setShowModal}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
        saveEditProduct={saveEditProduct}
      />

      <List
        products={products}
        startEditProduct={startEditProduct}
      />
    </>
  );
};
