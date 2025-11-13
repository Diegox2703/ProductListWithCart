import { ConfirmOrderBtn } from '@/components/ui'
import { CartInfoMessage } from '../CartInfoMessage'
import { CartList } from '../CartList'
import { CartTotal } from '../CartTotal'

export function CartSummary() {
  return (
    <div className="flex flex-col gap-6">
      <CartList/>
      <CartTotal/>
      <CartInfoMessage/>
      <ConfirmOrderBtn/>
    </div>
  )
}
