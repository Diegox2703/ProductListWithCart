import type { ProductId, QuantityActions } from '@/types'

export interface DecrementBtnProps {
    onDecrementQuantity: (action: QuantityActions) => void
    id: ProductId
}