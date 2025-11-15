import { CartItem } from "@/components/features";
import { CART } from "@/constants";

export function OrderList() {
  return (
    <div className="flex flex-col gap-5 max-h-40 pr-2 scroll- overflow-auto scroll-style">
        {
          CART.map(cart => (
            <CartItem isOrder key={cart.name} {...cart}/>
          ))
        }
    </div>
  )
}