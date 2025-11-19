import { ProductCartBtn, QuantitySelector } from '@/components/ui'
import { createCartItem, useAppDispatch, useAppSelector } from '@/store'
import type { ProductActionsBtnsProps } from './product-actions-btns.types'
import { handleQuantity } from '@/store/features'

export function ProductActionsBtns({ name }: ProductActionsBtnsProps) {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart)

  const isProductInCart = cart.items.find(item => item.name === name)

  return (
    <section className="absolute bottom-18 w-full flex justify-center">
        {
            isProductInCart
            ? <QuantitySelector 
                onDecrement={() => dispatch(handleQuantity({ action: 'decrement', name }))}
                quantity={ isProductInCart.quantity }
                onIncrement={() => dispatch(handleQuantity({ action: 'increment', name }))} 
              />
            : <ProductCartBtn createCartBtn={() => dispatch(createCartItem(name))}/>
        }
    </section>
  )
}