import { Product } from '../../data/ProductList';
import { Card } from '../Card';

interface ListProps {
  products: Product[];
  startEditProduct: (product: Product) => void;
}

export const List = ({ products, startEditProduct }: ListProps) => {

  return (
    <div className="list">
      {products.map((product) => (
        <Card
          key={product.id}
          {...product}
          startEditProduct={startEditProduct}
        />
      ))}
    </div>
  );
};
