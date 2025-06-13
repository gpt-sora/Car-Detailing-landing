import type { FC } from 'react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  service: '',
};

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Qui andrebbe implementata la logica di invio del form
    // Per ora simuliamo una richiesta
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-mama-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mama-gold mb-4">Contattaci</h2>
          <p className="text-mama-gray-light text-lg max-w-2xl mx-auto">
            Siamo qui per rispondere a tutte le tue domande e fornirti un preventivo personalizzato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form di contatto */}
          <div className="bg-mama-black border-2 border-mama-gray-light rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-mama-gold mb-2"
                >
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-mama-black border-2 border-mama-gray-light rounded-lg focus:border-mama-gold focus:outline-none text-mama-gray-light"
                  aria-required="true"
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-mama-gold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-mama-black border-2 border-mama-gray-light rounded-lg focus:border-mama-gold focus:outline-none text-mama-gray-light"
                  aria-required="true"
                />
              </div>

              <div>
                <label 
                  htmlFor="phone"
                  className="block text-mama-gold mb-2"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-mama-black border-2 border-mama-gray-light rounded-lg focus:border-mama-gold focus:outline-none text-mama-gray-light"
                />
              </div>

              <div>
                <label 
                  htmlFor="service"
                  className="block text-mama-gold mb-2"
                >
                  Servizio interessato
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-mama-black border-2 border-mama-gray-light rounded-lg focus:border-mama-gold focus:outline-none text-mama-gray-light"
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="base">Detailing Base</option>
                  <option value="pro">Detailing Pro</option>
                  <option value="elite">Detailing Elite</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-mama-gold mb-2"
                >
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-mama-black border-2 border-mama-gray-light rounded-lg focus:border-mama-gold focus:outline-none text-mama-gray-light resize-none"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-bold transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-mama-gray-light text-mama-black cursor-not-allowed'
                    : 'bg-mama-gold hover:bg-mama-blue text-mama-black'
                }`}
                aria-label={isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">
                  Messaggio inviato con successo! Ti risponderemo presto.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">
                  Si è verificato un errore. Riprova più tardi.
                </p>
              )}
            </form>
          </div>

          {/* Informazioni di contatto */}
          <div className="space-y-8">
            <div className="bg-mama-black border-2 border-mama-gray-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-mama-gold mb-4">Dove siamo</h3>
              <div className="space-y-4 text-mama-gray-light">
                <p className="flex items-center">
                  <span className="text-mama-gold mr-2">📍</span>
                  Via Roma 123, Milano
                </p>
                <p className="flex items-center">
                  <span className="text-mama-gold mr-2">📞</span>
                  +39 02 1234567
                </p>
                <p className="flex items-center">
                  <span className="text-mama-gold mr-2">✉️</span>
                  info@mamacardetailing.it
                </p>
              </div>
            </div>

            <div className="bg-mama-black border-2 border-mama-gray-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-mama-gold mb-4">Orari</h3>
              <div className="space-y-2 text-mama-gray-light">
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>

            {/* Mappa */}
            <div className="h-64 bg-mama-gray-light rounded-lg overflow-hidden">
              <iframe
                title="Mappa della nostra sede"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.854087057805!2d9.1859243!3d45.4642035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUxLjEiTiA5wrAxMScwOS4zIkU!5e0!3m2!1sit!2sit!4v1625764868974!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 