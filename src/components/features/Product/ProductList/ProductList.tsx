import { ProductItem } from '../ProductItem'

export function ProductList() {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-5'>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </div>
  )
}
