import { useCart } from '@/hooks'
import { cartTotalStyles } from './cart-total.styles'

export function CartTotal() {
  const { handleTotal } = useCart()

  return (
    <section className={cartTotalStyles.container}>
        <p className={cartTotalStyles.text}>Order Total</p>
        <p className={cartTotalStyles.total}>${handleTotal()}</p>
    </section>
  )
}
