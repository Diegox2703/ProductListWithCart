import type { CartItemProps } from './cart-item.types'
import { CartDetails } from '../CartDetails/CartDetails'
import { CartActionBtn } from '../CartActionBtn/CartActionBtn'

export function CartItem({ isOrder = false }: CartItemProps) {
  return (
    <article className="flex items-center justify-between border-b border-Rose-100 pb-5">
        <CartDetails isOrder={isOrder}/>
        <CartActionBtn isOrder={isOrder}/>
    </article>
  )
}
