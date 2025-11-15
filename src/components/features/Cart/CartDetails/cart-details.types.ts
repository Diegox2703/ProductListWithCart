import type { Cart } from '@/types'

export interface CartDetailsProps extends Cart {
    isOrder: boolean
}