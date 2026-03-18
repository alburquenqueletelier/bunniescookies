import { Product } from '@/types'

export const products: Product[] = [
  {
    id: 1,
    name: 'Pack 3 Bunnies',
    cookies: 3,
    price: 1800,
    image: '/images/3-galletas-sinfondo.png',
  },
  {
    id: 2,
    name: 'Pack 5 Bunnies',
    cookies: 5,
    price: 3000,
    image: '/images/5-galletas-sinfondo.png',
  },
  {
    id: 3,
    name: 'Pack 10 Bunnies',
    cookies: 10,
    price: 5000,
    image: '/images/pack-10.svg',
    badge: '⭐ Más popular',
  },
  {
    id: 4,
    name: 'Pack 20 Bunnies',
    cookies: 20,
    price: 8000,
    image: '/images/pack-20.svg',
  },
]
