import type { Service } from '@types/index'
import { PLACEHOLDER_PATHS, SERVICE_PRICES, SERVICE_IMAGES } from '@data/constants'

export const SERVICES_CATEGORIES = {
  INTERNI: 'interni',
  ESTERNI: 'esterni',
  RIPRISTINO: 'ripristino',
  PROTEZIONE: 'protezione'
} as const

export const services: Service[] = [
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    category: 'protezione',
    description: 'Protezione ceramica professionale per una finitura brillante e duratura della tua auto.',
    shortDescription: 'Protezione ceramica professionale',
    features: [
      {
        title: 'Protezione Duratura',
        description: 'Coating ceramico di ultima generazione',
        included: true
      },
      {
        title: 'Lucentezza Estrema',
        description: 'Finitura a specchio di lunga durata',
        included: true
      },
      {
        title: 'Idrorepellenza',
        description: 'Effetto idrofobico superiore',
        included: true
      }
    ],
    price: {
      base: 1200,
      currency: '€',
      note: 'Il prezzo può variare in base alle dimensioni del veicolo'
    },
    images: {
      main: SERVICE_IMAGES.CERAMIC_COATING.IMAGE,
      icon: SERVICE_IMAGES.CERAMIC_COATING.ICON
    }
  },
  {
    id: 'full-detailing-interni',
    title: 'Full Detailing Interni',
    category: 'interni',
    description: 'Un trattamento che fa risplendere ogni spazio e centimetro all\'interno della tua auto.',
    shortDescription: 'Trattamento completo degli interni',
    features: [
      {
        title: 'Pulizia Approfondita',
        description: 'Pulizia completa di ogni superficie interna',
        included: true
      },
      {
        title: 'Igienizzazione',
        description: 'Sanificazione certificata di tutti gli interni',
        included: true
      }
    ],
    price: SERVICE_PRICES.FULL_DETAILING,
    images: {
      main: PLACEHOLDER_PATHS.SERVICES.INTERNI.FULL_DETAILING,
      before: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/interni-before.webp`,
      after: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/interni-after.webp`
    }
  },
  {
    id: 'lucidatura-auto',
    title: 'Lucidatura Auto',
    category: 'esterni',
    description: 'Trattamento di lucidatura di ultima generazione per eliminare graffi e imperfezioni.',
    shortDescription: 'Lucidatura professionale carrozzeria',
    features: [
      {
        title: 'Lucidatura Professionale',
        description: 'Eliminazione graffi e swirl marks',
        included: true
      },
      {
        title: 'Protezione Finale',
        description: 'Applicazione protettivo di ultima generazione',
        included: true
      }
    ],
    price: SERVICE_PRICES.LUCIDATURA,
    images: {
      main: PLACEHOLDER_PATHS.SERVICES.ESTERNI.LUCIDATURA,
      before: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/lucidatura-before.webp`,
      after: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/lucidatura-after.webp`
    }
  },
  {
    id: 'trattamento-nanotech',
    title: 'Trattamento Nanotech',
    category: 'esterni',
    description: 'Per donare ancora più bellezza e protezione alla carrozzeria della tua auto.',
    shortDescription: 'Protezione nanotecnologica',
    features: [
      {
        title: 'Protezione Ceramica',
        description: 'Coating nanotecnologico protettivo',
        included: true
      },
      {
        title: 'Effetto Idrorepellente',
        description: 'Protezione duratura contro agenti atmosferici',
        included: true
      }
    ],
    price: SERVICE_PRICES.NANOTECH,
    images: {
      main: PLACEHOLDER_PATHS.SERVICES.ESTERNI.NANOTECH,
      before: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/nanotech-before.webp`,
      after: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/nanotech-after.webp`
    }
  },
  {
    id: 'lavaggio-sedili',
    title: 'Lavaggio Sedili',
    category: 'interni',
    description: 'Riporta i tuoi sedili alla loro bellezza originale!',
    shortDescription: 'Pulizia professionale sedili',
    features: [
      {
        title: 'Pulizia Profonda',
        description: 'Rimozione macchie e sporco incrostato',
        included: true
      },
      {
        title: 'Trattamento Tessuti',
        description: 'Protezione e ravvivamento tessuti',
        included: true
      }
    ],
    price: SERVICE_PRICES.SEDILI,
    images: {
      main: PLACEHOLDER_PATHS.SERVICES.INTERNI.SEDILI,
      before: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/sedili-before.webp`,
      after: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/sedili-after.webp`
    }
  },
  {
    id: 'ripristino-fanali',
    title: 'Ripristino Fanali Opacizzati',
    category: 'ripristino',
    description: 'I fanali della tua auto sono diventati opachi? Se il problema è esterno ce ne occupiamo noi!',
    shortDescription: 'Lucidatura e ripristino fanali',
    features: [
      {
        title: 'Lucidatura Professionale',
        description: 'Eliminazione opacità e ingiallimento',
        included: true
      },
      {
        title: 'Protezione UV',
        description: 'Trattamento protettivo anti-UV',
        included: true
      }
    ],
    price: SERVICE_PRICES.FANALI,
    images: {
      main: PLACEHOLDER_PATHS.SERVICES.RIPRISTINO.FANALI,
      before: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/fanali-before.webp`,
      after: `${PLACEHOLDER_PATHS.GALLERY.BEFORE_AFTER}/fanali-after.webp`
    }
  }
] 