import { RemoveIcon } from '../../Icon'
import { IconButton } from '../IconButton'
import type { RemoveBtnProps } from './remove-btn.types'

export function RemoveBtn({ onRemove, id }: RemoveBtnProps) {
  return (
    <IconButton onClick={() => onRemove(id)} variant='secondary'>
        <RemoveIcon/>
    </IconButton>
  )
}