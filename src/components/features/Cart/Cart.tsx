import { NoItemsFound } from '@/components/feedback'
import { CartSummary } from './CartSummary'

export function Cart() {
  const hasItems = true

  return (
    <div className="basis-[280px] flex-1 bg-white rounded-lg p-6 h-fit">
        <h1 className="text-Red text-xl font-bold mb-6">Your Cart(7)</h1>
        {
            hasItems
            ? <CartSummary/>
            : <NoItemsFound/>
        }
    </div>
  )
}
