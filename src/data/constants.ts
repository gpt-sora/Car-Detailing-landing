// Paths per le immagini placeholder
export const PLACEHOLDER_PATHS = {
  LOGO: '/placeholders/logo/logo.svg',
  HERO: '/placeholders/hero/hero-bg.webp',
  SERVICES: {
    INTERNI: {
      FULL_DETAILING: '/placeholders/services/full-detailing.webp',
      SEDILI: '/placeholders/services/sedili.webp'
    },
    ESTERNI: {
      LUCIDATURA: '/placeholders/services/lucidatura.webp',
      NANOTECH: '/placeholders/services/nanotech.webp'
    },
    RIPRISTINO: {
      FANALI: '/placeholders/services/fanali.webp'
    }
  },
  GALLERY: {
    BEFORE_AFTER: '/placeholders/gallery/before-after',
    INTERNI: '/placeholders/gallery/interni',
    ESTERNI: '/placeholders/gallery/esterni'
  }
}

// Prezzi base dei servizi (placeholder)
export const SERVICE_PRICES = {
  FULL_DETAILING: {
    base: 150,
    note: 'Il prezzo può variare in base alle dimensioni del veicolo'
  },
  LUCIDATURA: {
    base: 200,
    note: 'Il prezzo può variare in base alle condizioni della carrozzeria'
  },
  NANOTECH: {
    base: 300,
    note: 'Il prezzo include la preparazione della superficie'
  },
  SEDILI: {
    base: 80,
    note: 'Prezzo per set completo di sedili'
  },
  FANALI: {
    base: 60,
    note: 'Prezzo per coppia di fanali'
  }
}

// Configurazioni generali
export const CONFIG = {
  WORKING_HOURS: {
    MORNING: '08:30–12:30',
    AFTERNOON: '14:30–18:30',
    DAYS: 'Lun-Ven'
  },
  CONTACT: {
    PHONE: '+39 392 16 02 012',
    EMAIL: 'info@mamacardetailing.it',
    ADDRESS: 'Via Mezzavia, 138, 35020 Due Carrare PD'
  },
  SOCIAL_MEDIA: {
    FACEBOOK: 'https://www.facebook.com/mamacardetailing',
    INSTAGRAM: 'https://www.instagram.com/mamacardetailing'
  }
}

export const ASSETS_PATHS = {
  SERVICES: {
    IMAGES: '/assets/services/images',
    ICONS: '/assets/services/icons'
  }
} as const

export const SERVICE_IMAGES = {
  CERAMIC_COATING: {
    IMAGE: `${ASSETS_PATHS.SERVICES.IMAGES}/ceramic-coating.jpg`,
    ICON: `${ASSETS_PATHS.SERVICES.ICONS}/icon-ceramic-new.svg`
  }
} as const 