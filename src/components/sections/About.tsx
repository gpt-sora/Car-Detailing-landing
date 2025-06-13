import type { FC } from 'react';

interface Value {
  title: string;
  description: string;
  icon: JSX.Element;
}

const values: Value[] = [
  {
    title: 'Passione',
    description: 'Ogni auto è una tela bianca su cui esprimiamo la nostra passione per i dettagli.',
    icon: (
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Qualità',
    description: 'Utilizziamo solo prodotti premium e tecniche all\'avanguardia per risultati eccellenti.',
    icon: (
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Esperienza',
    description: 'Anni di esperienza nel settore ci permettono di trattare ogni auto con la cura che merita.',
    icon: (
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-mama-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonna Sinistra: Immagine */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
              <img
                src="/about/team.jpg"
                alt="Il team di M'ama Car Detailing al lavoro"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge decorativo */}
            <div className="absolute -bottom-6 -right-6 bg-mama-gold text-mama-black p-4 rounded-xl shadow-xl">
              <p className="font-bold text-xl">10+</p>
              <p className="text-sm">Anni di<br />Esperienza</p>
            </div>
          </div>

          {/* Colonna Destra: Contenuto */}
          <div>
            <h2 className="text-4xl font-bold text-mama-gold mb-6">
              La Nostra Storia
            </h2>
            <p className="text-mama-gray-light mb-8">
              M'ama Car Detailing nasce dalla passione per le auto e dalla ricerca della perfezione.
              Dal 2013 ci prendiamo cura delle auto più prestigiose di Milano, offrendo servizi
              di detailing di altissimo livello. La nostra missione è trasformare ogni auto in
              un'opera d'arte, curando ogni minimo dettaglio con dedizione e professionalità.
            </p>
            
            {/* Video Promo */}
            <div className="mb-12 relative rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/about/video-placeholder.jpg"
                  alt="Video promozionale"
                  className="w-full h-full object-cover"
                />
                {/* Play button */}
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Riproduci video"
                >
                  <div className="w-16 h-16 bg-mama-gold rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-mama-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* I Nostri Valori */}
            <h3 className="text-2xl font-bold text-mama-gold mb-6">
              I Nostri Valori
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-mama-gray-dark p-6 rounded-xl"
                >
                  <div className="text-mama-gold mb-4">{value.icon}</div>
                  <h4 className="text-mama-gold font-bold text-xl mb-2">
                    {value.title}
                  </h4>
                  <p className="text-mama-gray-light">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 