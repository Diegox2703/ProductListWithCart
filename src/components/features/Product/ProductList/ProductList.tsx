import { PRODUCT } from '@/constants'
import { ProductItem } from '../ProductItem'
import { ProductListStyles } from './product-list.styles'

export function ProductList() {
  return (
    <div className={ProductListStyles.container}>
      {
        PRODUCT.map(product => (
          <ProductItem key={product.name} {...product}/>
        ))
      }
    </div>
  )
}
