import type { ImageSources, ProductForCart } from './product.types'

export interface Cart extends ProductForCart {
    quantity: number
    total: number
    image: CartThumbnail
}

export type CartDetails = Omit<Cart, 'id'>

export type CartTotal = Cart['total']

export type CartQuantity = Cart['quantity']

export type CartThumbnail = Pick<ImageSources, 'thumbnail'>