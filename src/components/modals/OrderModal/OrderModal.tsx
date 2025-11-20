import { StartNewOrderBtn } from '@/components/ui'
import { useCart, useDisableScroll } from '@/hooks'
import { OrderHeader } from './OrderHeader'
import { OrderSummary } from './OrderSummary'
import { orderModalStyles } from './order-modal.styles'

export function OrderModal() {
  const { resetCartFn } = useCart()
  useDisableScroll()

  return (
    <div className={orderModalStyles.overlay}>
        <div className={orderModalStyles.modal}>
          <OrderHeader/>
          <OrderSummary/>
          <StartNewOrderBtn resetOrder={resetCartFn}/>
        </div>
    </div>
  )
}
