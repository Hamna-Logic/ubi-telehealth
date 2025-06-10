import { galleryItems } from "../../data.js";
import GalleryCard from "../../components/Learn/LearnCard.jsx";

const categories = [
  "Wellness and weight management",
  "Hair restoration and treatments for hair loss",
  "Treatment strategies for male erectile dysfunction"
];

const Gallery = () => (
  <div className="px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">

    {categories.map((category) => {
      const filteredItems = galleryItems.filter(item => item.category === category);
      return (
        <section key={category} className="mb-16">
        <h2 
        className="text-2xl md:text-3xl text-center font-semibold mb-6 text-[#4a637a] dark:text-[#cbd5e1]">
          {category}
        </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      );
    })}
  </div>
);

export default Gallery;
