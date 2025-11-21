import type { ProductId, QuantityActions } from '@/types'

export interface IncrementBtnProps {
    onIncrementQuantity: (action: QuantityActions) => void
    id: ProductId
}