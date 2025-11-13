import { CartItem } from "@/components/features";

export function OrderList() {
  return (
    <div className="flex flex-col gap-5 max-h-40 pr-2 scroll- overflow-auto scroll-style">
        <CartItem isOrder/>
        <CartItem isOrder/>
        <CartItem isOrder/>
    </div>
  )
}