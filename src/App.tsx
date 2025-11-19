import { Cart, Product } from '@/components/features'
import { OrderConfirmationModal } from '@/components/modals'
import { useAppSelector } from './store'

export default function App() {
  const isOpen = useAppSelector(state => state.orderModal.isOpen)

  return (
    <div className='my-12 px-20 min-h-dvh flex flex-wrap gap-8'>
      <Product/>      
      <Cart/>
      { isOpen && <OrderConfirmationModal/> }
    </div>
  )
}