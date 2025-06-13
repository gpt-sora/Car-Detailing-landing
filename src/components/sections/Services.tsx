import { FC } from 'react';
import { useState } from 'react';
import { services } from '@data/services';

const Services: FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const formatPrice = (price?: { base: number; currency: string; note?: string }) => {
    if (!price) return 'Prezzo su richiesta';
    return `da ${price.currency}${price.base}`;
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay pattern-light mix-blend-soft-light" />
      
      {/* Contenuto */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-mama-gold text-center mb-16">
          I Nostri Servizi
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-mama-black border ${
                hoveredService === service.id ? 'border-mama-gold' : 'border-mama-gray-light'
              } rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-102 hover:shadow-xl`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              role="article"
              aria-labelledby={`service-title-${service.id}`}
            >
              {/* Immagine e Icona */}
              <div className="relative h-64 lg:h-80">
                {service.images.main && (
                  <img
                    src={service.images.main}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {service.images.icon && (
                  <div className="absolute top-4 right-4 w-12 h-12 bg-mama-black bg-opacity-70 rounded-full p-2 backdrop-blur-sm">
                    <img
                      src={service.images.icon}
                      alt={`Icona ${service.title}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-mama-black via-transparent to-transparent" />
                
                {/* Titolo sovrapposto all'immagine */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 
                    id={`service-title-${service.id}`}
                    className="text-3xl font-bold text-mama-gold mb-2"
                  >
                    {service.title}
                  </h3>
                  <p className="text-white text-lg">{service.shortDescription}</p>
                </div>
              </div>

              {/* Contenuto */}
              <div className="p-6">
                <p className="text-mama-gray-light mb-6 text-lg">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-mama-gray-light group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-mama-gold bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-mama-gold">✓</span>
                      </span>
                      <div>
                        <p className="font-medium text-white">{feature.title}</p>
                        <p className="text-sm text-mama-gray-light opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Prezzo e CTA */}
                <div className="flex items-center justify-between mt-8">
                  <div>
                    <p className="text-2xl font-bold text-mama-gold">
                      {formatPrice(service.price)}
                    </p>
                    {service.price?.note && (
                      <p className="text-sm text-mama-gray-light mt-1">
                        {service.price.note}
                      </p>
                    )}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-mama-gold hover:bg-mama-blue text-mama-black font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    aria-label={`Richiedi preventivo per ${service.title}`}
                  >
                    Preventivo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 