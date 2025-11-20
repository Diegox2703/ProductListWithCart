export interface Product {
    name: string
    category: string
    price: number
    image: ImageSources
}

export interface ProductItem extends ProductDetails, ProductImage {}

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
    name: string
}