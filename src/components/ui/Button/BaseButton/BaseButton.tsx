import type { BaseButtonProps } from './base-button.types'

export function BaseButton({ children, onClick }: BaseButtonProps) {
  return (
    <button 
      className="bg-Red text-white hover:bg-Red-800 p-3 rounded-4xl cursor-pointer"
      onClick={onClick}
    >
      { children }
    </button>
  )
}
