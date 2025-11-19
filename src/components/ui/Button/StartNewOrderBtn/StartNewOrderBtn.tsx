import { BaseButton } from '../BaseButton'
import type { StartNewOrderBtnProps } from './start-new-orderbtn.types'

export function StartNewOrderBtn({ resetOrder }: StartNewOrderBtnProps) {
  return (
    <BaseButton onClick={resetOrder}>
        Start New Order
    </BaseButton>
  )
}
