import { NoItemsFound } from '@/components/feedback'
import { CartSummary } from './CartSummary'
import { useAppSelector } from '@/store'

export function Cart() {
  const cartItems = useAppSelector(store => store.cart.items)

  return (
    <div className="basis-[280px] flex-1 bg-white rounded-lg p-6 h-fit">
        <h1 className="text-Red text-xl font-bold mb-6">Your Cart({ cartItems.length })</h1>
        {
            cartItems.length > 0
            ? <CartSummary/>
            : <NoItemsFound/>
        }
    </div>
  )
}
