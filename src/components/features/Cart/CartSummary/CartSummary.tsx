import { ConfirmOrderBtn } from '@/components/ui'
import { CartInfoMessage } from '../CartInfoMessage'
import { CartList } from '../CartList'
import { CartTotal } from '../CartTotal'
import { toggleModal, useAppDispatch } from '@/store'

export function CartSummary() {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col gap-6">
      <CartList/>
      <CartTotal/>
      <CartInfoMessage/>
      <ConfirmOrderBtn openModal={() => dispatch(toggleModal())}/>
    </div>
  )
}
