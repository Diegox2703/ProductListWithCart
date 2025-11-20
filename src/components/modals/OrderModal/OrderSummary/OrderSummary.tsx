import { CartTotal } from '@/components/features'
import { OrderList } from '../OrderList'
import { orderSummaryStyles } from './order-summary.styles'

export function OrderSummary() {
  return (
    <section className={orderSummaryStyles.container}>
        <OrderList/>
        <CartTotal/>
    </section>
  )
}