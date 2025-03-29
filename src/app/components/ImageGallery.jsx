"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageClicked, setImageClicked] = useState(false); // Track if an image was directly clicked

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setActiveIndex(next),
    initialSlide: activeIndex,
    afterChange: (current) => setActiveIndex(current), // Ensure after change the active index is updated
  };

  // Open lightbox only if the image was directly clicked, not on slider change
  const openLightbox = () => {
    if (!imageClicked) return; // If the image wasn't clicked, don't open the lightbox
    setIsLightboxOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => setIsLightboxOpen(false);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setImageClicked(false); // Reset the image click state to prevent lightbox on slider change
  };

  // Handle main image click
  const handleImageClick = () => {
    setImageClicked(true); // Mark as image clicked for the lightbox to open
    openLightbox(); // Now open the lightbox
  };

  return (
    <div className="w-full border-gray-400 border rounded-lg md:p-4 p-2">
      {/* Main Carousel */}
      <Slider {...settings} className="overflow-hidden">
        {images.map((img, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={img}
              alt={`Product ${index}`}
              className="w-full max-h-[500px] object-cover p-2 cursor-pointer"
              onClick={handleImageClick} // Open lightbox only if image is clicked
            />
          </div>
        ))}
      </Slider>


      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-9999">
          <div className="relative">
            <img
              src={images[activeIndex]}
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
