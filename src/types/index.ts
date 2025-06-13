export interface Service {
  id: string
  title: string
  category: 'interni' | 'esterni' | 'ripristino'
  description: string
  shortDescription: string
  features: {
    title: string
    description: string
    included: boolean
  }[]
  price?: {
    base: number
    currency: string
    note?: string
  }
  images: {
    main: string
    before?: string
    after?: string
    gallery?: {
      src: string
      alt: string
      description?: string
    }[]
  }
}

export interface ContactInfo {
  phone: string
  address: string
  email: string
  workingHours: {
    days: string
    morning: string
    afternoon: string
  }
  socialMedia: {
    platform: string
    url: string
    username: string
  }[]
}

export interface Testimonial {
  id: string
  name: string
  date: string
  text: string
  response?: string
  rating?: number
}

export interface GalleryItem {
  id: string
  category: 'interni' | 'esterni' | 'before-after'
  title: string
  description?: string
  image: string
  beforeImage?: string
  afterImage?: string
  service?: string
} 