import type { ProductId, ProductImage } from '@/types'

export interface ProductImageProps extends ProductImage {
    id: ProductId
}