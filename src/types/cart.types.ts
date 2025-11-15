import type { ImageSources } from "./product.types"

export interface Cart {
    name: string,
    quantity: number
    price: number
    total: number
    image: CartThumbnail
}

export type CartThumbnail = Pick<ImageSources, 'thumbnail'>