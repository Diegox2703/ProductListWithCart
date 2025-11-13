import { CartItem } from '../CartItem'

export function CartList() {
  return (
    <div className='flex flex-col gap-3'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </div>
  )
}