import { CartItem } from '@/components/features'
import { useAppSelector } from '@/store'
import { orderListStyles } from './order-list.styles'

export function OrderList() {
  const cartItems = useAppSelector(state => state.cart.items)

  return (
    <div className={orderListStyles.container}>
        {
          cartItems.map(cart => (
            <CartItem isOrder key={cart.name} {...cart}/>
          ))
        }
    </div>
  )
}