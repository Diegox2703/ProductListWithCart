import { IncrementIcon } from '../../Icon'
import { IconButton } from '../IconButton'
import type { IncrementBtnProps } from './increment-btn.types'

export function IncrementBtn({ onIncrementQuantity, id }: IncrementBtnProps) {
  return (
    <IconButton onClick={() => onIncrementQuantity({ action: 'increment', id })}>
      <IncrementIcon/>
    </IconButton>
  )
}
