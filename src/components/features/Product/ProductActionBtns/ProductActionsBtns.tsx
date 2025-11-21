import { ProductCartBtn } from '@/components/ui'
import { QuantitySelector } from '../QuantitySelector'
import type { ProductActionsBtnsProps } from './product-actions-btns.types'
import { productActionBtnsStyles } from './product-action-btns.styles'
import { useCart } from '@/hooks'

export function ProductActionsBtns({ id }: ProductActionsBtnsProps) {
  const { createCartItemFn, productInCart } = useCart()
  const { isProductInCart, quantity } = productInCart(id)

  return (
    <section className={productActionBtnsStyles.container}>
        {
            isProductInCart && quantity
            ? <QuantitySelector id={id} quantity={ quantity }/>
            : <ProductCartBtn id={id} onCreateCartBtn={createCartItemFn}/>
        }
    </section>
  )
}