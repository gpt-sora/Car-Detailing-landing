import type { ContactInfo } from '@types/index'

export const contactInfo: ContactInfo = {
  phone: '+39 392 16 02 012',
  address: 'Via Mezzavia, 138, 35020 Due Carrare PD',
  email: 'info@mamacardetailing.it',
  workingHours: {
    days: 'Lun-Ven',
    morning: '08:30–12:30',
    afternoon: '14:30–18:30'
  },
  socialMedia: [
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/mamacardetailing',
      username: 'M\'ama Car Detailing'
    }
    // Altri social media possono essere aggiunti quando disponibili
  ]
} 