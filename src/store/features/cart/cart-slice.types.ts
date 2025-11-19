import type { Cart } from "@/types";

export interface CartSliceState {
    items: Cart[]
}

export interface QuantityActions {
    action: 'increment' | 'decrement'
    name: string
}