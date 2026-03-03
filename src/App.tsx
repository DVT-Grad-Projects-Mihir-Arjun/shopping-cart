import ProductCards from './components/ProductCards.tsx';
import './index.css'
import Navbar from './components/Navbar.tsx';
import { CartProvider } from './contexts/CartContext.tsx';
import { ProductProvider } from './contexts/ProductContext.tsx';

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <ProductCards />
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
