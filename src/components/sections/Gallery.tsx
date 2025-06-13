import type { FC } from 'react';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface GalleryImage {
  original: string;
  thumbnail: string;
  category: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    original: '/gallery/detailing1.jpg',
    thumbnail: '/gallery/detailing1-thumb.jpg',
    category: 'Detailing',
    description: 'Detailing completo BMW M4'
  },
  {
    original: '/gallery/ceramic1.jpg',
    thumbnail: '/gallery/ceramic1-thumb.jpg',
    category: 'Ceramic',
    description: 'Trattamento ceramico Porsche 911'
  },
  // Aggiungi altre immagini qui
];

const Gallery: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  return (
    <section id="gallery" className="py-20 bg-mama-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-mama-gold text-center mb-12">
          I Nostri Lavori
        </h2>
        
        {/* Filtri */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-mama-gold text-mama-black'
                  : 'bg-mama-gray-dark text-mama-gray-light hover:bg-mama-gold hover:text-mama-black'
              }`}
              aria-label={`Filtra per ${category}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <ImageGallery
            items={filteredImages}
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            showThumbnails={true}
            additionalClass="gallery-custom"
          />
        </div>

        {/* Grid di immagini */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.original}
                alt={image.description}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-mama-gold font-semibold mb-2">{image.category}</p>
                  <p className="text-white">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 