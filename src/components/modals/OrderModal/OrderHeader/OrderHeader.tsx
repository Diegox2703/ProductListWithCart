import { OrderConfirmedIcon } from '@/components/ui'
import { orderHeaderStyles } from './order-header.styles'

export function OrderHeader() {
  return (
    <>
        <section>
            <OrderConfirmedIcon/>
        </section>
        <section>
            <h1 className={orderHeaderStyles.title}>Order Confirmed</h1>
            <span className={orderHeaderStyles.text}>We hope you enjoy your food</span>
        </section>
    </>
  )
}
