import { FC, useEffect, useRef } from 'react';

const Hero: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Autoplay il video quando il componente viene montato
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }

    // Effetto parallax allo scroll
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.35; // Ridotto da 0.5 a 0.35 per un effetto più sottile
        sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/hero/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 pattern-overlay pattern-medium mix-blend-overlay" />
        {/* Overlay scuro con opacità aumentata per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-black bg-opacity-60 animate-fade-in" />
      </div>

      {/* Contenuto Hero con spaziatura migliorata */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-bold text-mama-gold mb-8 animate-scale-in">
          M'ama Car Detailing
        </h1>
        <p className="text-xl text-white mb-12 max-w-2xl mx-auto animate-slide-up delay-300">
          Dove cura e bellezza della tua auto sono la nostra passione
        </p>
        <div className="space-x-6 animate-fade-in delay-500">
          <a 
            href="#services" 
            className="bg-mama-gold hover:bg-mama-blue transition-all duration-300 text-mama-black px-8 py-3 rounded-full inline-block slide-bg hover:shadow-glow hover:scale-105"
            aria-label="Scopri i nostri servizi"
          >
            Scopri i Servizi
          </a>
          <a 
            href="#contact"
            className="border-2 border-mama-gold text-mama-gold hover:bg-mama-gold hover:text-mama-black transition-all duration-300 px-8 py-3 rounded-full inline-block slide-bg hover:shadow-glow hover:scale-105"
            aria-label="Contattaci"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 