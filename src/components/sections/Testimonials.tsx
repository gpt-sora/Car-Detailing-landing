import type { FC } from 'react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  car: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marco Rossi',
    role: 'CEO',
    image: '/testimonials/marco.jpg',
    text: 'Servizio impeccabile. La mia BMW M4 non è mai stata così bella. Professionalità e attenzione ai dettagli al top.',
    rating: 5,
    car: 'BMW M4'
  },
  {
    id: 2,
    name: 'Laura Bianchi',
    role: 'Imprenditrice',
    image: '/testimonials/laura.jpg',
    text: 'Ho affidato la mia Porsche 911 a M\'ama Car Detailing e sono rimasta impressionata dal risultato. Un lavoro eccezionale!',
    rating: 5,
    car: 'Porsche 911'
  },
  {
    id: 3,
    name: 'Giuseppe Verdi',
    role: 'Manager',
    image: '/testimonials/giuseppe.jpg',
    text: 'La cura e la passione che mettono nel loro lavoro è evidente. La mia Mercedes AMG sembra appena uscita dal concessionario.',
    rating: 5,
    car: 'Mercedes-AMG GT'
  }
];

const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay pattern-strong mix-blend-overlay" />
      
      {/* Contenuto */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-mama-gold text-center mb-12">
          Dicono di Noi
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-mama-gold hover:text-mama-blue transition-colors"
            aria-label="Testimonianza precedente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-mama-gold hover:text-mama-blue transition-colors"
            aria-label="Testimonianza successiva"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="bg-mama-gray-dark rounded-xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-mama-gold"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-mama-gray-light text-lg italic mb-4">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="text-mama-gold font-semibold">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-mama-gray-light text-sm">
                  {testimonials[currentIndex].role} - {testimonials[currentIndex].car}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-mama-gold'
                    : 'bg-mama-gray-dark hover:bg-mama-gold'
                }`}
                aria-label={`Vai alla testimonianza ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 