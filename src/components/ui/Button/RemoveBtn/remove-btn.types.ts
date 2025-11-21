import type { ProductId } from '@/types'

export interface RemoveBtnProps {
    onRemove: (id: ProductId) => void
    id: ProductId
}