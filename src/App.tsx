import { Cart, Product } from '@/components/features'

export default function App() {
  return (
    <div className='my-12 px-20 min-h-dvh flex flex-wrap gap-8'>
      <Product/>      
      <Cart/>
    </div>
  )
}