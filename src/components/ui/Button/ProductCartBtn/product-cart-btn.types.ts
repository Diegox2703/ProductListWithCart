import type { ProductId } from '@/types'

export interface ProductCartBtnProps {
    onCreateCartBtn: (id: ProductId) => void
    id: ProductId
}