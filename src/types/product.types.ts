export interface Product {
    id: number
    name: string
    category: string
    price: number
    image: ImageSources
}

export interface ProductItem extends ProductDetails, ProductImage {
    id: number
}

export type ProductImage = {
    image: Omit<ImageSources, 'thumbnail'>
}

export type ProductDetails = Pick<Product, 'name' | 'category' | 'price'>

export interface ImageSources {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
}

export interface QuantityActions {
    action: 'increment' | 'decrement'
    id: number
}