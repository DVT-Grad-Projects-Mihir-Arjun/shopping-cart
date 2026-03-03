import ProductCards from './components/ProductCards.tsx';
import './index.css'
import { ProductContext } from './contexts/ProductContext.tsx';

const products = await Promise.all(
  [1, 2, 3, 4].map(id =>
    fetch(`https://fakestoreapi.com/products/${id}`).then(response => response.json())
  )
);

function App() {
  return (
    <>
      <ProductContext value={products}>
        <ProductCards />
      </ProductContext>
    </>
  )
}

export default App
