import { useGetProductsQuery } from "./productsApi.ts";
import { addToCart } from "../cart/cartSlice.ts";
import StarRating from "./StarRating.tsx";
import { useDispatch } from "react-redux";

export default function ProductCards() {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery([19, 2, 3, 4]);
  const dispatch = useDispatch();

  if (isLoading)
    return (
      <div className="flex justify-center p-8">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center p-8">
        <p className="text-error">Failed to load products</p>
      </div>
    );

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
      {products?.map((product) => (
        <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={product.image}
              alt={product.title}
              className="h-100 w-96 p-4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <div className="flex items-center justify-between mt-1">
              <p className="text-2xl font-bold tracking-tight">
                ${product.price.toFixed(2)}
              </p>
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
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
