import { useAppSelector } from '@/store'
import { CartItem } from '../CartItem'

export function CartList() {
  const cartItems = useAppSelector(state => state.cart.items)

  return (
    <div className='flex flex-col gap-3'>
        {
          cartItems.map(cart => (
            <CartItem key={cart.name} {...cart}/>
          ))
        }
    </div>
  )
}