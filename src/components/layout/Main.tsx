import { AnimatePresence } from 'motion/react'
import { Cart, Product } from '../features'
import { OrderModal } from '../modals'
import { mainStyles } from './main.styles'
import { useAppSelector } from '@/store'

export function Main() {
  const isOpen = useAppSelector(store => store.orderModal.isOpen)

  return (
    <main className={mainStyles.container}>
        <Product/>      
        <Cart/>
        <AnimatePresence>
          { isOpen && <OrderModal/>}
        </AnimatePresence>
    </main>
  )
}
