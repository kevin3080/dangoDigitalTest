import { Product } from '../../data/ProductList';

interface ModalProductsProps {
  newProduct: Product;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  addNewProduct: () => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  editProduct: Product | null;
  setEditProduct: (product: Product | null) => void;
  handleEditChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  saveEditProduct: (updatedProduct: Product) => void;
}

export const ModalProducts = ({
  newProduct,
  handleChange,
  addNewProduct,
  showModal,
  setShowModal,
  editProduct,
  setEditProduct,
  handleEditChange,
  saveEditProduct,
}: ModalProductsProps) => {

  const cancelEdit = () => {
    setEditProduct(null);
    setShowModal(false);
  }
  return (
    <div>
      <button className="btnAddProduct" onClick={() => setShowModal(true)}>
        Agregar nuevo producto
      </button>
      {showModal && editProduct === null && (
        <div className="modal">
          <div className="modal-content">
            <h2>Agregar Nuevo Producto</h2>
            <div className="form">
              <div>
                <label>Título:</label>
                <input
                  type="text"
                  name="title"
                  value={newProduct.title}
                  onChange={handleChange}
                  placeholder="Título del producto"
                />
              </div>
              <div>
                <label>Precio:</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleChange}
                  placeholder="Precio"
                />
              </div>
              <div className="description">
                <label>Descripción:</label>
                <textarea
                  name="description"
                  maxLength={200}
                  value={newProduct.description}
                  onChange={handleChange}
                  placeholder="Descripción"
                />
              </div>
            </div>
            <button onClick={addNewProduct}>Agregar Producto</button>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
      {editProduct && (
        <div className="modal">
          <div className="modal-content">
            <h2>Editar Producto</h2>
            <div className="form">
              <div>
                <label>Título:</label>
                <input
                  type="text"
                  name="title"
                  value={editProduct.title}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <label>Precio:</label>
                <input
                  type="number"
                  name="price"
                  value={editProduct.price}
                  onChange={handleEditChange}
                />
              </div>
              <div className="description">
                <label>Descripción:</label>
                <textarea
                  name="description"
                  value={editProduct.description}
                  onChange={handleEditChange}
                />
              </div>
            </div>
            <button onClick={() => saveEditProduct(editProduct)}>
              Guardar Cambios
            </button>
            <button onClick={() => cancelEdit()}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};
