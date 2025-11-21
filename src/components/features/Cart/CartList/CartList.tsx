import { useAppSelector } from '@/store'
import { CartItem } from '../CartItem'
import { cartListStyles } from './cart-list.styles'

export function CartList() {
  const cartItems = useAppSelector(state => state.cart.items)

  return (
    <section className={cartListStyles.container}>
        {
          cartItems.map(cart => (
            <CartItem key={cart.id} {...cart}/>
          ))
        }
    </section>
  )
}