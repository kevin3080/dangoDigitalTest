import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';
import { Product } from '../../data/ProductList';


interface ModalProductsProps {
  addNewProduct: (data: Product) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  editProduct: Product | null;
  setEditProduct: (product: Product | null) => void;
  saveEditProduct: (updatedProduct: Product) => void;
  handleSubmit: UseFormHandleSubmit<Product, undefined>;
  register: UseFormRegister<Product>;
  formState: {
    errors: FieldErrors<Product>;
  },
  reset: UseFormReset<Product>
}

export const ModalProducts = ({
  handleSubmit, 
  register, 
  formState: { errors },
  addNewProduct,
  showModal,
  setShowModal,
  editProduct,
  setEditProduct,
  saveEditProduct,
  reset
}: ModalProductsProps) => {


  const cancelEdit = () => {
    setEditProduct(null);
    reset();
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
            <form className="form" onSubmit={handleSubmit(addNewProduct)}>
              <div>
                <label>Título:</label>
                <input
                  type="text"
                  {...register('title', { 
                    required: 'Título del producto es requerido',
                    minLength: {
                      value: 5,
                      message: 'El título debe tener al menos 5 caracteres'
                    },
                    maxLength: {
                      value: 30,
                      message: 'El título debe tener menos de 30 caracteres'
                    }
                  })}
                  placeholder="Título del producto"
                  className={errors.title ? 'input-error' : ''}
                />
                {errors.title && <p className ="message-error">{errors.title.message}</p>}
              </div>
              <div>
                <label>Precio:</label>
                <input
                  type="number"
                  {...register('price', { required: 'Precio es requerido',
                    min: { value: 1, message: 'El precio debe ser mayor que 0' },
                   })}
                  placeholder="Precio"
                  className={errors.price ? 'input-error' : ''}
                />
                {errors.price && <p className ="message-error">{errors.price.message}</p>}
              </div>
              <div className="description">
                <label>Descripción:</label>
                <textarea
                  {...register('description', { 
                    required: 'Descripción es requerido',
                    minLength: { 
                      value: 10, 
                      message: 'La descripción debe tener al menos 10 caracteres' 
                    },
                    maxLength: { 
                      value: 200, 
                      message: 'La descripción debe tener menos de 200 caracteres' 
                    },               
                  })}
                  placeholder="Descripción"
                  className={errors.description ? 'input-error' : ''}
                />
                {errors.description && <p className ="message-error">{errors.description.message}</p>}
              </div>

              <div className="modal-buttons">
                <button type="submit">Agregar Producto</button>
                <button type='button' onClick={() => cancelEdit()}>Cerrar</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {editProduct && (
        <div className="modal">
          <div className="modal-content">
            <h2>Editar Producto</h2>
            <form className="form" onSubmit={handleSubmit(saveEditProduct)}>
              <div>
                <label>Título:</label>
                <input
                  type="text"
                  {...register('title', { 
                    required: 'Título del producto es requerido',
                    minLength: {
                      value: 5,
                      message: 'El título debe tener al menos 5 caracteres'
                    },
                    maxLength: {
                      value: 30,
                      message: 'El título debe tener menos de 30 caracteres'
                    }
                  })}
                  defaultValue={editProduct.title}
                  className={errors.title ? 'input-error' : ''}
                />
                {errors.title && <p className ="message-error">{errors.title.message}</p>}
              </div>
              <div>
                <label>Precio:</label>
                <input
                  type="number"
                  {...register('price', { 
                    required: 'Precio es requerido',
                    min: { value: 1, message: 'El precio debe ser mayor que 0' },
                   })}
                  defaultValue={editProduct.price}
                  className={errors.price ? 'input-error' : ''}
                />
                {errors.price && <p className ="message-error">{errors.price.message}</p>}
              </div>
              <div className="description">
                <label>Descripción:</label>
                <textarea
                  {...register('description', {
                    required: 'Descripción es requerido',
                    minLength: { 
                      value: 10, 
                      message: 'La descripción debe tener al menos 10 caracteres' 
                    },
                    maxLength: { 
                      value: 200, 
                      message: 'La descripción debe tener menos de 200 caracteres' 
                    },
                  })}
                  defaultValue={editProduct.description}
                  className={errors.description ? 'input-error' : ''}
                />
                {errors.description && <p className ="message-error">{errors.description.message}</p>}
              </div>
              <div className="modal-buttons">
                <button type="submit">
                  Guardar Cambios
                </button>
                <button type='button' onClick={() => cancelEdit()}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
