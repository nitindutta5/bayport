"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  // Main slider settings
  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (_, next) => {
      setActiveIndex(next);
      // Sync thumbnail slider with main slider
      thumbnailSliderRef.current.slickGoTo(next);
    },
    initialSlide: activeIndex,
    ref: mainSliderRef,
  };

  // Thumbnail slider settings
  const thumbnailSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    mainSliderRef.current.slickGoTo(index);
  };

  return (
    <div className="w-full border-gray-300 border">
      {/* Main Carousel */}
      <Slider {...mainSettings} className="overflow-hidden mb-4">
        {images?.map((item, index) => (
          <div key={index} className="flex justify-center p-2">
            <Image
              width={item.width}
              height={item.height}
              src={item.url}
              alt={`Product ${index}`}
              className="w-full max-h-[500px] object-cover p-2 cursor-pointer"
              onClick={openLightbox}
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnail Carousel */}
      <div className="px-8">
        <Slider
          {...thumbnailSettings}
          ref={thumbnailSliderRef}
          className="thumbnail-slider"
        >
          {images?.map((item, index) => (
            <div key={index} className="px-1">
              <div
                className={`border-2 p-1 cursor-pointer transition-all ${
                  activeIndex === index ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  width={80}
                  height={80}
                  src={item.url}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-20 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full">
            <img
              src={images[activeIndex].url}
              alt={`Lightbox Image ${activeIndex}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}