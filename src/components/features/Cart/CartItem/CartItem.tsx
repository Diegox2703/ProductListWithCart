import type { CartItemProps } from './cart-item.types'
import { CartDetails } from '../CartDetails/CartDetails'
import { CartActionBtn } from '../CartActionBtn/CartActionBtn'
import { cartItemStyles } from './cart-item.styles'
import { motion } from 'motion/react'

export function CartItem({ 
  id, image, name, price, quantity, total, isOrder = false 
}: CartItemProps) {
  return (
    <motion.article 
      className={cartItemStyles.container}
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
    >
        <CartDetails 
          isOrder={isOrder}
          image={image}
          name={name}
          price={price}
          quantity={quantity}
          total={total}
        />
        <CartActionBtn id={id} total={total} isOrder={isOrder}/>
    </motion.article>
  )
}