import { productDetailsStyles } from './product-details.styles'
import type { ProductDetailsProps } from './product-details.types'

export function ProductDetails({ name, category, price }: ProductDetailsProps) {
  return (
    <section>
        <span className={productDetailsStyles.category}>{ category }</span>
        <h1 className={productDetailsStyles.name}>{ name }</h1>
        <p className={productDetailsStyles.price}>${ price.toFixed(2) }</p>
    </section>
  )
}