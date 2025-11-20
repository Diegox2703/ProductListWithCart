import { DecrementBtn } from '../DecrementBtn'
import { IncrementBtn } from '../IncrementBtn'
import { quantitySelectorStyles } from './quantity-selector.styles'
import type { QuantitySelectorProps } from './quantity-selector.types'

export function QuantitySelector({ quantity, onIncrement, onDecrement }: QuantitySelectorProps) {
  return (
    <div className={quantitySelectorStyles}>
        <DecrementBtn decrementQuantity={onDecrement}/>
        <p>{ quantity }</p>
        <IncrementBtn incrementQuantity={onIncrement}/>
    </div>
  )
}
