import type { ImageSources } from './product.types'

export interface Cart {
    id: number
    name: string,
    quantity: number
    price: number
    total: number
    image: CartThumbnail
}

export type CartDetails = Omit<Cart, 'id'>

export type CartThumbnail = Pick<ImageSources, 'thumbnail'>