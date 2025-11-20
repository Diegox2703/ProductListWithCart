import { ProductCartBtn, QuantitySelector } from '@/components/ui'
import type { ProductActionsBtnsProps } from './product-actions-btns.types'
import { productActionBtnsStyles } from './product-action-btns.styles'
import { useCart } from '@/hooks'

export function ProductActionsBtns({ name }: ProductActionsBtnsProps) {
  const { createCartItemFn, handleQuantityFn, productInCart } = useCart()
  const { isProductInCart, quantity } = productInCart(name)

  return (
    <section className={productActionBtnsStyles.container}>
        {
            isProductInCart && quantity
            ? <QuantitySelector 
                onDecrement={() => handleQuantityFn({ action: 'decrement', name })}
                quantity={ quantity }
                onIncrement={() => handleQuantityFn({ action: 'increment', name })} 
              />
            : <ProductCartBtn createCartBtn={() => createCartItemFn(name)}/>
        }
    </section>
  )
}