import { ProductImage } from '../ProductImage'
import { ProductDetails } from '../ProductDetails'
import { ProductActionsBtns } from '../ProductActionBtns'
import type { ProductItemProps } from './product-item.types'
import { productItemStyles } from './product-item.styles'

export function ProductItem({ id, name, category, price, image }: ProductItemProps) {
  return (
    <article className={productItemStyles.container}>
      <ProductImage image={image} id={id}/>
      <ProductActionsBtns id={id}/>
      <ProductDetails 
        category={ category }
        name={ name }
        price={ price }
      />
    </article>
  )
}