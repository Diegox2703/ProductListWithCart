import type { CartDetails } from '@/types'

export interface CartDetailsProps extends CartDetails {
    isOrder: boolean
}