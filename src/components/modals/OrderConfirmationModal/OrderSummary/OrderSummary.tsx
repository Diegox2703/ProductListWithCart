import { CartTotal } from '@/components/features'
import { OrderList } from '../OrderList'

export function OrderSummary() {
  return (
    <section className="flex flex-col gap-5 bg-Rose-50 rounded-lg p-6">
        <OrderList/>
        <CartTotal/>
    </section>
  )
}