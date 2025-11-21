import { DecrementBtn, IncrementBtn } from '@/components/ui'
import { useCart } from '@/hooks'
import { quantitySelectorStyles } from './quantity-selector.styles'
import type { QuantitySelectorProps } from './quantity-selector.types'

export function QuantitySelector({ quantity, id }: QuantitySelectorProps) {
  const { handleQuantityFn } = useCart()

  return (
    <div className={quantitySelectorStyles}>
        <DecrementBtn id={id} onDecrementQuantity={handleQuantityFn}/>
        <p>{ quantity }</p>
        <IncrementBtn id={id} onIncrementQuantity={handleQuantityFn}/>
    </div>
  )
}
