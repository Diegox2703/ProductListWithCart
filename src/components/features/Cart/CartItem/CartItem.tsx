import type { CartItemProps } from './cart-item.types'
import { CartDetails } from '../CartDetails/CartDetails'
import { CartActionBtn } from '../CartActionBtn/CartActionBtn'
import { cartItemStyles } from './cart-item.styles'

export function CartItem({ 
  id, image, name, price, quantity, total, isOrder = false 
}: CartItemProps) {
  return (
    <article className={cartItemStyles.container}>
        <CartDetails 
          isOrder={isOrder}
          image={image}
          name={name}
          price={price}
          quantity={quantity}
          total={total}
        />
        <CartActionBtn id={id} total={total} isOrder={isOrder}/>
    </article>
  )
}