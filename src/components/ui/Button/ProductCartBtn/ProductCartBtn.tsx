import { CartIcon } from '@/components/ui'
import type { ProductCartBtnProps } from './product-cart-btn.types'

export function ProductCartBtn({ createCartBtn }: ProductCartBtnProps) {
  return (
    <button 
      className="bg-white text-Rose-900 outline outline-Rose-500 hover:text-Red px-7 hover:outline-Red py-2.5 flex justify-center gap-2 rounded-4xl text-sm cursor-pointer transition-colors w-40"
      onClick={createCartBtn}
    >
        <CartIcon/>
        Add to cart
    </button>
  )
}