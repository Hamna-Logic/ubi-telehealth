import { useState } from "react";

const images = [
  "src/assets/coming-soon-Product.jpg",
  "src/assets/Hello-UbReady-Product-1.jpg",
  "src/assets/semaglutide-Product-3.jpg",
  "src/assets/Sildenafil-Product-5.jpg",
  "src/assets/Tadalafil-Product-8.jpg",
  "src/assets/Vardenafil-Product-6.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
      <img
        src={images[index]}
        alt="carousel"
        className="w-[20%] h-auto rounded-xl shadow-xl transition-all duration-500 object-contain"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-2xl shadow"
      >
        ⬅
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-2xl shadow"
      >
        ➡
      </button>
    </div>
  );
}
