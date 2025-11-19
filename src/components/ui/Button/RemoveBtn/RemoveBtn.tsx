import { RemoveIcon } from '../../Icon'
import { IconButton } from '../IconButton'
import type { RemoveBtnProps } from './remove-btn.types'

export function RemoveBtn({ removeFn }: RemoveBtnProps) {
  return (
    <IconButton onClick={removeFn} variant='secondary'>
        <RemoveIcon/>
    </IconButton>
  )
}
