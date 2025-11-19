import { NoItemsFound } from '@/components/feedback'
import { CartSummary } from './CartSummary'
import { useAppSelector } from '@/store'

export function Cart() {
  const cartItems = useAppSelector(store => store.cart.items)

  const handleTotalItems = () => {
    let total = 0
    for(let item of cartItems) {
      total += item.quantity
    }

    return total
  }

  return (
    <div className="basis-[280px] flex-1 bg-white rounded-lg p-6 h-fit sticky top-10">
        <h1 className="text-Red text-xl font-bold mb-6">Your Cart({ handleTotalItems() })</h1>
        {
            cartItems.length > 0
            ? <CartSummary/>
            : <NoItemsFound/>
        }
    </div>
  )
}
