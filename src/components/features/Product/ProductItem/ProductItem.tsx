import { ProductImage } from '../ProductImage'
import { ProductDetails } from '../ProductDetails'
import { ProductActionsBtns } from '../ProductActionBtns'
import type { ProductItemProps } from './product-item.types'

export function ProductItem({ name, category, price, image }: ProductItemProps) {
  return (
    <article className="flex flex-col gap-5 relative">
      <ProductImage image={image} name={name}/>
      <ProductActionsBtns name={name}/>
      <ProductDetails 
        category={ category }
        name={ name }
        price={ price }
      />
    </article>
  )
}