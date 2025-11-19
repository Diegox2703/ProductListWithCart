import { DecrementBtn } from '../DecrementBtn'
import { IncrementBtn } from '../IncrementBtn'
import type { QuantitySelectorProps } from './quantity-selector.types'

export function QuantitySelector({ quantity, onIncrement, onDecrement }: QuantitySelectorProps) {
  return (
    <div className="bg-Red text-Rose-50 px-3 py-2.5 flex justify-between items-center gap-2 rounded-4xl text-sm transition-colors w-40">
        <DecrementBtn decrementQuantity={onDecrement}/>
        <p>{ quantity }</p>
        <IncrementBtn incrementQuantity={onIncrement}/>
    </div>
  )
}
