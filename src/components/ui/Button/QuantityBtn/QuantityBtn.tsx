import type { QuantityBtnProps } from './quantity-btn.types'

export function QuantityBtn({ children }: QuantityBtnProps) {
  return (
    <button className="border border-Rose-50 hover:bg-Rose-50 hover:text-Red rounded-full size-4 flex justify-center items-center cursor-pointer">
      { children }
    </button>
  )
}
