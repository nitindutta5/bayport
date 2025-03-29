"use client";

import { useState } from "react";
import FabricOptions from "../FabricOptions";
import AssuranceOptions from "../AssuranceOptions";
import AddToCartButton from "../AddToCart";
import ImageGallery from "../ImageGallery";
import MeasurementForm from "../MesaurementForm";
import Review from "../Review";

const mockProduct = {
  id: "123",
  name: "Rectangular Outdoor Custom Covers",
  price: 6.28,
  description: [
    "Solid Protection: Rectangle-shaped custom covers defend your outdoor possessions",
    "Durable Fabrication: Constructed of resilient weatherproof materials",
    "Personalised Style: Choose from various fabrics and shades",
  ],
  images: [
    "https://cdn.coversandall.com.au/media/catalog/product/s/q/square-tarp-grey.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=608&width=608&canvas=608:608",
    "https://cdn.coversandall.com.au/media/catalog/product/T/a/Tarps001_H.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=608&width=608&canvas=608:608",
    "https://cdn.coversandall.com.au/media/catalog/product/T/a/Tarps001_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=608&width=608&canvas=608:608",
    "https://cdn.coversandall.com.au/media/catalog/product/T/a/Tarps001_3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=608&width=608&canvas=608:608",
  ],
};

export default function ProductDetails({ productId }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-6">
    {/* Left Column - Images (Medium Size) */}
    <div className="col-span-12 md:col-span-4">
      <ImageGallery images={mockProduct.images} />
    </div>
  
    {/* Middle Column - Product Details (Largest) */}
    <div className="col-span-12 md:col-span-6 overflow-y-auto h-[calc(100vh-100px)] py-4 md:pr-10">
      <h1 className="text-xl font-semibold text-blue-800">{mockProduct.name}</h1>
      <Review />
      <ul className="list-disc pl-5 my-4 text-gray-700">
        {mockProduct.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
  
      {/* Measurements Form */}
      <MeasurementForm />
  
      {/* Fabric Selection */}
      <FabricOptions />
  
      {/* Assurance Options */}
      <AssuranceOptions />
    </div>
  
    {/* Right Column - Pricing & Cart Actions (Smallest) */}
    <div className="col-span-12 md:col-span-2 flex flex-col justify p-4 bg-gray-50 rounded-lg shadow-sm">
      {/* Pricing Section */}
      <div className="text-center">
        <p className="text-2xl font-bold text-blue-900">${mockProduct.price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mt-1">
          (Excl. GST: <span className="text-blue-700 font-semibold">${(mockProduct.price * 0.91).toFixed(2)}</span>)
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 text-center">Quantity</p>
        <div className="flex items-center justify-center border rounded-lg overflow-hidden mt-1">
          <button
            className="w-10 h-10 text-lg font-bold text-gray-700 border-r hover:bg-gray-200 transition"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
          <button
            className="w-10 h-10 text-lg font-bold text-gray-700 border-l hover:bg-gray-200 transition"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Bulk Discount */}
      <p className="text-blue-600 text-sm text-center mt-2 cursor-pointer hover:underline">
        Bulk Quantity Discount
      </p>

      {/* Add to Cart Button */}
      <AddToCartButton productId={mockProduct.id} quantity={quantity} />
    </div>
  </div>
  );
}
