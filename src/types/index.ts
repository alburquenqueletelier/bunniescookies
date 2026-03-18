export interface Product {
  id: number
  name: string
  cookies: number
  price: number
  image: string
  badge?: string
}

export interface CartItem {
  product: Product
  quantity: number
}
