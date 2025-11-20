import { CartIcon } from '@/components/ui'
import type { ProductCartBtnProps } from './product-cart-btn.types'
import { productCartBtnStyles } from './product-cart-btn.styles'

export function ProductCartBtn({ createCartBtn }: ProductCartBtnProps) {
  return (
    <button 
      className={productCartBtnStyles}
      onClick={createCartBtn}
    >
        <CartIcon/>
        Add to cart
    </button>
  )
}