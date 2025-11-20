import { baseButtonStyles } from './base-button.styles'
import type { BaseButtonProps } from './base-button.types'

export function BaseButton({ children, onClick }: BaseButtonProps) {
  return (
    <button 
      className={baseButtonStyles}
      onClick={onClick}
    >
      { children }
    </button>
  )
}
