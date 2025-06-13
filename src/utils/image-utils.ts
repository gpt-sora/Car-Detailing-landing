import { PLACEHOLDER_PATHS } from '@data/constants'

/**
 * Controlla se un'immagine esiste, altrimenti restituisce un placeholder
 * @param imagePath - Il percorso dell'immagine da controllare
 * @param type - Il tipo di placeholder da usare come fallback
 */
export const getImagePath = (imagePath: string, type: 'service' | 'gallery' | 'hero' | 'logo' = 'service'): string => {
  // In produzione, implementare la logica di verifica dell'esistenza del file
  // Per ora restituiamo sempre il placeholder
  return imagePath
}

/**
 * Genera un colore di sfondo casuale per i placeholder
 */
export const getPlaceholderBgColor = (): string => {
  const colors = [
    'bg-mama-gold/20',
    'bg-mama-blue/20',
    'bg-mama-gray-light/20'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Restituisce le dimensioni appropriate per un'immagine in base al tipo
 */
export const getImageDimensions = (type: 'service' | 'gallery' | 'hero' | 'logo'): { width: number; height: number } => {
  switch (type) {
    case 'service':
      return { width: 600, height: 400 }
    case 'gallery':
      return { width: 800, height: 600 }
    case 'hero':
      return { width: 1920, height: 1080 }
    case 'logo':
      return { width: 200, height: 80 }
    default:
      return { width: 400, height: 300 }
  }
}

/**
 * Componente per il placeholder delle immagini
 */
export const ImagePlaceholder = ({ type, className = '' }: { type: string; className?: string }) => {
  const { width, height } = getImageDimensions(type as any)
  const bgColor = getPlaceholderBgColor()
  
  return `<div 
    className={\`flex items-center justify-center \${bgColor} \${className}\`}
    style={{ width, height }}
  >
    <span className="text-mama-gray-light">
      {type.charAt(0).toUpperCase() + type.slice(1)} Placeholder
    </span>
  </div>`
} 