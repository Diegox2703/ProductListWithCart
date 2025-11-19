import { DecrementIcon } from '../../Icon'
import { IconButton } from '../IconButton'
import type { DecrementBtnProps } from './decrement-btn.types'

export function DecrementBtn({ decrementQuantity }: DecrementBtnProps) {
  return (
    <IconButton onClick={decrementQuantity}>
      <DecrementIcon/>
    </IconButton>
  )
}