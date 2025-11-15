import type { Cart } from "@/types";

export interface CartItemProps extends Cart {
    isOrder?: boolean
}