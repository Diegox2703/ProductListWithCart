import { Cart, Product } from '../features'
import { OrderModal } from '../modals'
import { mainStyles } from './main.styles'
import { useAppSelector } from '@/store'

export function Main() {
  const isOpen = useAppSelector(state => state.orderModal.isOpen)
  
  return (
    <main className={mainStyles.container}>
        <Product/>      
        <Cart/>
        { isOpen && <OrderModal/> }
    </main>
  )
}
