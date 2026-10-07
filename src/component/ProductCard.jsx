import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md">

      {/* Product Image */}
      <div className="h-64 w-full bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-1 text-sm font-medium capitalize text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1">
          <Star
            size={17}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm text-gray-600">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <p className="mb-2 text-xl font-bold text-gray-900">
          ₹{product.price}
        </p>

        {/* Stock */}
        <p className="mb-4 text-sm text-green-600">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* Add To Cart */}
        <button
          disabled={product.stock <= 0}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;