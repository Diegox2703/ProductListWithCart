import { NoItemsFound } from '@/components/feedback'
import { CartSummary } from './CartSummary'
import { cartStyles } from './cart.styles'
import { useCart } from '@/hooks'

export function Cart() {
  const { handleTotalItems, cartItems } = useCart()

  return (
    <div className={cartStyles.container}>
        <h1 className={cartStyles.title}>Your Cart({ handleTotalItems() })</h1>
        {
            cartItems.length > 0
            ? <CartSummary/>
            : <NoItemsFound/>
        }
    </div>
  )
}