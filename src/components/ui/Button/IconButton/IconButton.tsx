import { iconBtnStyles } from './icon-btn.styles'
import type { IconBtnProps } from './icon-btn.types'

export function IconButton({ children, variant, onClick }: IconBtnProps) {
  return (
    <button 
      className={iconBtnStyles({ variant })}
      onClick={onClick}
    >
      { children }
    </button>
  )
}