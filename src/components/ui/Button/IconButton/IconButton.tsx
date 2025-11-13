import { iconBtnStyles } from './icon-btn.styles'
import type { IconBtnProps } from './icon-btn.types'

export function IconButton({ children, variant }: IconBtnProps) {
  return (
    <button className={iconBtnStyles({ variant })}>
      { children }
    </button>
  )
}