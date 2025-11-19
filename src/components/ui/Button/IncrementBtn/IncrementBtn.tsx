import { IncrementIcon } from '../../Icon'
import { IconButton } from '../IconButton'
import type { IncrementBtnProps } from './increment-btn.types'

export function IncrementBtn({ incrementQuantity }: IncrementBtnProps) {
  return (
    <IconButton onClick={incrementQuantity}>
      <IncrementIcon/>
    </IconButton>
  )
}
