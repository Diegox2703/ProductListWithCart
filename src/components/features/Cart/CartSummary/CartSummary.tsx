import { ConfirmOrderBtn } from '@/components/ui'
import { CartInfoMessage } from '../CartInfoMessage'
import { CartList } from '../CartList'
import { CartTotal } from '../CartTotal'
import { cartSummaryStyles } from './cart-summary.styles'
import { useOrderModal } from '@/hooks'

export function CartSummary() {
  const { toggleModalFn } = useOrderModal()

  return (
    <div className={cartSummaryStyles.container}>
      <CartList/>
      <CartTotal/>
      <CartInfoMessage/>
      <ConfirmOrderBtn openModal={() => toggleModalFn()}/>
    </div>
  )
}
