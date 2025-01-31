import React, { useState, useEffect } from "react";

const images = [
  "../../public/images/women1.jpeg",
  "../../public/images/women3.jpeg",
  "../../public/images/women2.jpeg",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setIsSliding(false);
  };


return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
          </div>
        ))}
        
      </div>
      <div className="absolute top-1/2 left-28 transform -translate-y-1/2  text-white p-6 font-bold rounded-lg max-w-xl">
          <h2 className="text-4xl font-bold mb-2">FROM STIGMA TO
          STRENGTH</h2>
          <p className="text-lg text-pink-300">
          EMPOWERING WOMEN FOR CHANGE.
          </p>
        </div>

      {/* Left Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Right Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;



