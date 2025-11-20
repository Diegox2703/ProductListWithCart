import { productStyles } from './product.styles'
import { ProductList } from './ProductList'

export function Product() {
  return (
    <div className={productStyles.container}>
      <h1 className={productStyles.title}>Desserts</h1>
      <ProductList/>
    </div>
  )
}