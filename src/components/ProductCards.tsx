import { useProducts } from '../contexts/ProductContext.tsx';
import { useCartDispatch } from '../contexts/CartContext.tsx';

export default function ProductCards() {
    const products = useProducts();
    const dispatch = useCartDispatch();

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {products.map(product => (
                <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img src={product.image} alt={product.title} className='h-100 w-96 p-4' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <div className="flex items-center justify-between">
                            <p className='text-xl font-bold'>${product.price}</p>
                            <div className="btn btn-neutral btn-outline">{product.category}</div>
                        </div>
                        <p>{product.description}</p>
                        <button className="btn btn-accent" onClick={() => dispatch({ type: 'ADD', product: { ...product, quantity: 1 } })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}