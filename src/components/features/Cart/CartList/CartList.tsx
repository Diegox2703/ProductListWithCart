import { useAppSelector } from '@/store'
import { CartItem } from '../CartItem'
import { cartListStyles } from './cart-list.styles'
import { AnimatePresence } from 'motion/react'

export function CartList() {
  const cartItems = useAppSelector(state => state.cart.items)

  return (
    <section className={cartListStyles.container}>
      <AnimatePresence>
        {
          cartItems.map(cart => (
            <CartItem key={cart.id} {...cart}/>
          ))
        }
      </AnimatePresence>
    </section>
  )
}