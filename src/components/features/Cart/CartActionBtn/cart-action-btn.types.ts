import type { CartTotal, ProductId } from "@/types"

export interface CartActionBtnProps {
    isOrder: boolean
    total: CartTotal
    id: ProductId
}