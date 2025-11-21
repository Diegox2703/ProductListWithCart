export interface Product {
    id: number
    name: string
    category: string
    price: number
    image: ImageSources
}

export interface ProductItem extends ProductDetails, ProductImage {
    id: ProductId
}

export type ProductDetails = Pick<Product, 'name' | 'category' | 'price'>

export type ProductForCart = Pick<Product, 'id' | 'name' | 'price'>

export type ProductId = Product['id']

export type ProductImage = {
    image: Omit<ImageSources, 'thumbnail'>
}

export interface ImageSources {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
}

export interface QuantityActions {
    action: 'increment' | 'decrement'
    id: ProductId
}