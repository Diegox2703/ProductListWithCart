import type { QuantityActions } from "@/types";

export interface DecrementBtnProps {
    onDecrementQuantity: (action: QuantityActions) => void
    id: number
}