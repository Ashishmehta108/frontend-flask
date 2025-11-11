import { useState, useEffect } from "react";
import { Card } from "./Card";

const images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div className="carousel-item" key={index}>
            <Card/>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}
