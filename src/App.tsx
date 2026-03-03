import ProductCards from './components/ProductCards.tsx';
import './index.css'
import { ProductContext } from './contexts/ProductContext.tsx';
import Navbar from './components/Navbar.tsx';
import { CartProvider } from './contexts/CartContext.tsx';

const products = await Promise.all(
  [2, 3, 4, 19].map(id =>
    fetch(`https://fakestoreapi.com/products/${id}`).then(response => response.json())
  )
);

function App() {
  return (
    <>
      <ProductContext value={products}>
            <CartProvider>
                <Navbar/>
                <ProductCards />
            </CartProvider>
        </ProductContext>
    </>
  )
}

export default App
