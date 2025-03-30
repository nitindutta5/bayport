"use client";

import { useEffect, useState } from "react";
import FabricOptions from "../FabricOptions";
import AddToCartButton from "../AddToCart";
import ImageGallery from "../ImageGallery";
import MeasurementForm from "../MesaurementForm";
import Review from "../Review";
import { mockProduct } from "@/app/dummy";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [price,setPrice]= useState(mockProduct.price);
  const [totalPrice,setTotalPrice]= useState(mockProduct.price);

  useEffect(() => {
    let newPrice = price * quantity;
    setTotalPrice(newPrice)
  },[quantity, price])

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-6">
    {/* Left Column - Images (Medium Size) */}
    <div className="col-span-12 md:col-span-[4]">
      <ImageGallery images={mockProduct.images} />
    </div>
  
    {/* Middle Column - Product Details (Largest) */}
    <div className="col-span-12 md:col-span-6 overflow-y-auto h-[calc(100vh-100px)] py-4">
      <h1 className="text-3xl font-medium text-[#003056]">{mockProduct.name}</h1>
      <Review />
      <ul className="list-disc pl-5 my-4 text-gray-700">
        {mockProduct.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
  
      {/* Measurements Form */}
      <MeasurementForm />
  
      {/* Fabric Selection */}
      <FabricOptions setPrice={setPrice}/>
    </div>
  
    {/* Right Column - Pricing & Cart Actions (Smallest) */}
    <div className="col-span-12 md:col-span-2 flex flex-col justify p-4 bg-gray-50 border border-gray-200 shadow-sm">
      {/* Pricing Section */}
      <div className="text-center">
        <p className="text-2xl font-bold text-blue-900">${totalPrice.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mt-1">
          (Excl. GST: <span className="text-blue-700 font-semibold">${(totalPrice * 0.91).toFixed(2)}</span>)
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
