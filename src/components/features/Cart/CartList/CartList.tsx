import { useAppSelector } from '@/store'
import { CartItem } from '../CartItem'

export function CartList() {
  const cartItems = useAppSelector(state => state.cart.items)

  return (
    <section className='flex flex-col gap-3 max-h-[231px] overflow-auto scroll-style pr-1'>
        {
          cartItems.map(cart => (
            <CartItem key={cart.name} {...cart}/>
          ))
        }
    </section>
  )
}