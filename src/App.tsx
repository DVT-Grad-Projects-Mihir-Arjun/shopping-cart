import './index.css'

const products = await Promise.all(
  [1, 2, 3, 4].map(id =>
    fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
  )
);

function App() {
  return (
    <>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  )
}

export default App
