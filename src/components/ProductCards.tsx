import { useProducts } from '../contexts/ProductContext.tsx';
import { useCartDispatch } from '../contexts/CartContext.tsx';
import StarRating from './StarRating.tsx';

export default function ProductCards() {
    const products = useProducts();
    const dispatch = useCartDispatch();

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
            {products.map(product => (
                <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img src={product.image} alt={product.title} className='h-100 w-96 p-4' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <div className="flex items-center justify-between mt-1">
                            <p className="text-2xl font-bold tracking-tight">${product.price.toFixed(2)}</p>
                            <div className="flex flex-col items-end gap-0.5">
                                <StarRating rate={product.rating.rate} />
                                <span className="text-xs">({product.rating.count})</span>
                            </div>
                        </div>
                        <div className="badge badge-soft badge-primary absolute top-3 right-3 text-sm capitalize border-base-300 bg-base-100/90 backdrop-blur-sm">
                            {product.category}
                        </div>
                        <details className="mt-2">
                            <summary className="cursor-pointer font-medium text-sm">
                                View Description
                            </summary>
                            <p className="mt-2 text-sm text-gray-600">
                                {product.description}
                            </p>
                        </details>
                        <button className="btn btn-primary" onClick={() => dispatch({ type: 'ADD', product: { ...product, quantity: 1 } })}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}