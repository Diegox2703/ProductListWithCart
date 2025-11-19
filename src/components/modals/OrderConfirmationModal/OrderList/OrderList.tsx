import { CartItem } from '@/components/features'
import { useAppSelector } from '@/store'

export function OrderList() {
  const cartItems = useAppSelector(state => state.cart.items)

  return (
    <div className="flex flex-col gap-5 max-h-40 pr-2 scroll- overflow-auto scroll-style">
        {
          cartItems.map(cart => (
            <CartItem isOrder key={cart.name} {...cart}/>
          ))
        }
    </div>
  )
}