import { Cart, Product } from '../features'
import { OrderConfirmationModal } from '../modals'
import { useAppSelector } from '@/store'

export function Main() {
  const isOpen = useAppSelector(state => state.orderModal.isOpen)
  
  return (
    <main className="my-12 px-3 sm:px-10 lg:px-20 min-h-dvh flex flex-wrap gap-8 max-w-[1440px] m-auto">
        <Product/>      
        <Cart/>
        { isOpen && <OrderConfirmationModal/> }
    </main>
  )
}
