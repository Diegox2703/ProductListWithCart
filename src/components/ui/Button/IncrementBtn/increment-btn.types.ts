import type { QuantityActions } from "@/types";

export interface IncrementBtnProps {
    onIncrementQuantity: (action: QuantityActions) => void
    id: number
}