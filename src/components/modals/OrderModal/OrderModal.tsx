import { StartNewOrderBtn } from '@/components/ui'
import { useCart, useDisableScroll } from '@/hooks'
import { OrderHeader } from './OrderHeader'
import { OrderSummary } from './OrderSummary'
import { orderModalStyles } from './order-modal.styles'
import { motion } from 'motion/react'

export function OrderModal() {
  const { resetCartFn } = useCart()
  useDisableScroll()

  return (
    <motion.div 
      className={orderModalStyles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <motion.div 
          className={orderModalStyles.modal}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: 'spring', damping: 10, stiffness: 300 }}
        >
          <OrderHeader/>
          <OrderSummary/>
          <StartNewOrderBtn resetOrder={resetCartFn}/>
        </motion.div>
    </motion.div>
  )
}