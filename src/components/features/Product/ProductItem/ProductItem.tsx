import { ProductImage } from '../ProductImage'
import { ProductDetails } from '../ProductDetails'
import { ProductActionsBtns } from '../ProductActionBtns'

export function ProductItem() {
  return (
    <article className="flex flex-col gap-5 relative">
      <ProductImage/>
      <ProductActionsBtns/>
      <ProductDetails/>
    </article>
  )
}