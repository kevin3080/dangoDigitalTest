import './App.css'
import { Header } from './components/Header';
import { ProductList } from './data/ProductList';

function App() {

  return (
    <main>
      {/* <div className="title-container">
        <h1><span>Test Task</span> of Dango Digital</h1>
        <div className="cart-container">
          <img onClick={showCart} src={shoppingIcon} alt="Shopping Icon" className="shopping-icon" />
          <div className={`cart-items ${showItem ? 'show' : ''}`}>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (

              cart.map((item) => (
                <div className="shopping-cart">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.amount}</td>
                        <td>{item.price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))
            )}
          </div>
        </div>
      </div> */}
      <Header/>
      <ProductList />
    
    </main>
  )
}

export default App
