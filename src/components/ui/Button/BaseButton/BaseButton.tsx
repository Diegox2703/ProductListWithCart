import type { BaseButtonProps } from './base-button.types'

export function BaseButton({ children }: BaseButtonProps) {
  return (
    <button className="bg-Red text-white hover:bg-Red-800 p-3 rounded-4xl cursor-pointer">
      { children }
    </button>
  )
}
