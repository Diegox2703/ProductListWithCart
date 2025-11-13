import { ProductList } from './ProductList'

export function Product() {
  return (
    <div className="flex-2 basis-[400px]">
      <h1 className="font-bold text-3xl text-Rose-900 mb-6">Desserts</h1>
      <ProductList/>
    </div>
  )
}