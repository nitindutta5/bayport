"use client";

import { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { alsoViewedProducts } from "../dummy";

const AlsoViewedCarousel = () => {

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-12 px-4 md:px-8 relative container">
      <h2 className="text-xl font-bold mb-6">People who viewed this also viewed</h2>
      
      <div className="relative group">
        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeft}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <FiChevronLeft className="text-gray-700 text-lg" />
        </button>
        
        <button 
          onClick={scrollRight}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100"
          style={{ transform: 'translate(50%, -50%)' }}
        >
          <FiChevronRight className="text-gray-700 text-lg" />
        </button>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {alsoViewedProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-45 snap-start bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="h-32 bg-gray-100 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">{product.title}</h3>
                {product.subtitle && (
                  <p className="text-xs text-gray-500">{product.subtitle}</p>
                )}
                <p className="text-sm font-semibold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlsoViewedCarousel;