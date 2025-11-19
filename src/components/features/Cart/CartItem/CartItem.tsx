import type { CartItemProps } from './cart-item.types'
import { CartDetails } from '../CartDetails/CartDetails'
import { CartActionBtn } from '../CartActionBtn/CartActionBtn'

export function CartItem({ 
  image, name, price, quantity, total, isOrder = false 
}: CartItemProps) {
  return (
    <article className="flex items-center justify-between border-b border-Rose-100 pb-5">
        <CartDetails 
          isOrder={isOrder}
          image={image}
          name={name}
          price={price}
          quantity={quantity}
          total={total}
        />
        <CartActionBtn name={name} total={total} isOrder={isOrder}/>
    </article>
  )
}