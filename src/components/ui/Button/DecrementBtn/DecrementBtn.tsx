import { DecrementIcon } from '../../Icon'
import { IconButton } from '../IconButton'
import type { DecrementBtnProps } from './decrement-btn.types'

export function DecrementBtn({ onDecrementQuantity, id }: DecrementBtnProps) {
  return (
    <IconButton onClick={() => onDecrementQuantity({ action: 'decrement', id })}>
      <DecrementIcon/>
    </IconButton>
  )
}