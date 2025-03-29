export default function AddToCartButton({ productId, quantity }) {
    const handleAddToCart = () => {
      alert(`Added ${quantity} item(s) of Product ${productId} to cart!`);
    };
  
    return (
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 w-full rounded-lg"
      >
        Add to Cart
      </button>
    );
  }
  