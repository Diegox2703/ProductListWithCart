import { CartIcon } from '@/components/ui'
import type { ProductCartBtnProps } from './product-cart-btn.types'
import { productCartBtnStyles } from './product-cart-btn.styles'

export function ProductCartBtn({ id, onCreateCartBtn }: ProductCartBtnProps) {
  return (
    <button 
      className={productCartBtnStyles}
      onClick={() => onCreateCartBtn(id)}
    >
        <CartIcon/>
        Add to cart
    </button>
  )
}